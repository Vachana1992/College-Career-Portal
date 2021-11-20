var mongoose=require('mongoose');
var appliedjobsSchema=new mongoose.Schema(
    {
        job_id:{type:Number},
        job_name:{type:String},
        description:{type:String},
        student_id:{type:Number},
        student_name:{type:String},
        gpa:{type:Number},
        preferred_location:{type:String}
    }
);

mongoose.model('appliedjobs',appliedjobsSchema);