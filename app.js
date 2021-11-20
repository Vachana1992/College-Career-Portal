const express=require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var path = require('path');
var port = 8083;
var app = express();
app.use(bodyParser.urlencoded())
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

require('./models/studentmodel');
require('./models/employermodel');
require('./models/appliedjobsmodel');
require('./models/jobmodel');
require('./models/adminmodel');
require('./models/coursesmodel');
mongoose.connect('mongodb://localhost/finalproject', { useUnifiedTopology: true, useNewUrlParser: true },function(){
    console.log('Connected to the database');
});


app.get('/',function(req,res){
    res.render('index.ejs')
});
// app.get('/home/',function(req,res){
//     res.render('home.ejs')
// });

app.get('/student/login/',function(req,res){
    res.render('student_login.ejs')
});

app.get('/employer/login/',function(req,res){
    res.render('employer_login.ejs')
});

var admincontroller = require('./controllers/admincontroller.js');
app.get('/admin',function(req,res){
    res.render('admin_login.ejs')
});
app.get('/edit/admin',function(req,res){
    res.render('admin_selfedit.ejs',{old_id:req.query.id})
});
app.put('/update/admin',admincontroller.editAdmin);

app.get('/login',admincontroller.Login);
app.get('/signup',function(req,res){
    console.log('Inside signup')
    res.render('signup.ejs')
});
app.post('/admin/signup',admincontroller.addAdmin);

var studentcontroller = require('./controllers/studentcontroller.js');
app.get('/getstudents',function(req,res){
    res.render('student_details.ejs');
});
app.get('/getemployers',function(req,res){
    res.render('employer_details.ejs');
});
app.get('/getaddstudents',function(req,res){
    res.render('add_student.ejs');
});

app.get('/getaddemployers',function(req,res){
    res.render('add_employer.ejs');
});

app.post('/addstudents',studentcontroller.addStudent);
app.get('/getallstudents',studentcontroller.getAll);
app.get('/student/profile',studentcontroller.getStudentbyID);
app.get('/edit/student',function(req,res){
    console.log("id "+req.query.id)
    console.log('Inside Edit')
    console.log('req.query : '+req.query.id)
    res.render('edit_student.ejs',{old_id:req.query.id})
});
app.put('/update/student',studentcontroller.editStudentbyID);
app.post('/delete/student',studentcontroller.deleteStudentByID);


var employercontroller = require('./controllers/employercontroller.js');
const appliedjobscontroller = require('./controllers/appliedjobscontroller');
app.get('/getallemployers',employercontroller.getAll);
app.get('/employer/profile',employercontroller.getEmployerByID);
app.post('/addemployers',employercontroller.addEmployer);
app.get('/edit/employer',function(req,res){
    console.log("id "+req.query.id)
    console.log('Inside Edit')
    res.render('edit_employer.ejs',{old_emp_id:req.query.id})
});
app.put('/update/employer',employercontroller.editEmployerbyID);
app.post('/delete/employer',employercontroller.deleteEmployerByID);


const jobscontroller = require('./controllers/jobcontroller');
app.get('/getjobs',jobscontroller.getAll);
app.get('/get/jobs',jobscontroller.getAllJobstoStudents);
app.get('/edit/jobs',function(req,res){
    console.log('Data to Edit',req.query);
    res.render('edit_job.ejs',{old_id:req.query.id})
});
app.get('/manipulatejobs',function(req,res){
    res.render('manipulatejobs.ejs')
})
app.post('/addjob',jobscontroller.addJob);
app.put('/update/jobs',jobscontroller.editJobById);
app.get('/searchjob',jobscontroller.searchJobByName);
app.delete('/delete/jobs',jobscontroller.deleteJobByID);
app.post('/delete/jobs',jobscontroller.deletejobsByID);

app.get('/get/appliedjobs',appliedjobscontroller.getAll);
app.get('/edit/appliedjobs',function(req,res){
    console.log("id "+req.query.id)
    console.log('Inside Edit')
    console.log('req.query : '+req.query.id)
    res.render('edit_appliedjobs.ejs',{old_id:req.query.id})
});
app.put('/update/appliedjobs',appliedjobscontroller.editAppliedJobsByID);
app.post('/delete/appliedjobs',appliedjobscontroller.deleteAppliedJobsbyID);
// app.post('/apply/job',function(req,res){
//     console.log("Apply "+req.body)
// });
app.post('/apply/job',appliedjobscontroller.addtoAppliedJobs);

var coursecontroller = require('./controllers/coursecontroller.js');
app.get('/add/course',function(req,res){
    res.render('add_course.ejs')
});
app.get('/getcourses',coursecontroller.getAll);
app.get('/edit/course',function(req,res){
    console.log("id "+req.query)
    console.log('Inside Edit')
    console.log('req.query : '+req.query.course_id)
    res.render('edit_courses.ejs',{old_id:req.query.course_id})
});
app.post('/add/course',coursecontroller.addCourse);
app.put('/update/course',coursecontroller.editCourseByID);
app.post('/delete/course',coursecontroller.deleteCourseById);

app.listen(port);