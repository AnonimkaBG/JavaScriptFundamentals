const mongoose=require('mongoose');
let taskSchema=new mongoose.Schema({
    title:{
        type: mongoose.Schema.Types.String,
        required: true
    },
    status:{
        type: mongoose.Schema.Types.String,
        required: true
    }
});
const Task=mongoose.model('Task',taskSchema);
module.exports=Task;