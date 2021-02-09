const { db } = require('../model/Blog');
const dbBlog = require('../model/Blog');

const GIndex = (req,res) => {
    dbBlog.find().then(post => res.render('index',{posts:post})).catch(err => console.log(err));
}
const PIndex = (req,res) => {
    const saave = new dbBlog({
        title:req.body.title,
        author:req.body.author,
        description:req.body.description,
        img:req.file.filename,
    });
    saave.save((err) => {
        if(err) return err;
        res.redirect('/');
    })
}
module.exports = {
    GIndex,
    PIndex,
}
