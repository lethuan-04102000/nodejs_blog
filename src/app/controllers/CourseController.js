const Course = require('../model/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { MongooseToObject } = require('../../util/mongoose');


class CourseController {
    //[GET] /courses/: slug
    show(req, res, next) {
            Course.findOne({ slug: req.params.slug })
                .then(course =>
                    res.render('courses/show', {
                        course: MongooseToObject(course),
                    })
                )
                .catch(next);

        }
        //[GET] /courses/: create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/: store
    store(req, res, next) {
            const courses = new Course(req.body);
            courses.save()
                .then(() => res.redirect('/'))
                .catch(error => {

                });
        }
        //[GET] /courses/: edit
    edit(req, res, next) {
            Course.findById(req.params.id)
                .then(course => res.render('courses/edit', {
                    course: MongooseToObject(course)
                }))
                .catch(next);
            // 
        }
        //[PUT] /courses/update
    update(req, res, next) {
            Course.updateOne({ _id: req.params.id }, req.body)
                .then(() => res.redirect('/me/stored/courses'))
                .catch(next);
            // res.json(req.body);
        }
        //[PUT] /courses/update
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new CourseController;