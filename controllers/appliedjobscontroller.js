var mongoose = require('mongoose'), AppliedJobs = mongoose.model('appliedjobs')
module.exports = {

    getAll: function (req, res) {
        AppliedJobs.find({}, function (err, results) {
            if (err) throw err;
            console.log('found the data')
            console.log('results : '+results)
            res.render('appliedjobs', { appliedjobs: results });
        })
    },

    getAppliedJobsbyStudentID: function (req, res) {
        console.log('Student id '+req.query.id)
        AppliedJobs.find({student_id:req.query.id}, function (err, results) {
            if (err) throw err;
            console.log('found the data')
            console.log('results : '+results)
            res.render('appliedjobs', { appliedjobs: results });
        })
    },

    addtoAppliedJobs: function (req, res) {
        console.log('Here')
        console.log(req.body);
        AppliedJobs.create(req.body,function(err,results){  
        if (err){console.log(err);}
                else{
                    console.log("Job added");
                    res.redirect('/getjobs');
                }
            })
    },

    editAppliedJobsByID: function (req, res) {
        console.log(req.body);
        AppliedJobs.updateOne({ job_id: req.body.job_id }, { gpa: req.body.gpa, preferred_location: req.body.preferred_location}, function (err, docs) {
            if (err) { console.log(err); }
            else {
                console.log("Data is updated");
                res.redirect('/get/appliedjobs');
            }
        })
    },

    

    deleteAppliedJobsbyID: function (req, res) {
        console.log('Here in Delete')
        console.log('Data to Update ',req.body)
        AppliedJobs.deleteOne({ id: req.body.job_id}).then(function () {
            console.log("Data Deleted");
            res.redirect("/get/appliedjobs");
        }).catch(function (err) {
            console.log("Error deleting data");
        })
    }

}