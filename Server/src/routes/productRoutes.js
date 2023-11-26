const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
  cloud_name: 'dtxzccd9i', 
  api_key: '826937285695116', 
  api_secret: 'IA-EzfxHUsxrsUiZHWrwX-qIL6o' 
});
  // Create a new product
  router.post('/products', async (req, res) => {
    try {
      console.log(req.body);  // Log the request body to check if photo is present
      const { name, price,color,fabricType, gender,no_of_pieces,quantity } = req.body;
      const {photo} = req.files
      // Upload the file to Cloudinary
      let img = ''
      await cloudinary.uploader.upload(
        photo.tempFilePath,
        async(err,result)=> {
          img = result.secure_url
        }
    );
          
      // Create a new product instance
      const newProduct = new Product({
        name,
        price,
        photo: img,
        color,
        fabricType,
        gender,
        no_of_pieces,
        quantity,
      });
      console.log("New Product Instance:", newProduct);
      // Save the new product to the database
      await newProduct.save();
      console.log("Product Saved Successfully:", newProduct);
      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error, "error in post");
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  // Get all products
  router.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  // Get a single product by ID
  router.get('/products/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Update a product by ID
  router.put('/products/:id', async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Delete a product by ID
  router.delete('/products/:id', async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(deletedProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  module.exports = router;