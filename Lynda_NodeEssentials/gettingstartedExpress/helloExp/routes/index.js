exports.index = function (req, res) {
    res.render('default', {
        title: 'Home',
        classname: 'home',
    }); // This is used for rendering a template etc.
}
exports.about = function (req, res) {
    res.render('default', {
            title: 'About Me',
            classname: 'about',
            skills: ['Code', 'Smile', 'Happy']
        }); // This is used for rendering a template etc.
}
/* these are all routes, the above one is the root route, everything else has a different route, which can be used for various purposes. */
exports.me = function (req, res) {
    res.send("@rishigb");
}

