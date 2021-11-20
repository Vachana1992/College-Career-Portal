var mongoose = require('mongoose'), Admin = mongoose.model('admin')
module.exports = {

    Login: function (req, res) {
        console.log('User Name '+req.query.s_uname);
        console.log('Password '+req.query.s_pwd);
        const ad_name = req.query.s_uname;
        const ad_pwd = req.query.s_pwd;   
        Admin.find({}, function (err, result) {
            if (err) throw err;
            for(i=0;i<result.length;i++){
                console.log("Validating User");
                //console.log("User Details : "+result[i]);
                console.log("User ID : "+result[i].id);
                if((result[i].username==ad_name)&&(result[i].password==ad_pwd )){
                   console.log(result[i]);
                    res.render('adminpage.ejs',{admins:result[i]})
                }
            }
        })
    },
    addAdmin: function (req, res) {
        console.log(req.body);
    Admin.create(req.body,function(err,results){  
    if (err){console.log(err);}
            else{
                console.log("Admin added");
                res.redirect('/admin');
            }
        })
    },
    editAdmin:function(req,res){
        console.log('Inside edit admin'+req.body);
        var myquery = {id:req.body.editid};
		var newvalues=  {name:req.body.editname, email:req.body.editemail, phone:req.body.editphone,
        username:req.body.editusername, password:req.body.editpwd};
       
        
        Admin.updateOne(myquery,newvalues,function(err,result){
            if (err) throw err;
            else{
                console.log('Admin Data Updated');
            }
 
           
        })

    }
}