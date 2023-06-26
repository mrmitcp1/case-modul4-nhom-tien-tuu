class Logout {
    static getLogout(req, res,next) {
        req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/login.html');
    });
    };
}
export default Logout;