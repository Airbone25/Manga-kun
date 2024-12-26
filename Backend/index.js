const express = require('express')
// const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')

const app = express()

app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const storage = multer.diskStorage({
    destination: (req,res,cb)=>{
        cb(null,'./public')
    },
    filename: (req,res,cb)=>{
        cb(null,`${Date.now()}-${res.originalname}`)
    }
})

const upload = multer({storage})

//local database
let db = []

//mongodb connection
// mongoose.connect(process.env.DB_URI)
// const db = mongoose.connection
// db.on('error',(error)=>console.log(error.message))
// db.once('open',()=>console.log('Database is connected!!'))

app.get('/api',(req,res)=>{
    res.json(db)
})

app.get('/api/:id',(req,res)=>{
    const id = req.params.id
    const manga = db[id]
    res.json(manga)
})

app.post('/api',upload.fields([{name: 'manga',maxCount: 1},{name: 'cover',maxCount: 1}]),(req,res)=>{
    const newManga = {
        title: req.body.title,
        description: req.body.description,
        manga: req.files['manga'][0].filename,
        cover: req.files['cover'][0].filename,
        license: req.body.license
    }
    db.push(newManga)
    res.json({"message":"Manga added successfully!!"})
})

app.listen(process.env.PORT || 3000,()=>{
    console.log('Server is running!!')
})