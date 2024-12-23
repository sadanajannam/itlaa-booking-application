const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const rideRoutes = require('./routes/rides');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);
app.use('/api/rides', rideRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



















// // const express = require('express');
// // const mongoose = require('mongoose');
// // require('dotenv').config();
// // const userRoutes = require('./routes/user');
// // const rideRoutes = require('./routes/ride');
// // const app = express();
// // app.use(express.json());
// // const cors = require('cors');
// // // app.use(cors());
// // app.use(cors({
// //   origin: 'http://localhost:3000', // Adjust to your frontend's URL
// //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// // }));


// // // MongoDB connection
// // mongoose
// //   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log('MongoDB connected'))
// //   .catch((err) => console.error('MongoDB connection error:', err));

// // // Routes
// // app.use('/api/users', userRoutes);
// // app.use('/api/rides', rideRoutes);

// // // Assuming you have Express and a database connection setup
// // app.post('/api/auth/register', async (req, res) => {
// //   const { username, email, password } = req.body;

// //   try {
// //     const newUser = new User({ username, email, password });
// //     await newUser.save();

// //     res.status(201).json({ message: "User registered successfully!" });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: "Error registering user", error });
// //   }
// // });

// // // Start server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server started on port ${PORT}`);
// // });



// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const cors = require('cors');
// const User = require('./models/User');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Register route
// app.post('/api/auth/register', async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     // Directly saving the provided password
//     const newUser = new User({ username, email, password });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Error registering user", error });
//   }
// });

// app.post('/api/auth/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     if (user.password !== password) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );

//     res.status(200).json({ message: "Login successful", token });
//   } catch (error) {
//     res.status(500).json({ message: "Error logging in", error });
//   }
// });

// // app.post('/api/auth/register', async (req, res) => {
// //   console.log("Request received:", req.body); // Log request data
// //   const { username, email, password } = req.body;

// //   try {
// //     const newUser = new User({ username, email, password });
// //     await newUser.save();
// //     console.log("User registered:", newUser); // Log success
// //     res.status(201).json({ message: "User registered successfully!" });
// //   } catch (error) {
// //     console.error("Error registering user:", error); // Log error
// //     res.status(500).json({ message: "Error registering user", error });
// //   }
// // });
// // app.post('/api/auth/register', async (req, res) => {
// //   const { username, email, password } = req.body;

// //   try {
// //     const salt = await bcrypt.genSalt(10);
// //     const hashedPassword = await bcrypt.hash(password, salt);

// //     const newUser = new User({ username, email, password: hashedPassword });
// //     await newUser.save();

// //     res.status(201).json({ message: "User registered successfully!" });
// //   } catch (error) {
// //     res.status(500).json({ message: "Error registering user", error });
// //   }
// // });

// // app.post('/api/auth/login', async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(401).json({ message: "Invalid credentials" });
// //     }

// //     const token = jwt.sign(
// //       { id: user._id, email: user.email },
// //       process.env.JWT_SECRET,
// //       { expiresIn: '1h' }
// //     );

// //     res.status(200).json({ message: "Login successful", token });
// //   } catch (error) {
// //     res.status(500).json({ message: "Error logging in", error });
// //   }
// // });
// // // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
