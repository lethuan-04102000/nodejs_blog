const Course = require('../model/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    //[GET] /me/Stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(course => res.render('me/stored-coures', {
                course: multipleMongooseToObject(course)
            }))
            .catch(next);
        // res.send('tesst');
    }

}

module.exports = new MeController;