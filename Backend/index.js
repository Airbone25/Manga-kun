require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors(
    {
        origin: `https://manga-kun.onrender.com`
    }
))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// let db = [] Local array as database for testing purpose

//mongodb connection
mongoose.connect(process.env.DB_URI)
const db = mongoose.connection
db.on('error',(error)=>console.log(error.message))
db.once('open',()=>console.log('Database is connected!!'))

//routes
const authRouter = require('./routes/auth')
app.use('/auth',authRouter)

const mangaRouter = require('./routes/api')
app.use('/api',mangaRouter)

//Server
app.listen(process.env.PORT || 3000,()=>{
    console.log('Server is running!!')
})