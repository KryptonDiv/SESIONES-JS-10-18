const express = require('express');
const port = process.env.PORT || 9000;
const app = express();
const mongoose = require("mongoose")
const cors = require('cors')
require("dotenv").config();
const userRoutes = require("./routes/user")


// Middleware

app.use(express.json());
app.use(cors())
app.use('/api', userRoutes)

// routes

app.get("/", (req, res) => {
    res.send('Welcome to my API')
});

//MongoDB Connection

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB Atlas')).catch((error) => console.error(error));

app.listen(port, () => console.log('Server listening on port', port));

