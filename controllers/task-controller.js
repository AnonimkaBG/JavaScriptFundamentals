const Task = require('../models/Task');

module.exports = {
  getIndex: function (req, res) {
    Task.find()
    .then(task=>res.render('index',{
    'openTasks':task.filter(t=>t.status==='Open'),
    'inProgressTasks':task.filter(t=>t.status==='In Progress'),
    'finishedTasks':task.filter(t=>t.status==='Finished')}));
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    let task = req.body;
    Task.create(task).then(()=> {
      res.redirect('/');
    }).catch(()=>res.redirect('create'));
  },
  getEdit: function (req, res) {
    let id=req.params.id;
    Task.findById(id).then(task=>res.render('edit',{task}));
  },
  postEdit: function (req, res) {
    let id = req.params.id;
    let newTask = req.body;
    Task.findByIdAndUpdate(id, newTask).then(()=> {
       res.redirect('/');
    });
  },
  getDelete: function (req, res) {
    let id = req.params.id;
    Task.findById(id).then(task=>res.render('delete',{task}));
  },
  postDelete: function (req, res) {
    let id = req.params.id;
    Task.findByIdAndRemove(id).then(()=> {
       res.redirect('/');
    });
  }
};