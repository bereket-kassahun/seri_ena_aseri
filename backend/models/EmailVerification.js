const { Schema, model } = require("mongoose")
const modelNames = require("./ModelNames")

const EmailVerification = Schema({
    email: String,
    code: String,
})

module.exports = model(modelNames.EMAILVERIFICATION, EmailVerification)