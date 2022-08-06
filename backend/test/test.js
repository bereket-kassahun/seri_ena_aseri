require('dotenv').config({ path: './config.env' });
const Models = require("../models")
require("../db/connection")()
// Models.Professional.findOne({email: "berekt@gmail.com"}, function(err, doc){
//     console.log(doc)
// })
const filter = {email: "kassahun@gmail.com"}
const update = {code: "kasu"}
Models.Professional.findOneAndUpdate(filter, update, {
    returnOriginal: false
  }, function(err, doc){
    console.log(doc)
})