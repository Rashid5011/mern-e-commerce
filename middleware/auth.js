const User = require("../model/userModel");
const ErrorHandler = require("../utils/errorHandlor");
const jwt = require("jsonwebtoken");
const catchAsyncError = require("./catchAsyncError");

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resource`,
          403
        )
      );
    }

    next();
  };
};

exports.isAutherticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("please login to access resources", 401));
  }
  let secrect_token = "jbkjadkjjbiuasdbiljhvbkhkvbads";
  const decodedData = jwt.verify(token, secrect_token);
  req.user = await User.findById(decodedData.id);

  next();
});
