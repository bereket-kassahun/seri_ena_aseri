require('dotenv').config({ path: '../config.env' });
const Models = require('../models')
const nodemailer = require("nodemailer");
const confirmationPage = require("../utils/confirmationHtmlEmail")
async function getAllProfessionals(filter, page) {
    return await Models.Professional.paginate(filter, { page: page, limit: 3 })
}

async function sendEmail(reciever, code) {
    console.log("sending email")
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        //   host: "smtp.ethereal.email",
        //   port: 587,
        //   secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.EMAIL_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: "SERI ENA ASERI", // sender address
        to: reciever, // list of receivers
        subject: "Confirmation Code", // Subject line
        // text: "Hello world?", // plain text body
        html: confirmationPage(code), // html body
    });

    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // console.log(info)
    return info
    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// sendEmail("bereket_kasahun@yahoo.com", "4545")
module.exports = {
    getAllProfessionals,
    sendEmail
}
