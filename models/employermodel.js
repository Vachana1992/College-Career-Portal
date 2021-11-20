var mongoose=require('mongoose');
var employerSchema=new mongoose.Schema(
    {
        employer_id : {type:Number},
        name : {type:String},
        career_advisor : {type:String},
        address : {type:String},
        city : {type:String},
        province : {type:String},
        zip_code : {type:String},
        phone : {type:Number},
        employer_email : {type:String}
    }
);

mongoose.model('employer',employerSchema);