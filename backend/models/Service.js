const { Schema, model } = require("mongoose")
const modelNames = require("./ModelNames")
var mongoosePaginate = require('mongoose-paginate');
const passport_local_mongoose = require("passport-local-mongoose")

const Service = Schema({
    title: {type: String, default: ""},
    img: {type: String, default: ""},
    overview: {type: String, default: ""},
    about_seller: {type: String, default: ""},
    price: {type: String, default: ""},
    deliveryDay: {type: String, default: ""},
    priority: {type: Number, default: 1},
    location: {type: String, default: ""},
    category: {type: String, default: ""},
    professionalId: {type: Schema.Types.ObjectId, ref: modelNames.PROFESSIONAL},
    professionalUsername: {type: String, default: ""},
    professionalImage: {type: String, default: ""},
    professionalPaid: {type: Boolean, default: false},
})

Service.plugin(mongoosePaginate);

// Service.index({ '$**': 'text' });
Service.index({ title: 'text', overview: 'text' , location: 'text'});
module.exports = model(modelNames.SERVICE, Service)