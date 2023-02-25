const express=require('express');
const ProductController=require('../controllers/ProductController')
const router=express.Router();
const upload=require('../helpers/multer')

router.post('/create',upload.upload.array("images"),ProductController.createProduct);
module.exports=router