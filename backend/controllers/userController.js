import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// Function to create JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    } else {
      // Create token
      const token = createToken(user._id);
      res.json({
        success: true,
        token,
        message: "User logged in successfully",
        user: { id: user._id, name: user.name, email: user.email },
      });
    }
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Route for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter a valid email" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter a strong password" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({
      success: true,
      token,
      message: "User registered successfully",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
