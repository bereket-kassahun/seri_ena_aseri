const { Schema, model } = require("mongoose")
const modelNames = require("./ModelNames")
var mongoosePaginate = require('mongoose-paginate');
const passport_local_mongoose = require("passport-local-mongoose")

const Service = Schema({
    title: {type: String, default: ""},
    overview: {type: String, default: ""},
    category: {type: String, default: ""},
    price: {type: String, default: ""},
    city: {type: String, default: ""},
    specificAdress: {type: String, default: ""},
    bio: {type: String, default: ""},
    detail: {type: String, default: ""},
    professionalId: {type: Schema.Types.ObjectId, ref: modelNames.PROFESSIONAL},
    professionalFirstName: {type: String, default: ""},
    professionalLastName: {type: String, default: ""},
    professionalStatus: {type: Number, default: 0},
    serviceType: {type: Number, default: 0},
    professionalImage:  {type: String, default: ""},
    professionalPhoneNumber:  {type: String, default: ""},
    priority: {type: Number, default: 1},
    img: {type: String, default: ""},
    deliveryDay:{type: Number, default: 1},
    rating: {type: Number, default: 0},
    numberOfRating: {type: Number, default: 0},
    status: {type: Number, default: 0}
})

Service.plugin(mongoosePaginate);

// Service.index({ '$**': 'text' });
Service.index({ title: 'text', category: 'text', overview: 'text' , city: 'text', specificAdress: 'text'});
module.exports = model(modelNames.SERVICE, Service)