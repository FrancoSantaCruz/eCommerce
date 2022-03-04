function sessionMiddleware(req,res,next){
    if(req.session.loggedUser==undefined){
        return undefined;
    } else {
        return true;
    }
}