require('../src/db/mongoose')
const Task = require("../src/models/task")

//KOGA SAKAS EDENA PO DRUGA RABOTA DA BIDAT IZVRSENI!!

Task.findByIdAndDelete("614b30273d65eca58e51b01a").then(task => {
    console.log(task)

    return Task.countDocuments({ completed: false})
}).then(result => {
    console.log(result)
}).catch(e => {
    console.log(e)
})

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})

    return count
}

deleteTaskAndCount("614b30273d65eca58e51b01a").then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})