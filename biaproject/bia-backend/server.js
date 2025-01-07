const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path'); // Import path module

const productRoutes = require('./routes/productRoutes'); // Your product routes
const dashboardRoutes = require('./routes/dashboardRoutes'); // Dashboard routes
const orderRoutes = require('./routes/orderRoutes'); // Order routes
const authRoutes = require('./routes/authRoutes'); // Auth routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use('/api/products', productRoutes); // Product routes
app.use('/api/dashboard', dashboardRoutes); // Dashboard routes
app.use('/api/orders', orderRoutes); // Order routes
app.use('/api/auth', authRoutes); // Auth routes

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
