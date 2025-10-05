const express = require("express");
const router = express.Router();
const {
  addProduct,
  updateProduct,
  deleteProduct,
  getInventory,
  approveReturn
} = require("../controllers/adminController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

// ✅ Add Product
router.post("/products", auth, role("admin"), addProduct);

// ✅ Update Product
router.put("/products/:id", auth, role("admin"), updateProduct);

// ✅ Delete Product
router.delete("/products/:id", auth, role("admin"), deleteProduct);

// ✅ View All Products (alias: /products OR /inventory)
router.get("/products", auth, role("admin"), getInventory);
router.get("/inventory", auth, role("admin"), getInventory);

// ✅ Approve Return Request
router.put("/returns/:id", auth, role("admin"), approveReturn);

module.exports = router;
