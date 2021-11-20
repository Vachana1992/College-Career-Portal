var mongoose=require('mongoose');
var courseSchema=new mongoose.Schema(
    {
        course_id:{type:Number},
        program_id:{type:Number},
        course_name:{type:String},
        program_name:{type:String},
        term:{type:Number},
        no_of_students:{type:Number},
        instructor_name:{type:String}
    }
);

mongoose.model('course',courseSchema);