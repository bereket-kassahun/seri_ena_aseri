const router = require("express").Router()
const Models = require("../models")
const confirmationPage = require("../utils/confirmationHtmlEmail")
const { Types } = require("mongoose")
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { getWeek, getMonth, getDayOfMonth } = require("../utils/time");
const { updateInfoSellers } = require("../utils/update");
const OAuth2 = google.auth.OAuth2;

function sendEmail(email, code, req, res) {
    const myOAuth2Client = new OAuth2(
        "53639379402-7hcspbggrmngh9dh2oh62reot11q683l.apps.googleusercontent.com",
        "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",
    )

    myOAuth2Client.setCredentials({
        refresh_token: "1//04uD08DrGm89yCgYIARAAGAQSNwF-L9Irhwkv5PZqeom1t59M4XLqe6JyDQCEDDBcfpQWGElYMlqFBx2thhfP7t5nmTtLWTwDuJ4"
    });

    const myAccessToken = myOAuth2Client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "bereketkassahun456@gmail.com", //your gmail account you used to set the project up in google cloud console"
            clientId: "53639379402-7hcspbggrmngh9dh2oh62reot11q683l.apps.googleusercontent.com",
            clientSecret: "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",
            refreshToken: "1//04uD08DrGm89yCgYIARAAGAQSNwF-L9Irhwkv5PZqeom1t59M4XLqe6JyDQCEDDBcfpQWGElYMlqFBx2thhfP7t5nmTtLWTwDuJ4",
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
            } else {
                sendEmail(email, code, req, res)
            }
        }
    })

})


router.post('/verify_email', async function (req, res) {
    const email = req.body.email
    const code = req.body.code

    const month = getMonth()
    const monthDay = getDayOfMonth()

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
            if (value == null) {
                res.json({ success: false })
                console.log("registered")
                //here is where the professional data is saved
            } else {
                Models.Professional.register(professional, req.body.password, function (err, user) {
                    if (err) {
                        // console.log(err);
                        console.log("unable to register")
                        return res.json({ success: false, ...err });
                    }
                    Models.Info.find({}, (err, infos) => {
                        if (err) {
                            return res.json({ success: false, ...err });
                        }

                        if (infos?.length == 0) {
                            const info = new Models.Info({
                                currentMonth: month
                            })
                            info.save((err, result) => {
                                if (err) {
                                    return res.json({ success: false, ...err });
                                } else {
                                    res.json({ success: true })
                                }
                            })
                        } else {
                            let info = infos[0]
                            if (month == info?.currentMonth) {
                                updateInfoSellers(info, monthDay)
                            } else {
                                info = new Models.Info({
                                    currentMonth: month
                                })
                            }
                            Models.Info.updateOne({ _id: Types.ObjectId(info._id) }, info, {
                                returnOriginal: false
                            }, function (err, doc) {
                                if (err) {
                                    return res.json({ success: false, ...err });
                                } else {
                                    res.json({ success: true })
                                }
                            })
                        }
                    })

                })
            }
        }
    })
})


module.exports = router

