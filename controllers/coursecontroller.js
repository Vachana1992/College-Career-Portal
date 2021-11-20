var mongoose = require('mongoose'), Courses = mongoose.model('course')
module.exports = {

    getAll: function (req, res) {
        Courses.find({}, function (err, results) {
            if (err) throw err;
            console.log('found the data')
            console.log('results : ' + results)
            res.render('courses', { mycourses: results });
        })
    },

    deleteCourseById: function (req, res) {
        console.log('Here : ' + req.body);
        Courses.deleteOne({ id: req.body.id }).then(function () {
            console.log("Data Deleted");
            res.redirect("/getcourses");
        }).catch(function (err) {
            console.log("Error deleting data");
        })
    },

    editCourseByID: function (req, res) {
        console.log('Course Data to Update'+req.body);
        Courses.updateOne({ course_id: req.body.course_id }, { program_id: req.body.program_id, course_name: req.body.course_name, program_name: req.body.program_name, term: req.body.term, no_of_students: req.body.no_of_students, instructor_name: req.body.instructor_name }, function (err, docs) {
            if (err) { console.log(err); }
            else {
                console.log("Data is updated");
                res.redirect('/getcourses');
            }
        })
    },

    addCourse: function (req, res) {
        console.log(req.body);
        Courses.create(req.body, function (err, results) {
            if (err) { console.log(err); }
            else {
                console.log("Course added");
                res.redirect('/getcourses');
            }
        })
    }
}