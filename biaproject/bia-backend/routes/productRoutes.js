const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require('multer');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique file name
  },
});

const upload = multer({ storage });

// Serve images from the uploads directory
router.use('/uploads', express.static('uploads'));

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Create a new product with an image
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;
    const image = req.file ? req.file.filename : null; // Save only the filename

    if (!name || !price || !description || !category || !stock) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const product = new Product({
      name,
      price,
      description,
      category,
      stock,
      image,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Update a product by ID with an image
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;
    const updateData = {
      name,
      price,
      description,
      category,
      stock,
    };

    if (req.file) {
      updateData.image = req.file.filename; // Save the new image filename
    }

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Validate data before updating
    });

    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

router.post('/bulk-delete', async (req, res) => {
  try {
    const { productIds } = req.body; // Receive product IDs to delete
    await Product.deleteMany({ _id: { $in: productIds } }); // Delete products
    res.status(200).json({ message: 'Products deleted successfully' });
  } catch (error) {
    console.error('Error deleting products:', error);
    res.status(500).json({ error: 'Failed to delete products' });
  }
});


module.exports = router;
