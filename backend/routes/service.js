const router = require("express").Router()
const Models = require("../models")
const { Types } = require("mongoose")
const { updateInfoServices } = require("../utils/update")
const { getWeek, getMonth, getDayOfMonth } = require("../utils/time")
router.post('/register', function (req, res) {

    const month = getMonth()
    const monthDay = getDayOfMonth()
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
                Models.Info.find({}, (err, infos) => {
                    if (err) {
                        return res.json({ success: false, ...err });
                    }

                    if (infos?.length == 0) {
                        const info = new Models.Info({
                            currentMonth: month
                        })
                        info.save((err, result) => {
                            if (err) {
                                return res.json({ success: false, ...err });
                            } else {
                                res.json({ success: true })
                            }
                        })
                    } else {
                        let info = infos[0]
                        if (month == info?.currentMonth) {
                            updateInfoServices(info, monthDay)
                        } else {
                            info = new Models.Info({
                                currentMonth: month
                            })
                        }
                        Models.Info.updateOne({ _id: Types.ObjectId(info._id) }, info, {
                            returnOriginal: false
                        }, function (err, doc) {
                            if (err) {
                                return res.json({ success: false, ...err });
                            } else {
                                res.json({ success: true })
                            }
                        })
                    }
                })
            }
        })

    })
})

router.get("/recommend", async function (req, res) {
    const word = req.query.word
    const filter = { $text: { $search: word } }



    Models.Service.find(filter, function (err, docs) {
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

    const rating = req.query.rating ? req.query.rating : "-1"
    const type = req.query.type ? req.query.type : "-1"
    const price = req.query.price ? req.query.price : "-1"

    let price_query = ''
    switch (price) {
        case '4':
            price_query = {price: {$gte: 5000}}
            break;
        case '3':
            price_query = {$and: [{price: {$gte: 1000}},{price: {$lt: 5000}}]}
            break;
        case '2':
            price_query = {$and: [{price: {$gte: 500}},{price: {$lt: 1000}}]}
            break;
        case '1':
            price_query = {$and: [{price: {$gte: 0}},{price: {$lt: 500}}]}
            break;
        default:
            price_query = {}
            break;
    }

    let rating_query = rating != "-1" ? {rating:  rating} : {}

    let type_query = type != "-1" ? {serviceType: type} : {}
 
    const filter = word ?  { $text: { $search: word } } : {}

    Models.Service.paginate(
        { $and: [filter, price_query, rating_query, type_query] },
        { page: page, limit: limit },
        function (err, docs) {
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
    Models.Service.updateOne({ _id: Types.ObjectId(id) }, service, { returnOriginal: false }, function (err, doc) {
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
    Models.Service.updateOne({ _id: Types.ObjectId(id) }, service, { returnOriginal: false }, function (err, doc) {
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
    Models.Service.aggregate([
        { $match: { $or: [{ serviceType: 1 }, { serviceType: 2 }] } },
        { $sample: { size: 6 } }
    ], function (err, services) {
        if (err) {
            console.log("shit", err)
            res.json({ success: false })
        } else {
            console.log(services)
            res.json({ success: true, services });
        }
    })
})


router.post("/get_pending_services", function (req, res) {

    const page = req.query.page ? req.query.page : 1
    const limit = req.query.limit ? req.query.limit : 10

    const filter = { status: 1 }


    Models.Service.paginate(filter, { page: page, limit: limit }, function (err, docs) {
        if (err) {
            return res.json(err);
        }
        res.json(docs)
    })
})

router.post("/approve_service", function (req, res) {
    const id = req.body.id
    Models.Service.updateOne({ _id: Types.ObjectId(id) }, { status: 2 }, {
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


router.post("/get_service_count", function (req, res) {

    Models.Service.estimatedDocumentCount({}, (err, count) => {
        return res.json({ success: true, count: count });
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