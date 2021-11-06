const Course = require('../model/Course');

class SiteController {
    //[GET]  /home
    home(req, res) {

        Course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
                return;
            } else {
                res.status(400).json({ error: 'ERRORRRR !' });
            }
        });
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }


}

module.exports = new SiteController;