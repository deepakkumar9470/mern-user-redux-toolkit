require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/db');
const PORT = process.env.PORT || 8000
const cors = require('cors');
const postRoute = require('./routes/api');

app.use(express.json())
app.use(cors());


app.use('/api/user', postRoute);

connectDB()


app.get('/', (req,res)=>{
    res.send('hello mern assignment ..')
})

app.listen(PORT, ()=>{
    console.log(`Server started at port http://localhost:${PORT}`)
});


