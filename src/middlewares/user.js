const user = (req, res, next) => {

    res.locals.logged = false;
    res.locals.admin = false;

    return next();
}

module.exports = user;