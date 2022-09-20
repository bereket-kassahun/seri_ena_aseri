const router = require("express").Router()
const Models = require("../models")
const isClientLoggedIn = require("../utils/isClientLoggedIn")
const passport = require("passport")
const { Types } = require("mongoose")

// router.get('/list', async function (req, res) {
//     getAllProfessionals({}, req.query.page).then(result => {
//         res.json(result)
//     })
// })

router.post("/login", passport.authenticate('clientLocal', { failureMessage: true }), function (req, res) {
    res.json({ success: true })
});


router.get("/is_logged_in", isClientLoggedIn, function (req, res) {
    res.json({ success: true });
});

router.post("/register", function (req, res) {
    
    const client = new Models.Client({
        email: req.body.email,
        username: req.body.username,
        ratings: []
    })

    Models.Client.register(client, req.body.password, function (err, user) {
        if (err) {
            console.log("unable to register")
            return res.json({ success: false, ...err });
        }

        res.json({ success: true });
    });
})

router.get("/logout", function (req, res) {
    req.logout(function (err) {
        if (err) {
            return res.json(err);
        }
        res.json({ success: true });
    });
});

router.get("/get_client", isClientLoggedIn, function (req, res) {
    res.json({success: true,...req.user});
});

router.post("/rate", function (req, res) {
    
    const clientId = req.body.clientId
    const serviceId = req.body.serviceId
    const value = req.body.value

    console.log(clientId + " " + serviceId + " " + value)

    Models.Service.findById(serviceId, (err, service) => {
        console.log("stage 1")
        if (err) return res.json({success: false});

        if(service == null){
            return res.json({success: false})
        }
        const currentRatingNumber = service.numberOfRating ? service.numberOfRating : 0
        const currentRating = service.rating ? service.rating : 0
        const newRating = Math.floor(((currentRating *  currentRatingNumber) + value)/ (currentRatingNumber + 1) )
        service.rating = newRating
        service.numberOfRating = currentRatingNumber + 1
    
        service.save((err, contractContract) => {
            if (err) res.json(err);

            Models.Client.updateOne({ _id: Types.ObjectId(clientId) }, { $push: { "ratings": new Types.ObjectId(serviceId) } }, {
                returnOriginal: false
            }, function (err, doc) {
                if (err) {
                    res.json(err);
                } else {
                    res.json({ success: true })
                }
            })
        });
    });


    // Models.Service.findOneAndUpdate()
    // const client = new Models.Client({
    //     email: req.body.email,
    //     username: req.body.username,
    //     ratings: []
    // })

    // Models.Client.register(client, req.body.password, function (err, user) {
    //     if (err) {
    //         console.log("unable to register")
    //         return res.json({ success: false, ...err });
    //     }

    //     res.json({ success: true });
    // });
})

// router.get("/get_seller", isLoggedIn, function (req, res) {
//     res.json(req.user);
// });

// router.get("/logout", function (req, res) {
//     req.logout(function (err) {
//         if (err) {
//             return res.json(err);
//         }
//         res.json({ success: true });
//     });
// });

// router.post("/get_professional_services", async function (req, res) {
//     const id = req.body.id

//     Models.Professional.aggregate([
//         {$match: {_id: new Mongoose.Types.ObjectId(id)}},
//         {
//             $lookup:
//             {
//                 from: 'services',
//                 localField: 'services',
//                 foreignField: '_id',
//                 as: 'service_data'
//               }
//         }
//     ], (err, response) => {
//         if(err){
//             console.log(err)
//         }
//         res.json(response)
//     })
// })

module.exports = router