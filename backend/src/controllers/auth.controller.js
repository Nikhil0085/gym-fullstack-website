const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const optModel = require("../models/otp.model");

const generateOTP = require("../utils/generateOTP");
const sendEmail = require("../services/sendEmail");

async function  signup (req, res) {
    try{
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
       return res.status(400).json({
            message:"all fields are required"

        })
    }

    const userExist = await userModel.findOne({
        email: email
    })
    if (userExist) {
      return  res.status(400).json({
            message: "user already exists"
        })
    }
    const hashedPassword = await bcrypt.hash(
        password,
        10

    );

    await userModel.create({
      name,
      email,
      password: hashedPassword,
      isVerified: false,
    });
        const otp = generateOTP();
        console.log("this is otp------",otp)
    
        await optModel.create({
          email,
          otp,
          expiresAt: new Date(Date.now() + 10 * 60 * 1000),
        });
         console.log("this is otp------", otp);
    
        await sendEmail(email, otp);
        console.log("Generated OTP:", otp);
        return res.status(201).json({
          success: true,
          message: "OTP sent successfully",
        });
    
         } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }

}
 async function  verifyOTP (req, res)  {
    
    try {
        const { email, otp } = req.body;
        const otpRecord = await optModel.findOne({ email });
        if (!otpRecord) {
           return res.status(400).json({
                message: "OTP not found"

            })
        }
        if (otpRecord.expiresAt < Date.now()) {
            return res.status(400).json({
                message: "OTP expired",
            });
        }
        if (otpRecord.otp !== otp) {
            return res.status(400).json({
                message: "Invalid OTP",
            });
        }
        await userModel.findOneAndUpdate(
          { email },
          {
            isVerified: true,
          },
        );
        await optModel.deleteMany({ email });
        return res.status(200).json({
            success: true,
            message: "Account verified",
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        
        });

    }
}
async function login(req, res) {
    try {
        
    
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "all fields are required"
            })
        
        }
        const user = await userModel.findOne({
            email,
        })
        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }
        if (!user.isVerified) {
            return res.status(400).json({
                message: "please verify your email first"
            })
        }
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        )
        if (!isPasswordCorrect) {
            return res.status(400).json({
                messsage: "invalid credentials"
            })
        }
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            },
        );
         return res.status(200).json({
           success: true,
           token,
           user: {
             id: user._id,
             name: user.name,
             email: user.email,
             role: user.role,
           },
         });
    } catch (err) {
           return res.status(500).json({
             message: error.message,
           });
    }

}
async function getprofile(req, res) {
    try {
        const user = await userModel.findById(
            req.user.id
            
        ).select("-password")
        res.status(200).json({
            success: true,
            user,
        })
         
    } catch (err) {
        return res.status(500).json({
            message: error.message,

        })
     }
 }

module.exports={
    signup,
    verifyOTP,
    login,
  getprofile
}