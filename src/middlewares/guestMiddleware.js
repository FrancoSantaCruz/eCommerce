function guestMiddleware(req, res, next) {
    if(req.session.loggedUser == undefined) {
        next();
    } else { 
        res.render('./website/errors', {
            errors: [
                { msg: 'Esta página es solo para invitados' }
            ]
        })
    }
}

module.exports = guestMiddleware; 
