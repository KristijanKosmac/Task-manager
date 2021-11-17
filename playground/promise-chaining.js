require('../src/db/mongoose')
const User = require("../src/models/user")

//KOGA SAKAS EDENA PO DRUGA RABOTA DA BIDAT IZVRSENI!!

// User.findByIdAndUpdate("614b246431220da314428dc8",{ age: 1 }).then((user) => {
//     console.log(user)

//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return count
}

updateAgeAndCount("614b246431220da314428dc8", { age: 2}).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
}) 

