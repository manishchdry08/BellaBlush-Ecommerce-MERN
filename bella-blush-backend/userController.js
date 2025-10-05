const Product = require("../models/Product");
const Cart = require("../models/Cart");
const Order = require("../models/Order");

exports.getCatalogue = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      cart = new Cart({ userId: req.user.id, products: [{ productId, quantity }] });
    } else {
      const itemIndex = cart.products.findIndex(p => p.productId.toString() === productId);
      if (itemIndex > -1) cart.products[itemIndex].quantity += quantity;
      else cart.products.push({ productId, quantity });
    }
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate("products.productId");
    res.json(cart || { products: [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate("products.productId");
    if (!cart || cart.products.length === 0) return res.status(400).json({ message: "Cart is empty" });
    const order = new Order({ userId: req.user.id, products: cart.products, paymentMethod: "COD", status: "placed" });
    await order.save();
    await Cart.deleteOne({ userId: req.user.id });
    res.json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};