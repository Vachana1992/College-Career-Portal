var mongoose = require('mongoose'), Student = mongoose.model('student')
module.exports = {

    getAll: function (req, res) {
        Student.find({}, function (err, results) {
            if (err) throw err;
            console.log('found the data')
            console.log('results : ' + results)
            res.render('students_admin_view', { mystudents: results });
        })
    },
    getStudentbyID: function (req, res) {
        const id = req.query.id;
        console.log('Student ID : ', id)
        Student.find({ 'student_id': id }, function (err, results) {
            if (err) throw err;
            console.log('found the data')
            console.log('results : ' + results)
            res.render('students', { mystudents: results });
        })
    },
    editStudentbyID: function (req, res) {
        Student.updateOne({ student_id: req.body.student_id }, { first_name: req.body.first_name, last_name: req.body.last_name, address: req.body.address, phone: req.body.phone, email: req.body.email }, function (err, docs) {
            if (err) { console.log(err); }
            else {
                console.log("Data is updated");
                res.redirect('/getallstudents');
            }
        })
    },
    addStudent: function (req, res) {
        console.log(req.body);
        Student.create(req.body, function (err, results) {
            if (err) { console.log(err); }
            else {
                console.log("Student added");
                res.redirect('/getallstudents');
            }
        })
    },
    deleteStudentByID: function (req, res) {
        console.log('Here : ' + req.body);
        Student.deleteOne({ id: req.body.id }).then(function () {
            console.log("Data Deleted");
            res.redirect("/getjobs");
        }).catch(function (err) {
            console.log("Error deleting data");
        })

    }
}