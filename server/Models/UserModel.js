const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        unique:true,
        type:String
    },
    password:{
        required:true,
        type:String,
    },
    authSourse:{
      enum:["self","google"],
      default:"self"
    }
})
const User = mongoose.model("User", UserSchema);
module.exports = User