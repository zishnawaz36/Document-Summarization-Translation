import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import connectDB from "./utlis/connectdb.js";

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the database and start the server
const startServer = async () => {
  const JWT_SECRET = process.env.JWT_SECRET;

  // Ensure JWT_SECRET is set
  if (!JWT_SECRET) {
    console.error("JWT_SECRET is not defined in environment variables");
    process.exit(1); // Exit the server if JWT_SECRET is missing
  }

  await connectDB();

  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    }
  }, { timestamps: true });

  const Project = mongoose.model("Project", userSchema);

  // Register route
  app.post("/project/register", async (req, res) => {
    try {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      const user = await Project.create({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
      });
      res.status(201).json({ success: true, message: "User registered successfully", user });
    } catch (err) {
      console.log("Error while registering user:", err.message);
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

  // Login route
  app.post("/project/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }

      const user = await Project.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

      res.json({ message: "Login successful", token });
    } catch (err) {
      console.error("Error occurred during login:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Logout route
  app.post("/project/logout", async (req, res) => {
    try {
      res.status(200).json({
        success: true,
        message: "Logout Successfully",
        token: ""  // Send empty token for logout
      });
    } catch (err) {
      res.status(500).json({ success: false, message: "Error to connect", error: err.message });
      console.log("Error to connect", err.message);
    }
  });

  // Middleware to verify token
  const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(400).json({
        message: "No token provided",
      });
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Unauthorized"
        });
      }
      req.userId = decoded;
      next();
    });
  };

  // Start server
  app.listen(4500, () => {
    console.log("Server is running on port 4500");
  });
};

// Start the server
startServer();
