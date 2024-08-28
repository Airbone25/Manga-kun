const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())

mongoose.connect(process.env.DB_URI)
const db = mongoose.connection
db.on('error',(error)=>console.log(error.message))
db.once('open',()=>console.log('Database is connected!!'))

app.listen(process.env.PORT || 3000,()=>{
    console.log('Server is running!!')
})