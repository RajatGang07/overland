const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

const { chats } = require('./data/data');
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // to accept json data

app.use("/api/user", userRoutes);


app.get('/api/chat', (req, res) => {
    res.send(chats)

});

const PORT = process.env.PORT || 50002;

app.listen(PORT, console.log(`Server started port 1 ${PORT}`));