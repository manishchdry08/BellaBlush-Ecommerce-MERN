const express = require("express");
const router = express.Router();
const { getCatalogue, getProduct, addToCart, getCart, placeOrder } = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

router.get("/catalogue", getCatalogue);
router.get("/products/:id", getProduct);
router.post("/cart", auth, addToCart);
router.get("/cart", auth, getCart);
router.post("/order", auth, placeOrder);

module.exports = router;