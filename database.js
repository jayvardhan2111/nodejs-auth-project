const dotenv = require('dotenv').config() 
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI)