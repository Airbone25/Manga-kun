const jwt = require('jsonwebtoken')
const User = require('../models/User')

const requireAuth = async (req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization){
        res.status(401).json({error: 'Auth Token is required'})
    }
    const token = authorization.replace('Bearer ','')
    try{
        const {id} = jwt.verify(token,process.env.SECRET)
        req.user = await User.findById(id)
        next()
    }catch(error){
        res.status(401).json({error: 'Request is not authorized'})
    }
}

module.exports = requireAuth