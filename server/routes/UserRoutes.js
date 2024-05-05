const CreateAuthServices = require('../services/userAuthServices')
const authService = CreateAuthServices();

export const UserSignupController = async(req,res)=>{
    try{
const {username,email,password} = req.body
const Newuser= await authService.userSignup(username,email,password)
res.status(201).json({ message: "User signup successful", user: Newuser });

    }catch(error){
    console.error(error);
    res.status(400).json({error:error.message})
    }
}