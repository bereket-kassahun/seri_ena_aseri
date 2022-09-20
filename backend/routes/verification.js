const router = require("express").Router()
const Models = require("../models")
const confirmationPage = require("../utils/confirmationHtmlEmail")
const { Types } = require("mongoose")
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

function sendEmail(email, code, req, res) {
    const myOAuth2Client = new OAuth2(
        "53639379402-7hcspbggrmngh9dh2oh62reot11q683l.apps.googleusercontent.com",
        "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",
    )

    myOAuth2Client.setCredentials({
        refresh_token: "1//04I8yhJY3DA63CgYIARAAGAQSNwF-L9Ir8mBZYqEtVaEw7RG8acR-EEy_I5y3-53w0eSzk95fqSMWcQGo9Kw6e3B0GU83GfDZk6o"
    });

    const myAccessToken = myOAuth2Client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "bereketkassahun456@gmail.com", //your gmail account you used to set the project up in google cloud console"
            clientId: "53639379402-7hcspbggrmngh9dh2oh62reot11q683l.apps.googleusercontent.com",
            clientSecret: "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",
            refreshToken: "1//04I8yhJY3DA63CgYIARAAGAQSNwF-L9Ir8mBZYqEtVaEw7RG8acR-EEy_I5y3-53w0eSzk95fqSMWcQGo9Kw6e3B0GU83GfDZk6o",
            accessToken: myAccessToken //access token variable we defined earlier
        }
    });

    const mailOptions = {
        from: 'bereketkassahun456@gmail.com', // sender
        to: email, // receiver
        subject: 'Confirmation Code', // Subject
        html: confirmationPage(code)// html body
    }
    transport.sendMail(mailOptions, function (err, result) {
        if (err) {
            res.send({
                success: false, ...err
            })
        } else {
            transport.close();
            res.send({
                success: true,
                message: 'Email has been sent: check your inbox!'
            })
        }
    })

}
router.post('/send_email', async function (req, res) {
    const email = req.body.email
    const tmp = Math.floor(Math.random() * 90000) + 10000;
    const code = tmp + ''
    const emailVerification = new Models.EmailVerification({ email: email, code: code })

    Models.EmailVerification.findOneAndUpdate({ email: email }, { code: code }, (err, result) => {
        if (err) {
            res.json({ success: false, err })
        } else {
            if (result == null) {
                emailVerification.save(async (err, result) => {
                    if (err) {
                        res.json({ success: false, err })
                    } else {
                        console.log('saved verification')
                        sendEmail(email, code, req, res)
                    }
                })
            }else{
                sendEmail(email, code, req, res)
            }
        }
    })

})


router.post('/verify_email', async function (req, res) {
    const email = req.body.email
    const code = req.body.code

    const professional = new Models.Professional({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        verified: false,
        services: []
    })


    console.log(email)
    console.log(code)
   
    Models.EmailVerification.findOneAndDelete({ email: email, code: code }, (err, value) => {
        if (err) {
            console.log("unable to find")
            res.json({ success: false })
        } else {
            if(value == null){
                res.json({success: false})
                console.log("registered")
                //here is where the professional data is saved
            }else{
                Models.Professional.register(professional, req.body.password, function (err, user) {
                    if (err) {
                        // console.log(err);
                        console.log("unable to register")
                        return res.json({ success: false, ...err });
                    }
                    
                console.log("shit")
                    res.json({ success: true })
                })
            }
        }
    })
})


module.exports = router

