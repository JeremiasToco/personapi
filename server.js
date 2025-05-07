const express = require('express')
const app = express();
const mongoose = require("mongoose");
const userRouter = require('./routes/userRoutes');
const dotenv = require("dotenv").config();
const PORT = 2000

app.use(express.urlencoded())
app.use(express.json());
app.use('/user',userRouter)

mongoose.connect(process.env.MONGODB_CONNECT_URL)
.then(()=>
    app.listen(PORT,()=>console.log(`Servidor rodando na porta:${PORT}`))
)
.catch((error)=>console.log(error));

