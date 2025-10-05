const Product = require("../models/Product");

// Add product
exports.addProduct = async (req, res) => {
  try {
    const { name, price, stock, description } = req.body;
    const product = new Product({ name, price, stock, description });
    await product.save();
    res.json({ message: "Product added successfully", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Product updated successfully", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// View all products (inventory)
exports.getInventory = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Approve return (placeholder)
exports.approveReturn = async (req, res) => {
  try {
    res.json({ message: `Return request ${req.params.id} approved ✅` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
