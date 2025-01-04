const express = require('express')
const router = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')

router.use(express.json())

function createToken(id){
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn: '1d'})
}

router.post('/signup',async (req,res)=>{
    const {username,email,password} = req.body
    try{
        const user = await User.signup(username,email,password)
        const token = createToken(user.id)
        res.json({token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

router.post('/login',async (req,res)=>{
    const {email,password} = req.body
    try{
        const user = await User.login(email,password)
        const token = createToken(user.id)
        res.json({token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

module.exports = router