const  admins= require('../models/Admin');


    
/*Get players page*/
module.exports.getAllAdmins = function (req,res){
    res.render('', {title:'',admins : admins})
}

/* GET Details page. */
module.exports.getOneAdmin= function(req,res){
    let name = req.params.Username;
    let admin = admins.find(member => member.Username === name);
    res.render('', { name: name ,title:''})
}
/* GET Edit page. */
module.exports.edit = function(req,res){
    let name = req.params.Username;
    let admin = admins.find(member => member.Username === name);
    res.render('', {  name: name ,title:'Edit', player : player})
}
/* Update Form */
module.exports.update = function(req,res){
    let name = req.params.Username;
    let admin = admins.find(member => member.Username === name);

    admin.Username = req.body.Username;
    admin.Email = req.body.Email;
    admin.password = req.body.password;
    res.render('', {title:''})
}; 

/* add-player form */
module.exports.addform = function(req,res){
    res.render('', { title:'add-form'})
}