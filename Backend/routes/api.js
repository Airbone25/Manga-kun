const express = require('express')
const router = express.Router()
const Manga = require('../models/Manga')
const User = require('../models/User')
const multer = require('multer')
const requireAuth = require('../middlewares/requireAuth')

const storage = multer.diskStorage({
    destination: (req,res,cb)=>{
        cb(null,'./public')
    },
    filename: (req,res,cb)=>{
        cb(null,`${Date.now()}-${res.originalname}`)
    }
})

const upload = multer({storage})

router.get('/',async (req,res)=>{
    try{
        const mangas = await Manga.find()
        res.json(mangas)
    }catch(error){
        console.log(error.message)
    }
})

router.get('/profile',requireAuth,async (req,res)=>{
    try{
        const id = req.user.id
        const mangas = await Manga.find({userId: id})
        const user = await User.findById(id)
        res.json({mangas,user})
    }catch(error){
        res.status(404).json({error: error.message})
    }
})

router.get('/:id',async (req,res)=>{
    try{
        let manga = await Manga.findById(req.params.id)
        res.json(manga) 
    }catch(error){
        console.log(error.message)
    }
})

router.post('/',requireAuth,upload.fields([{name: 'manga',maxCount: 1},{name: 'cover',maxCount: 1}]),async (req,res)=>{
        const manga = new Manga({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            manga: req.files['manga'][0].filename,
            cover: req.files['cover'][0].filename,
            license: req.body.license,
            userId: req.user.id
        })
    try{
        const newManga = await manga.save()
        res.status(201).json(newManga)
    }catch(error){
        console.log(error.message)
    }
})


module.exports = router