const mongoose=require('mongoose');
const Product=require('../models/Product');
const cloudinary=require('../helpers/cloudinary');

exports.createProduct=async(req,res)=>{
    try {
        const files=req.files;
        const url=[];
        for(const file of files){
            const result=await cloudinary.uploader.upload(file.path)
            url.push(result.secure_url)
        }
    const newProduct=new Product({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        seller:req.body.seller,
        stock:req.body.stock,
        comment:req.body.comment,
        rating:req.body.rating,
        category:req.body.category,
        images:url
    })
    await newProduct.save();
    return res.status(200).json(newProduct)
    } catch (error) {
        return res.status(400).json({message:error})
    }
}