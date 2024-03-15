const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true },
  description: { 
    type: String, 
    required: true },
  dueDate: { 
    type: Date, 
    required: true },
  category: { 
    type: String, 
    required: true },
  priority: { 
    type: String, 
    required: true, 
    enum: ['High', 'Medium', 'Low'] },
  isCompleted: { 
    type: Boolean,
     default: false }
});

module.exports = mongoose.model('Task', TaskSchema);
