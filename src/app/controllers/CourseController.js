const Course = require('../model/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { MongooseToObject } = require('../../util/mongoose');


class CourseController {
    //[GET] /courses/: slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('./courses/show', {course:MongooseToObject(course)});
            })
            .catch(next);
  
    }
}

module.exports = new CourseController;