var mongoose = require('mongoose'), Employer = mongoose.model('employer')
module.exports = {

    getAll: function (req, res) {
        Employer.find({}, function (err, results) {
            if (err) throw err;
            console.log('found the data')
            console.log('results : '+results)
            res.render('employers_admin_view', { myemployers: results });
        })
    },
    getEmployerByID: function (req, res) {
        const id=req.query.id;
        Employer.find({'employer_id':id}, function (err, results) {
            if (err) throw err;
            console.log('found the data')
            console.log('results : '+results)
            res.render('employers', { myemployers: results });
        })
    },
    editEmployerbyID: function (req, res) {
        
        Employer.updateOne({employer_id:req.body.employer_id},{name:req.body.name,address:req.body.address,city:req.body.city,province:req.body.province,zip_code:req.body.zip_code,phone:req.body.phone,employer_email:req.body.employer_email}, function(err, docs){
                if (err){console.log(err);}
                else{
                    console.log("Data is updated");
                    res.redirect('/');
                }
            })
    },
    addEmployer: function (req, res) {
        console.log(req.body);
        Employer.create(req.body,function(err,results){  
        if (err){console.log(err);}
                else{
                    console.log("Employer added");
                    res.redirect('/getallemployers');
                }
            })
    },
    deleteEmployerByID: function (req, res) {
        console.log('Here : '+req.body);
        Employer.deleteOne({id:req.body.id}).then(function(){
            console.log("Data Deleted");
            res.redirect("/getallemployers");
        }).catch(function(err){
            console.log("Error deleting data");
        })
        
    }
}