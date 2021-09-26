require('dotenv');
// require('./startup/database')();
const cors = require('cors');
const express = require('express')
const app = express()
const port = 5000
const authRoute = require("./routes/auth");

app.get('/', (req, res)=>{
    res.status(200).send({
        message: "You are on Home"
    });
})                   

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});