const express = require("express");
// const dotenv = require('dotenv');
// dotenv.config();
const path = require('path');
// require('dotenv').config({path:
// path.resolve(__dirname , './.env')});

require('dotenv').config({ path: '../.env' });
const {chats} = require("./data/data");
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');


connectDB();
const app = express();

app.use(express.json());  // to accept JSON Data

app.get("/" , (req , res)=>{
    res.send("API is running successfully...");
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes); 

app.use(notFound)
app.use(errorHandler)

// app.get("/api/chat" , (req , res)=>{
//     res.send(chats);
// });

// app.get("/api/chat/:id" , (req , res)=>{
//     //console.log(req.params.id);
//     const singleChat = chats.find((c) => c._id === req.params.id);
//     res.send(singleChat);
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT , console.log(`Server started on Port ${PORT}`.yellow.bold));