const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function(username,email,password){
    const existingEmail = await this.findOne({email})
    if(existingEmail){
        throw new Error("Email Already Registered!")
    }
    const existingUser = await this.findOne({username})
    if(existingUser){
        throw new Error("Username Already Exist!")
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await this.create({username,email,password: hashedPassword})
    return user
}

userSchema.statics.login = async function(email,password){
    const user = await this.findOne({email})
    if(!user){
        throw new Error("User Does not Exist!")
    }
    const isValid = await bcrypt.compare(password,user.password)
    if(!isValid){
        throw new Error("Wrong Password!")
    }
    return user
}

module.exports = mongoose.model('User',userSchema)