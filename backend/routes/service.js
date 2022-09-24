const router = require("express").Router()
const Models = require("../models")
const { Types } = require("mongoose")
router.post('/register', function (req, res) {

    // console.log(req)
    // console.log(req.body.email)
    const service = new Models.Service({
        title: req.body.title,
        img: req.body.img,
        overview: req.body.overview,
        bio: req.body.bio,
        detail: req.body.detail,
        price: req.body.price,
        deliveryDay: req.body.deliveryDay,
        priority: 0,
        city: req.body.city,
        specificAdress: req.body.specificAdress,
        category: req.body.category,
        professionalId: new Types.ObjectId(req.body.professionalId),
        professionalFirstName: req.body.professionalFirstName,
        professionalLastName: req.body.professionalLastName,
        professionalImage: req.body.professionalImage,
        professionalPhoneNumber: req.body.professionalPhoneNumber,
        // professionalStatus: req.body.professionalStatus,
        serviceType: req.body.serviceType,
        rating: 0,
        numberOfRating: 0
    })


    service.save(service, function (err, service) {
        if (err) {
            // console.log(err);
            return res.json(err);
        }
        Models.Professional.updateOne({ _id: Types.ObjectId(req.body.professionalId) }, { $push: { "services": new Types.ObjectId(service._id) } }, {
            returnOriginal: false
        }, function (err, doc) {
            if (err) {
                return res.json(err);
            } else {
                console.log(doc)
                res.json({ success: true })
            }
        })

    })
})

router.get("/recommend", async function (req, res) {
    const word = req.query.word
    const filter = { $text: { $search: word } }



    Models.Service.find(filter, { score: { $meta: "textScore" } }, function (err, docs) {
        if (err) {
            console.log(err)
            return res.json(err);
        }
        res.json(docs)
    }).select(
        {
            title: true,
            overview: true
        }
    ).sort({ score: { $meta: "textScore" } })
})

router.get("/search", async function (req, res) {
    const word = req.query.word
    const page = req.query.page
    const limit = req.query.limit

    const filter = { $text: { $search: word } }


    Models.Service.paginate(filter, { page: page, limit: limit }, function (err, docs) {
        if (err) {
            return res.json(err);
        }
        res.json(docs)
    })
})

router.get("/category", async function (req, res) {
    const category = req.query.category
    const page = req.query.page
    const limit = req.query.limit

    const filter = { category: { $regex: category, $options: "i" } }


    Models.Service.paginate(filter, { page: page, limit: limit }, function (err, docs) {
        if (err) {
            return res.json(err);
        }
        res.json(docs)
    })
})

router.post("/get_service", function (req, res) {
    const id = req.body.id
    Models.Service.find({ id: id }, (err, professional) => {
        if (err) {
            res.json({ success: false })
        } else {
            res.json(professional)
        }
    })
})

router.post("/update_service", function (req, res) {

    // const { title, price, overview, category, bio, city, specificAdress, detail, img, deliveryDay, professionalId, professionalFirstName, professionalLastName, professionalImg, professionalStatus } = req.body
    const service = req.body
    console.log(service)
    const id = req.body._id
    Models.Service.updateOne({ _id: Types.ObjectId(id) }, service,{returnOriginal: false }, function (err, doc) {
            if (err) {
                res.json(err);
                console.log(service)
            } else {
                res.json({ success: true })
                console.log("hurray updated ")
            }
        })
})

router.post("/update_service", function (req, res) {

    // const { title, price, overview, category, bio, city, specificAdress, detail, img, deliveryDay, professionalId, professionalFirstName, professionalLastName, professionalImg, professionalStatus } = req.body
    const service = req.body
    const id = req.body._id
    Models.Service.updateOne({ _id: Types.ObjectId(id) }, service,{returnOriginal: false }, function (err, doc) {
            if (err) {
                res.json(err);
                console.log(service)
            } else {
                res.json({ success: true })
                console.log("hurray updated ")
            }
        })
})


router.post("/get_featured_services", function (req, res) {
    console.log("hey ho ho")
    $match: { size: "medium" }
    Models.Service.aggregate([
        { $match: { $or: [ { serviceType: 1 }, {  serviceType: 2 } ]  }},
        { $sample: { size: 6 } }
    ], function(err, services) {
        if(err){
            console.log("shit", err)
            res.json({ success: false })
        }else{
            console.log(services)
            res.json({ success: true, services });
        }
    })
})

module.exports = router


    // Models.Service.aggregate([{$match: filter},  {$project: required_fields}], function(err, docs){
    //     if (err) {
    //         console.log(err)
    //         return res.json(err);
    //     }
    //     res.json(docs)
    // }).limit(10)