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
        refresh_token: "1//04JemqytaKk_1CgYIARAAGAQSNwF-L9IrUXbM1OpNNz6Ycs7HkmLjXHqnubPB3GvkH-dztLTakJ0Zp7u-Z3_CzVdeVSdkvlRU9yA"
    });

    const myAccessToken = myOAuth2Client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "bereketkassahun456@gmail.com", //your gmail account you used to set the project up in google cloud console"
            clientId: "53639379402-7hcspbggrmngh9dh2oh62reot11q683l.apps.googleusercontent.com",
            clientSecret: "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",
            refreshToken: "1//04JemqytaKk_1CgYIARAAGAQSNwF-L9IrUXbM1OpNNz6Ycs7HkmLjXHqnubPB3GvkH-dztLTakJ0Zp7u-Z3_CzVdeVSdkvlRU9yA",
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
                success: false,
                message: err
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
            res.json({ success: false })
        } else {
            if (result == null) {
                emailVerification.save(async (err, result) => {
                    if (err) {
                        res.json({ success: false })
                    } else {
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
    Models.EmailVerification.findOneAndDelete({ email: email, code: code }, (err, value) => {
        if (err) {
            res.json({ success: false })
        } else {
            if(value == null){
                //here is where the professional data is saved
                res.json({ success: false, value })
            }else{
                res.json({success: true, value})
            }
        }
    })
})


module.exports = router

