var mongoose=require('mongoose');
var jobSchema=new mongoose.Schema(
    {
        id:{type:Number},
        company_name:{type:String},
        title:{type:String},
        application_procedure:{type:String},
        doc_required:{type:String},
        desc:{type:String},
        job_type:{type:String},
        no_of_positions:{type:Number},
        salary:{type:Number},
        targeted_pgms:{type:String},
        location:{type:String}
    }
);

mongoose.model('job',jobSchema);