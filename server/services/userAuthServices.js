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
    return{
        userSignup
    }

}
export default CreateAuthServices