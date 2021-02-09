const mongoose =  require('mongoose');

const blog = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    }
},{timestamps:true});

mongoose.pluralize(null);

module.exports = mongoose.model('Blog',blog);