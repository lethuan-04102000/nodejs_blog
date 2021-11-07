const express = require('express');
const router = express.Router();

 // vào const Course nhé

const courseController = require('../app/controllers/CourseController')

router.get('/:slug', courseController.show);


module.exports = router;