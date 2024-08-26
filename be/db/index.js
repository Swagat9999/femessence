const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imgageLink: [String],
  published: Boolean
});  

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imgageLink: [String],
  published: Boolean,
  productd: String,
  rating: Number
}, { collection: 'products' });

const Admin = mongoose.model('Admin', adminSchema);
const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', courseSchema);
const Product = mongoose.model('Product', productSchema);


module.exports = { Admin, User, Course, Product };
