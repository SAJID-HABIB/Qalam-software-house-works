const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// const User = require("../models/User");

const signup = async (
  req,
  res
) => {

  try {

    const {
      firstName,
      lastName,
      city,
      mobileNumber,
      email,
      password,
      role
    } = req.body;

    const userExists =
      await User.findOne({
        email
      });

    if (userExists) {
      return res.status(400).json({
        message:
          "Email already exists"
      });
    }
 const hashedPassword = await bcrypt.hash(password, 10);
    const user =
      await User.create({
        firstName,
        lastName,
        city,
        mobileNumber,
        email,
        password : hashedPassword,
        role
      });

    res.status(201).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const login = async (
  req,
  res
) => {

  try {

    const {
      email,
      password
    } = req.body;

    const user =
      await User.findOne({
        email
      });

    if (
      !user ||
      user.password !== password
    ) {
      return res.status(400).json({
        message:
          "Invalid User"
      });
    }

      const isMatch =
    await bcrypt.compare(
      password,
      user.password
    );


  if (!isMatch) {
    return res.status.json({
      message: "Wrong Password"
    });
  }

   const token = jwt.sign(
    {
      id: user._id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  );

    res.json({
      message:
        "Login Successful"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  signup,
  login
};