const mongoose = require('mongoose');

// url + name of table
const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const Tasks = mongoose.model("Task", {
//     description: {
//         type: String,
//         trim: true,
//         require: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Tasks({
//     description: "Clean the house",
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch(error => {
//     console.log("Error!", error)
// })