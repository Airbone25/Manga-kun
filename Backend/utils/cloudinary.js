require('dotenv').config()
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const imageStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'manga-kun/covers',
        allowed_formats: ['png','jpg','webp','jpeg'],
        resource_type: 'auto'
    }
})

const pdfStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{ 
        folder: 'manga-kun/pdfs',
        format: 'pdf',
        public_id: (req, file) => `${Date.now()}-${file.originalname.split('.')[0]}`,
        resource_type: 'raw',
        allowed_formats: ['pdf']
    }
});

module.exports = {cloudinary,imageStorage,pdfStorage}