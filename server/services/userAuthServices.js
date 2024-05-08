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
    const googleLogin = async(userdata)=>{
        try{
    const {given_name,picture,email} = userdata
    const user = await UserModel.findOne({email})
    if(!user){
        const newUser = await UserModel.create({
          username : given_name,
          email : email,
          isBlocked : false,
          profileImage : picture,
        })
        console.log(newUser,"newuser");
        const token = newUser.generateAuthToken();
        console.log('token')
        return { token, user: newUser };
    }
    console.log('old user')

    const token = user.generateAuthToken();
    // console.log(token);
        return { token, user: user };
        
        }catch(error){
throw error
        }
    }


    return{
        userSignup,
        userlogin,
        googleLogin
    }
}
module.exports= CreateAuthServices