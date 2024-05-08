const CreateAuthServices = require('../../services/userAuthServices')
const authService = CreateAuthServices();
// const UserModel = require('../../Models/UserModel')
const { OAuth2Client } = require('google-auth-library');

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
    },
    google_loign: async(req,res)=>{
        try{
             
        const {credential} =req.body
        const googleClientid =process.env.CLIENT_ID
        const client = new OAuth2Client(googleClientid)
        // console.log(client);

        const ticket = await client.verifyIdToken({
            idToken:credential,
            audience:googleClientid
        })
        
      const payload = ticket.getPayload()
      const userid = payload['sub'];
console.log(payload,"payload");
    const {token,user} = await authService.googleLogin(payload)


    res.status(200).json({ message: "User login successful", token, user });
        }catch(error){
    console.log(error);
    res.status(400).json({error:error.message}) 
        }
    }
    
}
 


