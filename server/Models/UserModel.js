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
module.exports = mongoose.model("User", UserSchema);
