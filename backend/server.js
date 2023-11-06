const express = require('express');
const dontenv = require('dotenv');
const newsRoutes = require('./Routes/newsRoutes')


const ConnectDB  = require('./Config/db');
const {chats} = require('./data/data')

dontenv.config(); 


ConnectDB();
const app = express();

app.use(express.json())


app.get('/',(req,res)=>{
    res.send("api is runing")
})

app.use('/app/news',newsRoutes)


const PORT = process.env.PORT || 5000




app.listen(PORT, console.log(`Server started on port of ${PORT}`))