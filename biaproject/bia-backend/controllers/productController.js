const updateProduct = async (req, res) => {
  const id = req.params.id.trim(); // Trim any unnecessary characters
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
      { new: true } // Return the updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('PUT Error:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
