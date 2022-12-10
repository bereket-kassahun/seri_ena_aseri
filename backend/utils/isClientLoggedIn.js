function isClientLoggedIn(req, res, next){
    if(req.isAuthenticated() && !req.user.services){
        return next();
    }
    res.json({ success: false });
}

module.exports = isClientLoggedIn