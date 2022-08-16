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
        about_seller: req.body.about_seller,
        price: req.body.price,
        deliveryDay: req.body.deliveryDay,
        priority: 0,
        location: req.body.location,
        category: req.body.category,
        professionalId: new Types.ObjectId(req.body.professionalId),
        professionalUsername: req.body.professionalUsername,
        professionalImage: req.body.professionalImage,
        professionalPaid: false,
    })


    service.save(service, function (err, user) {
        if (err) {
            // console.log(err);
            return res.json(err);
        }
        res.json({ success: true })
    })
})

router.get("/recommend", async function(req, res){
    const word = req.query.word
    const filter ={$text: {$search: word}}
    const required_fields = {"_id": true, "title": true, "overview": true}
   

     Models.Service.find(filter, function(err, docs){
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
    )
})

router.get("/search", async function(req, res){
    const word = req.query.word
    const page = req.query.page
    const limit = req.query.limit

    const filter ={$text: {$search: word}}


    Models.Service.paginate(filter, { page: page, limit: limit }, function(err, docs){
        if (err) {
            return res.json(err);
        }
        res.json(docs)
    })
})

router.get("/category", async function(req, res){
    const category = req.query.category
    const page = req.query.page
    const limit = req.query.limit

    const filter ={category: {$regex: category, $options: "i"}}


    Models.Service.paginate(filter, { page: page, limit: limit }, function(err, docs){
        if (err) {
            return res.json(err);
        }
        res.json(docs)
    })
})

router.post("get_service", function (req, res){
    const id = req.body.id
    Models.Service.find({id: id}, (err, professional)=>{
        if(err){
            res.json({success: false})
        }else{
            res.json(professional)
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