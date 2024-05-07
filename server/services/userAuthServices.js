const UserModel = require('../Models/UserModel')
const Bcrypt = require('bcrypt')

const CreateAuthServices =()=>{
 
    const SALT_ROUND= 10

    const userSignup = async(username,email,password)=>{

        try{
            const existingUser = await UserModel.findOne({email})
            if(existingUser){
                throw new Error("Email Already Registered")
            }
            const HashedPassword =await Bcrypt.hash(password,SALT_ROUND)
            const isBlocked = false
            const newUser = await UserModel.create({
                username,
                email,
                password: HashedPassword,
                isBlocked
              });
              return newUser;

        }catch(error){
throw error
        }
    }

    const userlogin = async(email,password)=>{
      try{
       const user = await UserModel.findOne({email})
       if(!user){
        throw new Error("User not found");
       }
       const passwordMatch = await Bcrypt.compare(password, user.password);
       if (!passwordMatch) {
         throw new Error("Invalid password");
       }

 const token = user.generateAuthToken()
      return { token, user };

        }catch(error){
throw error
        }  
    }


    return{
        userSignup,
        userlogin
    }

}
module.exports= CreateAuthServices