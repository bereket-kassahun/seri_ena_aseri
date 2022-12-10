const { Schema, model } = require("mongoose")
const modelNames = require("./ModelNames")
var mongoosePaginate = require('mongoose-paginate');
const passport_local_mongoose = require("passport-local-mongoose")

const Client = Schema({
    username: {type: String, default: ""},
    email: String,
    ratings: [{type: Schema.Types.ObjectId, ref: modelNames.PROFESSIONAL}]
})

Client.plugin(passport_local_mongoose, {usernameField: "email"})
Client.plugin(mongoosePaginate);

module.exports = model(modelNames.CLIENT, Client)