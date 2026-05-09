require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/blog_db')
  .then(()=>console.log('MongoDB connected'));
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.get('/', (req,res)=>res.send('Blog API is running'));
app.listen(process.env.PORT||5000, ()=>console.log('Server started'));
