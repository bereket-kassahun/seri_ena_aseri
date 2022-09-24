const router = require("express").Router()
const Models = require("../models")
const { getAllProfessionals, sendEmail } = require("../services/professional")
const isLoggedIn = require("../utils/isLoggedIn")
const passport = require("passport")
const { response } = require("express")
const Mongoose = require("mongoose")
const { getWeek, getMonth } = require("../utils/time")
const { Types } = require("mongoose")

router.get('/list', async function (req, res) {
    getAllProfessionals({}, req.query.page).then(result => {
        res.json(result)
    })
})

router.post("/login", passport.authenticate('local', { failureMessage: true }), function (req, res) {
    res.json({ success: true })
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

router.post("/register", function (req, res) {
    const professional = new Models.Professional({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        verified: false,
        services: []
    })

    Models.Professional.register(professional, req.body.password, function (err, user) {
        if (err) {
            console.log("unable to register")
            return res.json({ success: false, ...err });
        }
        res.json({ success: true })
    })

});

router.post("/update", function (req, res) {
    const id = req.body._id
    const professional = new Models.Professional({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        img: req.body.img
    })

    Models.Professional.updateOne({ _id: Mongoose.Types.ObjectId(id) },
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            img: req.body.img
        }, function (err, user) {
            if (err) {
                console.log(professional)
                return res.json({ success: false, ...err });
            }
            res.json({ success: true })
        })

    // Models.Professional.register(professional, req.body.password, function (err, user) {
    //     if (err) {
    //         console.log("unable to register")
    //         return res.json({ success: false, ...err });
    //     }
    //     res.json({ success: true })
    // })

});


router.get("/is_logged_in", isLoggedIn, function (req, res) {
    res.json({ success: true });
});

router.get("/get_seller", isLoggedIn, function (req, res) {
    Models.Professional.findById(req.user._id, (err, seller) => {
        if (err) {
            console.log(err)
        }
        console.log(seller)
        res.json(seller)
    })
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
        { $match: { _id: new Mongoose.Types.ObjectId(id) } },
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
        if (err) {
            console.log(err)
        }
        res.json(response)
    })
})

router.post("/get_professional_average_rating", async function (req, res) {
    const id = req.body._id

    Models.Professional.aggregate([
        { $match: { _id: new Mongoose.Types.ObjectId(id) } },
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
        if (err) {
            console.log(err)
        }

        let count = 0
        let sum = 0
        let average = 0
        if(response.length > 0 && response[0].service_data){
            response[0].service_data.forEach((value, index) => {
                console.log("data", value.rating)
                count += 1
                sum += value.rating
            })
            if (count > 0)
                average = sum / count

            average = Math.floor(average)
            res.json({ success: true, average_rating: average})
        }else{
            res.json({ success: false, average_rating: 0})
        }
        
    })
})

router.post("/update_call_count", async function (req, res) {
    const id = req.body.id
    const week = getWeek()
    const month = getMonth()

    Models.Professional.find({ _id: Types.ObjectId(id) }, (err, doc) => {
        if (err) {
            res.json({ success: false })
        } else {
            if (doc.length > 0) {
                const professional = doc[0]
                if (professional.currentWeek == week) {
                    professional.weeklyCalls = professional.weeklyCalls + 1
                } else {
                    professional.currentWeek = week
                    professional.weeklyCalls = 1
                }
                if (professional.currentMonth == month) {
                    professional.monthlyCalls = professional.monthlyCalls + 1
                } else {
                    professional.currentMonth = month
                    professional.monthlyCalls = 1
                }
                professional.numOfCalls = professional.numOfCalls + 1

                Models.Professional.updateOne({ _id: Types.ObjectId(id) }, professional, {
                    returnOriginal: false
                }, function (err, doc) {
                    if (err) {
                        console.log("ERROR")
                        res.json(err);
                    } else {
                        console.log("updated call")
                        res.json({ success: true })
                    }
                })
            } else {
                console.log("id", id)
                res.json({ success: false })
            }
        }
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