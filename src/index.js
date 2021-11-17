const express = require('express')
require("./db/mongoose")
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
// const port = process.env.PORT || 8080

//ENVIRONMENT VARIABLES declared in dev.env and set in package.json with env-cmd
const port = process.env.PORT


// UPLOADING IMAGE
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {

//         // !file.originalname.endsWith(".doc") in if statement
//         if(!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error("Please upload Word document"))
//         }

//         cb(undefined ,true)

//         // cb(new Error("Invalid file form!")) za error
//         // cb(undefined, true) deka dobro pominal
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     // MIDDLEWARE HANDLEING ERRORS ZA DOBAR FORMAT NA ERROR MESSAGE 
//     res.status(400).send({ error: error.message})
// })


//MIDDLEWARES
// app.use((req, res, next) => {
//     if (req.method === "GET") {
//         res.send('Get requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send("Site is currently down.Check back soon!")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server listening on port:" + port)
})


// TOKEN HANDLEING
// const jwt = require("jsonwebtoken")

// const myFunction = async() => {
//     const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", { expiresIn: "7 days"})
//     console.log(token)

//     const data = jwt.verify(token, "thisismynewcourse")
//     console.log(data)
// }   


// myFunction()


// JOINGING TABLES
// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('615ec61283c34b4c7f6b31c9')
//     // const owner = await task.populate('owner').execPopulate()
//     // console.log(owner)

//     const user = await User.findById("615ec52c9843f54c4507ed41")
//     await user.populate('tasks').execPopulate()

//     console.log(user.tasks)
// }  

// main()