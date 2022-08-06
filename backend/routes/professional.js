const router = require("express").Router()
const Models = require("../models")
const { getAllProfessionals, sendEmail } = require("../services/professional")
const isLoggedIn = require("../utils/isLoggedIn")
const passport = require("passport")

router.get('/list', async function (req, res) {
    getAllProfessionals(req.query.page).then(result => {
        res.json(result)
    })
})
router.post('/register', function (req, res) {

    // console.log(req)
    // console.log(req.body.email)
    const professional = new Models.Professional({
        username: req.body.username,
        email: req.body.email,
        verified: req.body.verified,
        services: req.body.services
    })


    // professional.save((err, professional) => {
    //     if (err)
    //         res.send("UNABLE TO SAVE DATA")
    //     else
    //         res.send("SAVED THE DATA")
    // })

    Models.Professional.register(professional, req.body.password, function (err, user) {
        if (err) {
            // console.log(err);
            return res.json(err);
        }
        res.json({ success: true })
    })
})

router.post("/login", async function (req, res) {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            res.json({ success: false, message: err })
        } else {
            if (!user) {
                res.json({ success: false, message: info })
            } else {
                req.login(user, function (error) {
                    if (error)
                        return next(error)
                    return res.send({ success: true, message: 'Login successful' })
                });
                // res.json({ success: true, message: info })
            }
        }
    })(req, res);
});

router.get("/dashboard", isLoggedIn, function (req, res) {
    res.json({ success: true });
});

router.get("/logout", function (req, res) {
    req.logout(function (err) {
        if (err) {
            return res.json(err);
        }
        res.json({ success: true });
    });
});

router.post("/send_email", async function (req, res) {
    //random code generation
    if(req.body.email == null){
        return res.json({success: false, message: "no email given"})
    }
    let code = Math.floor(Math.random() * 90000) + 10000;

    const filter = { email: res.body.email }
    const update = { code: code }
    Models.Professional.findOneAndUpdate(filter, update, {
        returnOriginal: false
    }, function (err, doc) {
        console.log(doc)
    })
    const info = await sendEmail(req.body.email, code)
    res.json({success: true})
})


router.get("/search", async function (req, res) {
    const word = req.query.word
    const filter = {$or:[{"services.title": new RegExp(word, 'i')}, {"services.overview": new RegExp(word, 'i')}]}
    Models.Professional.find(filter, function(err, docs){
        if (err) {
            return res.json(err);
        }
        res.json(docs)
    })
})

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