var mongoose=require('mongoose');
var studentSchema=new mongoose.Schema(
    {
        student_id:{type:Number},
        first_name:{type:String},
        last_name:{type:String},
        course:{type:String},
        semester:{type:Number},
        career_advisor:{type:String},
        address:{type:String},
        phone:{type:Number},
        email:{type:String},
        cgpa:{type:Number},
        grade:{type:String}
    }
);

mongoose.model('student',studentSchema);