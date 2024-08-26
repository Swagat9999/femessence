const express = require('express');
const app = express();
const zod=require("zod");
const {Admin, Course, Product } = require('../db');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../middleware/auth');
const cors = require('cors');
app.use(cors());
const { authenticateJwt } = require('../middleware/auth');

const router = express.Router();

// Admin routes
const signupBody = zod.object({
  username: zod.string().email(),
firstName: zod.string(),
lastName: zod.string(),
password: zod.string()
})

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body)
  if (!success) {
      return res.status(411).json({
          message: "Email already taken / Incorrect inputs"
      })
  }

  const existingUser = await Admin.findOne({
      username: req.body.username
  })

  if (existingUser) {
      return res.status(411).json({
          message: "Email already taken"
      })
  }

  const user = await Admin.create({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
  })
  const userId = user._id;

  

  const token = jwt.sign({
      userId
  }, secretKey);

  res.json({
      message: "User created successfully",
      token: token
  })
})


router.get('/me', authenticateJwt, (req, res) => {
  res.json(req.user);
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });

  if (admin) {
    const token = jwt.sign({ username, password }, secretKey, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token, username });
  } else {
    res.status(403).json({ message: 'Admin authentication failed' });
  }
});

router.post('/courses', authenticateJwt, async (req, res) => {
  const newCourse = new Product(req.body);
  await newCourse.save();
  res.json({ message: 'Course created successfully', courseId: newCourse._id });
});

router.put('/courses/:courseId', authenticateJwt, async (req, res) => {
  const course = await Product.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
  if (course) {
    res.json({ message: 'Course updated successfully' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

router.get('/courses', async (req, res) => {
  const courses = await Product.find({});
  res.json(courses);
});

module.exports = router;
