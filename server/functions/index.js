const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });



const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sendNodeMailer = require('../routes/nodemailer')

app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to the root path')
})

app.post('/sendMail', (req, res) => {
    console.log(req.body)
    sendNodeMailer('varut.andrei@gmail.com', req.body)
    .then(rez => {
        res.status(200).json("Ok")
    })
    .catch(err => {
        console.log(err)
        res.status(400).json("Bad")
    })
})

app.listen(5000, () => console.log('App running on 5000'))