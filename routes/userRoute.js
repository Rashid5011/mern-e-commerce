const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgetPassowrd,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUsers,
  getSingleUsers,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const { authorizeRoles, isAutherticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forget").post(forgetPassowrd);
router.route("/password/reset/:token").put(resetPassword);

router.route("/me").get(isAutherticatedUser, getUserDetails);
router.route("/password/update").put(isAutherticatedUser, updatePassword);
router.route("/me/update").put(isAutherticatedUser, updateProfile);

router
  .route("/admin/user")
  .get(isAutherticatedUser, authorizeRoles("admin"), getAllUsers);

router
  .route("/admin/user/:id")
  .get(isAutherticatedUser, authorizeRoles("admin"), getSingleUsers)
  .put(isAutherticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAutherticatedUser, authorizeRoles("admin"), deleteUser);

router.route("/me/update").get(isAutherticatedUser, updateProfile);

module.exports = router;
