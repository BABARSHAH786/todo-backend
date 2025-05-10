import express from 'express'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import todoRoute from './route/todo.route.js';

const app = express()

dotenv.config()
const PORT =process.env.PORT || 4002
const DB_URI = process.env.MONGODB_URI 

// connect to MongoDB
try {
  await mongoose.connect(DB_URI)
  console.log('MongoDB connected')
  
} catch (error) {
  console.log(error)
  
}

// route
app.use(express.json())
app.use("/todo", todoRoute)




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
