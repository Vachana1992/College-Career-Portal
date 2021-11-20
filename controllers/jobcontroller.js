var mongoose = require('mongoose'), Jobs = mongoose.model('job')
module.exports = {

    getAll: function (req, res) {
        Jobs.find({}, function (err, results) {
            if (err) throw err;
            console.log('found the data')
            console.log('results : ' + results)
            res.render('jobs', { myjobs: results });
        })
    },
    getAllJobstoStudents: function (req, res) {
        Jobs.find({}, function (err, results) {
            if (err) throw err;
            console.log('found the data')
            console.log('results : ' + results)
            res.render('apply_to_jobs', { myjobs: results });
        })
    },
    addJob: function (req, res) {
        console.log(req.body);
        Jobs.create(req.body, function (err, results) {
            if (err) { console.log(err); }
            else {
                console.log("Job added");
                res.redirect('/getjobs');
            }
        })
    },
    editJobById: function (req, res) {
        console.log(req.body);
        var myquery = { id: req.body.editid };
        var newvalues = {
            $set: {
                company_name: req.body.editcomname, title: req.body.edittitle, application_procedure: req.body.editappproc,
                doc_required: req.body.editdocreq, desc: req.body.editdesc, job_type: req.body.edittype, no_of_position: req.body.editposition,
                salary: req.body.editsalary, targeted_pgms: req.body.edittarpgm, location: req.body.editloc
            }
        };


        Jobs.updateOne(myquery, newvalues, function (err, docs) {
            if (err) { console.log(err); }
            else {
                console.log("Data is updated");
                res.redirect('/getjobs');
            }
        })
    },

    deleteJobByID: function (req, res) {
        console.log('Here : ' + req.body.deleteid);
        Jobs.deleteOne({ id: req.body.deleteid }).then(function () {
            console.log("Data Deleted");
            res.redirect("/getjobs");
        }).catch(function (err) {
            console.log("Error deleting data");
        })

    },

    searchJobByName: function(req,res){
        Jobs.find({company_name:req.query.s_cmpny}, function (err, results) {
            if (err) throw err;
            else{
            console.log('found the data')
            console.log('results : ' + results)
            }
            res.render('jobs', { myjobs: results });
        })

    },
    deletejobsByID: function (req, res) {
        console.log('Here : ' + req.body);
        Student.deleteOne({ id: req.body.id }).then(function () {
            console.log("Data Deleted");
            res.redirect("/getallstudents");
        }).catch(function (err) {
            console.log("Error deleting data");
        })

    }

}