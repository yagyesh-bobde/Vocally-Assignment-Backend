const express = require("express") ;
const cors = require("cors") ;
const router = require("./routes/register.js") ;
const connectDatabase = require("./db.js") ;
const dotenv = require("dotenv") ;
dotenv.config()

// Connect to database
connectDatabase()
// Server instance
const app = express()
// Constants
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// User registration route api
app.use('/api/user' , router)

// 
app.get('/', (req,res)=> {
    return res.send("Hello, World!")
})

// Listen on port
app.listen(PORT , () => {
    console.log("Listening on", PORT)
} )