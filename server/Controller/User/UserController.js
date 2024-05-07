const CreateAuthServices = require('../../services/userAuthServices')
const authService = CreateAuthServices();
const UserModel = require('../../Models/UserModel')


module.exports={
     UserSignupController: async(req,res)=>{
        try{
    const {username,email,password} = req.body
    const Newuser= await authService.userSignup(username,email,password)
    res.status(201).json({ message: "User signup successful", user: Newuser });
    
        }catch(error){
        console.error(error);
        res.status(400).json({error:error.message})
        }
    },

     UserloginController : async(req,res)=>{
        try{
      const  {email,password} = req.body
      const {token,user} = await authService.userlogin(email,password)
      res.status(200).json({ message: "User login successful", token, user });
    
    
        }catch(error){
         console.log(error);
         res.status(400).json({error:error.message})
        }
    }
}
 


