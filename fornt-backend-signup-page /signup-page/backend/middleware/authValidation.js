const signupValidation = (
  req,
  res,
  next
) => {

  const {
    firstName,
    lastName,
    city,
    mobileNumber,
    email,
    password,
    confirmPassword
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !city ||
    !mobileNumber ||
    !email ||
    !password ||
    !confirmPassword
  ) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Passwords do not match"
    });
  }

  next();
};

module.exports = {
  signupValidation
};