const Players = require('./../models/models');


    
/*Get players page*/
module.exports.getAllPlayers = function (req,res){
    res.render('', {title:'',players : Players})
}

/* GET Details page. */
module.exports.getOnePlayer = function(req,res){
    let id = req.params.id;
    let player = Players.find(player => player.id === id);
    res.render('', { id : id ,title:''})
}
/* GET Edit page. */
module.exports.edit = function(req,res){
    let id = req.params.id;
    let player = Players.find(player => player.id === id);
    res.render('', { id : id ,title:'Edit', player : player})
}
/* Update Form */
module.exports.update = function(req,res){
    let id = req.params.id;
    let player = Players.find(player => player.id === id);

    player.firstname = req.body.firstname;
    player.lastname= req.body.lastname;
    player.position = req.body.position;
    player.age = req.body.age;
   
    res.render('', {title:''})
}; 

/* add-player form */
module.exports.addform = function(req,res){
    res.render('', { title:'add-form'})
}