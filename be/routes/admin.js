const express = require('express');
const app = express();
const { User, Admin, Course, Product } = require('../db');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../middleware/auth');
const cors = require('cors');
app.use(cors());
const { authenticateJwt } = require('../middleware/auth');

const router = express.Router();

// Admin routes
router.post('/signup', async (req, res) => {
  const admin = req.body;
  const adminExists = await Admin.findOne({ username: admin.username });
  if (adminExists) {
    res.status(403).json({ message: 'Admin already exists' });
  } else {
    const newAdmin = new Admin(admin);
    await newAdmin.save();
    const token = jwt.sign(admin, secretKey, { expiresIn: '1h' });
    res.json({ message: 'Admin created successfully', token });
  }
});

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


router.get('/purchasedCourses', authenticateJwt, async (req, res) => {
  const admin = await User.findOne({ username: req.user.username }).populate('purchasedCourses');
  if (admin) {
    res.json({ purchasedCourses: admin.purchasedCourses || [] });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
