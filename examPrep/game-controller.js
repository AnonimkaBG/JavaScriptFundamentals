const Game = require('../models/Game');

module.exports = {
  getIndex: function (req, res) {
    Game.find().then(games=>res.render('index',{games}));
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    let game=req.body;
    Game.create(game).then(()=>
    res.redirect('/')).catch(()=>res.redirect('create'));
  },
  getEdit: function (req, res) {
    let id=req.params.id;
    Game.findById(id).then(game=>res.render('edit',{game}));
  },
  postEdit: function (req, res) {
    let id=req.params.id;
    let newGame=req.body;
    Game.findByIdAndUpdate(id,newGame).then(()=>
    res.redirect('/')).catch(()=>res.redirect('edit'));
  },
  getDelete: function (req, res) {
    let id=req.params.id;
    Game.findById(id).then(game=>res.render('delete',{game}));
  },
  postDelete: function (req, res) {
    let id=req.params.id;
    Game.findByIdAndDelete(id).then(()=>res.redirect('/'))
    .catch(()=>res.redirect('delete'));
  }
};