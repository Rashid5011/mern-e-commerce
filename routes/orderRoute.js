const express = require("express");
const { authorizeRoles, isAutherticatedUser } = require("../middleware/auth");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

router.route("/order/new").post(isAutherticatedUser, newOrder);
router.route("/order/:id").get(isAutherticatedUser, getSingleOrder);
router.route("/order/me").get(isAutherticatedUser, myOrders);

router
  .route("/admin/order")
  .get(isAutherticatedUser, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAutherticatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAutherticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
