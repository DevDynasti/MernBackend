const express = require("express");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const authRoutes = require('./routes/authRoutes')
// app
const app = express()

// database connectivity

const connectDB = async () => {
try {
    const conn = await mongoose.connect(process.env.DATABASE)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

connectDB();

// middleware
// app.use(bodyParser.json());
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//cors
app.use(
  cors({
      origin: "https://mern-template-frontend-hrishikesh156.vercel.app",
      credentials: true,
  })
);

// routes middleware
app.use("/api/auth",authRoutes)

// Serve frontend
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/build')));
  
//     app.get('*', (req, res) =>
//       res.sendFile(
//         path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
//       )
//     );
//   } else {
//     app.get('/', (req, res) => res.send('Please set to production'));
//   }

// port 
const port  = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Your server is running on port ${port}`)
})
console.log("hello")