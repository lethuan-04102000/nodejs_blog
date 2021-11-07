const Course = require('../model/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET]  /home
    home(req, res, next) {

        // function callback type
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //         return;
        //     } else {
        //         res.status(400).json({ error: 'ERRORRRR !' });
        //     }
        // });

        // function promise 
        Course.find({})
            .then(courses => {
                res.render('home', 
                {
                     courses : multipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }


}

module.exports = new SiteController;