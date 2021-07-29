const router = require("express").Router();
const User = require("../Models/Users");
const bcrypt=require("bcrypt");
//REGISTER
router.post("/signup", async (req, res) => {
  try {
    //generate new password
    console.log("hello",req.body)
   const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //create new user
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phoneno:req.body.phoneno,
      address:req.body.address
    });
    console.log(newUser);

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    console.log("credential",req.body)
    const user = await User.findOne({ phoneno: req.body.phoneno });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
    console.log(err)
  }
});

module.exports = router;