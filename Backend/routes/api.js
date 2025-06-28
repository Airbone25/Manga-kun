const express = require('express')
const router = express.Router()
const Manga = require('../models/Manga')
const User = require('../models/User')
const multer = require('multer')
const requireAuth = require('../middlewares/requireAuth')
const { imageStorage,pdfStorage } = require('../utils/cloudinary')

const storage = multer.diskStorage({
    destination: (req,res,cb)=>{
        cb(null,'./public')
    },
    filename: (req,res,cb)=>{
        cb(null,`${Date.now()}-${res.originalname}`)
    }
})

const upload = multer({storage})
const imageUpload = multer({storage: imageStorage})
const pdfUpload = multer({storage: pdfStorage})

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

router.post('/',requireAuth,upload.fields([{name: 'pdf',maxCount: 1},{name: 'cover',maxCount: 1}]),async (req,res)=>{
        const manga = new Manga({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            manga: {
                title: req.body.title || "Chapter 1",
                pdf: req.files['pdf'][0].filename
            },
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

router.patch('/new-chapter/:id', requireAuth, pdfUpload.single('pdf'), async (req, res) => {
    const animeId = req.params.id;

    try {
        const anime = await Manga.findById(animeId);
        if (!anime) {
            return res.json({ error: "Anime Not Found" });
        }

        if (anime.userId != req.user.id) {
            return res.json({ error: "This user is not the author" });
        }

        if (!req.file) {
            return res.json({ error: "No PDF file uploaded" });
        }

        console.log("Request file: "+JSON.stringify(req.file))

        const newChapter = {
            title: req.body.title,
            pdf: req.file.secure_url
        };

        console.log("Uploaded Chapter:", JSON.stringify(newChapter, null, 2));

        anime.manga.push(newChapter);
        await anime.save();

        res.json({ message: "Manga Updated", chapter: newChapter });
    } catch (error) {
        console.error(error);
        res.json({ error: error.message });
    }
})


module.exports = router