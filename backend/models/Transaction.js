const { Schema, model } = require("mongoose")
const modelNames = require("./ModelNames")
var mongoosePaginate = require('mongoose-paginate');

const Transaction = Schema({
    date: {type: String, default: ""},
    transactionId: {type: String, default: ""},
})

Transaction.plugin(mongoosePaginate);

module.exports = model(modelNames.TRANSACTION, Transaction)