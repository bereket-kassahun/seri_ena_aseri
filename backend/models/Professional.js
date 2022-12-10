const { Schema, model } = require("mongoose")
const modelNames = require("./ModelNames")
var mongoosePaginate = require('mongoose-paginate');
const passport_local_mongoose = require("passport-local-mongoose")

const Professional = Schema({
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    phoneNumber: {type: String, default: ""},
    email: String,
    verified: {type: Boolean, default: false},
    services: [
        {type: Schema.Types.ObjectId, ref: modelNames.SERVICE},
    ], 
    img: {type: String, default: ""},
    numOfCalls: {type: Number, default: 0},
    weeklyCalls: {type: Number, default: 0},
    monthlyCalls: {type: Number, default: 0},
    currentWeek: {type: Number, default: 0},
    currentMonth: {type: Number, default: 0},
    paymentLevel: {type: Number, default: 0},
})

Professional.plugin(passport_local_mongoose, {usernameField: "email"})
Professional.plugin(mongoosePaginate);

module.exports = model(modelNames.PROFESSIONAL, Professional)