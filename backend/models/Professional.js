const { Schema, model } = require("mongoose")
const modelNames = require("./ModelNames")
var mongoosePaginate = require('mongoose-paginate');
const passport_local_mongoose = require("passport-local-mongoose")

const Professional = Schema({
    username: String,
    email: String,
    location: String,
    priority: Number,
    verified: Boolean,
    code: Number,
    emailVerified: Boolean,
    services: [
        {
            id: String,
            title: String,
            img: String,
            overview: String,
            about_seller: String,
            price: String,
        }
    ]
})

Professional.plugin(passport_local_mongoose, {usernameField: "email"})
Professional.plugin(mongoosePaginate);

module.exports = model(modelNames.PROFESSIONAL, Professional)