const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        type: String,
    },
    profileImage:
     { type: String },
});

UserSchema.methods.generateAuthToken = function () {
    try {
        const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY, {
            expiresIn: "7d",
        });
        return token;
    } catch (error) {
        // Handle JWT signing error
        console.error("Error generating token:", error);
        throw new Error("Error generating token");
    }
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
