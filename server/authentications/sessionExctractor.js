exports.fromSession = (req) => {
    var token = null;
    if (req && req.session) {
        token = req.session['jwt'];
    }
    return token;
};
