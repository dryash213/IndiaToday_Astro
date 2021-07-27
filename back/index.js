require('dotenv');
const SERVICE_ID="VA48fb5834246ee9b211fc86b07c7c362e";
const ACCOUNT_SID="AC46b9d9e56b2809d5fafe3973f748b8e6";
const AUTH_TOKEN="9eb092ddc15f432a223851935988b507";
const express = require('express')
const app = express()
const port = 5000
console.log(ACCOUNT_SID, AUTH_TOKEN);
const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN)

app.get('/', (req, res)=>{
    res.status(200).send({
        message: "You are on Home",
        info: {
            login: "Send verification code through /login . It contains two params i.e. phonenumber and channel(sms/call)",
            verify: "Verify the recieved code through /verify . It contains two params i.e. phonenumber and code"
        }
    });
})

// Login User
app.get('/login', (req,res) => {
     if (req.query.phonenumber) {
        client
        .verify
        .services(SERVICE_ID)
        .verifications
        .create({
            to: `+91${req.query.phonenumber}`,
            channel: req.query.channel==='call' ? 'call' : 'sms' 
        })
        .then(data => {
            res.status(200).send({
                message: "Verification is sent!!",
                phonenumber: req.query.phonenumber,
                data
            })
        }) 
     } else {
        res.status(400).send({
            message: "Wrong phone number :(",
            phonenumber: req.query.phonenumber,
            data
        })
     }
})

// Verify USER
app.get('/verify', (req, res) => {
    if (req.query.phonenumber && (req.query.code).length === 4) {
        client
            .verify
            .services(SERVICE_ID)
            .verificationChecks
            .create({
                to: `+${req.query.phonenumber}`,
                code: req.query.code
            })
            .then(data => {
                if (data.status === "approved") {
                    res.status(200).send({
                        message: "User is Verified!!",
                        data
                    })
                }
            })
    } else {
        res.status(400).send({
            message: "Wrong phone number or code :(",
            phonenumber: req.query.phonenumber,
            data
        })
    }
})

// listen to the server at 5000 port
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});