const router = require("express").Router()
const Models = require("../models")
const isClientLoggedIn = require("../utils/isClientLoggedIn")
const passport = require("passport")
const { Types } = require("mongoose")

router.post("/register", function (req, res) {

    const serviceId = req.body.serviceId

    const transaction = new Models.Transaction({
        date: req.body.date,
        transactionId: req.body.transactionId,
    })

    transaction.save(transaction, function (err, service) {
        if (err) {
            // console.log(err);
            res.json({success: false, ...err});
        }else{
            Models.Service.updateOne({ _id: Types.ObjectId(serviceId) }, {status: 1} , {
                returnOriginal: false
            }, function (err, doc) {

                console.log("document is"+serviceId, doc)
                if (err) {
                    res.json({success: false, ...err});
                } else {
                    res.json({ success: true })
                }
            })
        }
    })
})




module.exports = router