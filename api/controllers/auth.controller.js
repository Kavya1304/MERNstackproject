import User from "../Models/user.model.js";
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import  jwt  from "jsonwebtoken";

export const signup= async (req,res,next)=>{
    const {username, email , password}=req.body;
    const hashedPassword=bcrypt.hashSync(password, 10);
    const newUser = new User({username, email , password:hashedPassword});
    try{
        await newUser.save()
        res.status(201).json("User Created Successfully");
    }catch(error){
        next(error);
    }
};


export const signin=async(req, res, next)=>{
    const{email, password}=req.body;
    try {
        const validUser=await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404,"user not found!"));
        }
        const validPassword=bcrypt.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401, "Wrong Credential!"));
        const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        const {password: pass, ...rest}=validUser._doc;
        res
        .cookie('access_token',token)
        .status(200)
        .json(rest);
    } catch (error) {
        next(error);
    }
};