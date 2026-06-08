const express = require ("express");
const router = express.Router();

const User = require("../models/User");
// const { use } = require("react");

router.post("/signup",async (req, res) => {
  const {name, email, password} = req.body;

  const user = await User.create({
  name,
  email,
  password
});
res.json(user);
})

router.post("/login",async(req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({
    email
  })
  if (!user || user.password !== password) {
  return res.json({
    message : "Invalid user"
  });
}
res.json({
  message : "login successfully"
})

})



module.exports = router;