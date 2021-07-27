const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get("/",(req,res)=>{
    res.send("hello users!!");
})
app.listen(5000, () => console.log("Port 5000"));