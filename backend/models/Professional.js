const { Schema, model } = require("mongoose")
const modelNames = require("./ModelNames")
var mongoosePaginate = require('mongoose-paginate');
const passport_local_mongoose = require("passport-local-mongoose")

const Professional = Schema({
    username: {type: String, default: ""},
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    phoneNumber: {type: String, default: ""},
    email: String,
    verified: {type: Boolean, default: false},
    services: [
        {type: Schema.Types.ObjectId, ref: modelNames.SERVICE},
    ]
})

Professional.plugin(passport_local_mongoose, {usernameField: "email"})
Professional.plugin(mongoosePaginate);

module.exports = model(modelNames.PROFESSIONAL, Professional)