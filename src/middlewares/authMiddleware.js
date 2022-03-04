function authMiddleware(req, res, next) {
    if(req.session.loggedUser != undefined) {
        next();
    } else { 
        res.render('./website/errors', {
            errors: [
                { msg: 'Esta página es solo para usuarios' }
            ]
        });
    }
}

module.exports = authMiddleware; 