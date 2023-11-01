const { default: mongoose, Mongoose } = require("mongoose");

const mdata=new mongoose.Schema({
    image:String,
    name:String,
    director:String,
    year:Number,
    download:String,
    rating:Number,
    production:String,
    
})

module.exports=mongoose.model("Movie",mdata);