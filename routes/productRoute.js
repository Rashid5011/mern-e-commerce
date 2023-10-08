const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const { authorizeRoles, isAutherticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProduct);
router
  .route("/admin/products/new")
  .post(isAutherticatedUser, createProduct);
router
  .route("/admin/products/:id")
  .put(isAutherticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAutherticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAutherticatedUser, createProductReview);
router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAutherticatedUser, deleteReview);

module.exports = router;
