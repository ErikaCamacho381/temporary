const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
{

    username:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: Number,
        required: true
    }
}
)

module.exports = mongoose.model('user', userSchema);

 