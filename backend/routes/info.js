const router = require("express").Router()
const Models = require("../models")

router.post("/get_info", function (req, res) {
    Models.Info.find({}, (err, infos) => {
        if(err){
            res.json({ success: false })
        }
        if(infos?.length > 0){
            res.json({ success: true, info: infos[0] })
        }else{
            res.json({ success: false })
        }
    })
    
});

module.exports = router