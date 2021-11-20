var mongoose=require('mongoose');
var adminSchema=new mongoose.Schema(
    {
        id:{type:Number},
        name:{type:String},
        email:{type:String},
        phone:{type:String},
        username:{type:String},
        password:{type:String}
    }
);

mongoose.model('admin',adminSchema);