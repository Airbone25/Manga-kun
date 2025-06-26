require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// whitelist = ['http://localhost:5173']

// let corsOptions = {
//   origin: function (origin, callback) {
//     console.log(`Origin ${origin}`)
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions))
app.use(cors())
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