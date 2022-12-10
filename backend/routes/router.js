const router = require("express").Router()
const Models = require("../models")
router.get('/', function (req, res) {
    // req.session.autorized = true
    res.send("HELLO WORLD")
});
router.get('/hello', function (req, res) {
    // req.session.autorized = true
    res.send("HELLO CHANGED")
});

// app.get('/', function(req, res){
//     res.send('id: ' + req.query.id);
//   });




module.exports = router