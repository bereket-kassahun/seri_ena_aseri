
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.json({ success: false });
}

module.exports = isLoggedIn