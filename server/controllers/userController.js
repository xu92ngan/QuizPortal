const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const JWT_SECRET = 'quizportal';

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(200).send({
        message: 'User already exists',
        success: false,
      });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    password = hashedPassword;

    //create new user
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      message: 'User created sucessfully',
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email: email });
    if (!userExists) {
      return res
        .status(200)
        .send({ message: 'User does not exist', success: false });
    }
    const validPassword = await bcrypt.compare(password, userExists.password);
    if (!validPassword) {
      return res
        .status(200)
        .send({ message: 'Invalid password', success: false });
    }
    res.send({
      message: 'User logged in successfully',
      success: true,
      data: generateToken(userExists._id),
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

const getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    res.send({
      message: 'User info fetch successfully',
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
};
