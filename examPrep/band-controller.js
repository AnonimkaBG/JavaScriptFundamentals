const Band = require('../models/Band');

module.exports = {
  getIndex: function (req, res) {
    Band.find().then(bands=>res.render('index',{bands}));
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    let band=req.body;
    Band.create(band).then(()=>res.redirect('/'))
    .catch(()=>res.redirect('create'));
  },
  getEdit: function (req, res) {
    let id=req.params.id;
    Band.findById(id).then(band=>res.render('edit',{band}));
  },
  postEdit: function (req, res) {
    let id=req.params.id;
    let newBand=req.body;
    Band.findByIdAndUpdate(id,newBand).then(()=>
    res.redirect('/').catch(()=>res.redirect('edit')));
  },
  getDelete: function (req, res) {
    let id=req.params.id;
    Band.findById(id).then(band=>res.render('delete',{band}));
  },
  postDelete: function (req, res) {
    let id=req.params.id;
    Band.findByIdAndDelete(id).then(()=>res.redirect('/')).catch(()=>res.redirect('delete'));
  }
};