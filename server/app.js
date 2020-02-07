const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sendNodeMailer = require('./routes/nodemailer')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to the root path')
})

app.post('/sendMail', (req, res) => {
    console.log(req.body)
    // sendNodeMailer('grandgerard.olivier@gmail.com', req.body)
    sendNodeMailer('office@cleantech-romania.ro', req.body)
    .then(rez => {
        res.status(200).json("Your application was submitted.")
    })
    .catch(err => {
        console.log(err)
        res.status(400).json("Something went wrong, please try again.")
    })
})

app.listen(5000, () => console.log('App running on 5000'))