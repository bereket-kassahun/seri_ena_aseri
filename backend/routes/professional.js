const router = require("express").Router()
const Models = require("../models")
const { getAllProfessionals, sendEmail } = require("../services/professional")
const isLoggedIn = require("../utils/isLoggedIn")
const passport = require("passport")
const { response } = require("express")
const Mongoose = require("mongoose")

router.get('/list', async function (req, res) {
    getAllProfessionals({}, req.query.page).then(result => {
        res.json(result)
    })
})

router.post("/login", passport.authenticate('local', {failureMessage: true }) ,function (req, res) {
    res.json({success: true})
});

// router.post("/login", async function (req, res) {
//     passport.authenticate("local", function (err, user, info) {
//         if (err) {
//             res.json({ success: false, ...err })
//         } else {
//             if (!user) {
//                 res.json({ success: false, ...info })
//             } else {
//                 req.login(user, function (error) {
//                     if (error){
//                         console.log("error occured")
//                         return next(error)
//                     }
//                     console.log(req.session)
//                     return res.send({ success: true, message: 'Login successful' })
//                 });
//                 // res.json({ success: true, message: info })
//             }
//         }
//     })(req, res);
// });


router.get("/is_logged_in", isLoggedIn, function (req, res) {
    res.json({ success: true });
});

router.get("/get_seller", isLoggedIn, function (req, res) {
    res.json(req.user);
});

router.get("/logout", function (req, res) {
    req.logout(function (err) {
        if (err) {
            return res.json(err);
        }
        res.json({ success: true });
    });
});

router.post("/get_professional_services", async function (req, res) {
    const id = req.body.id

    Models.Professional.aggregate([
        {$match: {_id: new Mongoose.Types.ObjectId(id)}},
        {
            $lookup:
            {
                from: 'services',
                localField: 'services',
                foreignField: '_id',
                as: 'service_data'
              }
        }
    ], (err, response) => {
        if(err){
            console.log(err)
        }
        res.json(response)
    })
})
// router.post("/send_email", async function (req, res) {
//     //random code generation
//     if(req.body.email == null){
//         return res.json({success: false, message: "no email given"})
//     }
//     let code = Math.floor(Math.random() * 90000) + 10000;

//     const filter = { email: res.body.email }
//     const update = { code: code }
//     Models.Professional.findOneAndUpdate(filter, update, {
//         returnOriginal: false
//     }, function (err, doc) {
//         console.log(doc)
//     })
//     const info = await sendEmail(req.body.email, code)
//     res.json({success: true})
// })

// router.get("/recommend", async function(req, res){
//     const word = req.query.word
//     const filter = {$or:[{"services.title": new RegExp(word, 'i')}, {"services.overview": new RegExp(word, 'i')}]}
//     const required_fields = {"_id": true, "services.title": true}

//     Models.Professional.aggregate([{$match: filter}, {$unwind: '$services'}, {$match: filter}, {$project: required_fields}], function(err, docs){
//         if (err) {
//             console.log(err)
//             return res.json(err);
//         }
//         res.json(docs)
//     })
// })

// router.get("/search", async function (req, res) {
//     const word = req.query.word
//     const mainSearch = {$text: {$search: word}}
//     const filter = {$or:[{"services.title": new RegExp(word, 'i')}, {"services.overview": new RegExp(word, 'i')}]}
//     const required_fields = {"_id": true, "services.title": true, "services.overview": true, "services.price": true, "services.img": true}
//     // Models.Professional.find(filter, function(err, docs){
//     //     if (err) {
//     //         return res.json(err);
//     //     }
//     //     res.json(docs)
//     // }).select(
//     //     {
//     //         username: 1,
//     //         services: 1
//     //     }
//     // )

//     Models.Professional.aggregate([{$match: mainSearch}, {$unwind: '$services'}, {$project: required_fields}], function(err, docs){
//         if (err) {
//             console.log(err)
//             return res.json(err);
//         }
//         res.json(docs)
//     })


//     // ListModel.aggregate(
//     //     { $match: {_id: ObjectId("57e6bcab6b383120f0395aed")}},
//     //     { $unwind: '$recipients'},
//     //     { $match: {'recipients.status':1}})
// })

// {
//     username: String,
//     email: String,
//     location: String,
//     priority: Number,
//     verified: Boolean,
//     code: Number,
//     emailVerified: Boolean,
//     services: [
//         {
//             id: String,
//             title: String,
//             img: String,
//             overview: String,
//             about_seller: String,
//             price: String,
//         }
//     ]
// }
module.exports = router