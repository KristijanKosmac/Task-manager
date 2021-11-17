const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const Task = require("./task")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0) {
                throw new Error("Age must be a positive number")
            }
        }
    },
    email: {
        type: String,
        unique: true,
        require: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)) {
               throw new Error("Email is invalid!") 
            }
        }
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes("password")) {
                throw new Error("Password cannot contain password")
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            require: true
        }
    }],
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

//Crete costum instance function/method
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() },  process.env.JWT_SECRET) // vtoriot argument e kako secret sign moze da bide koj bilo string   

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

// Se startuva ovaa fukncija koga go vrakjame userot vo response no imeto mora da e toJSON
userSchema.methods.toJSON = function () {
    const user = this 
    const userObject = user.toObject()
    
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

//Create costum class function
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Wrong password or username')
    }

    return user
}


// Middleware to transform password into hash before saving
userSchema.pre("save", async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
 
    next() // za da zavrsi funkcijata
})

userSchema.pre('remove', async function (next) {
    const user = this
    await Task.deleteMany({ owner: user._id })

    next()
})

const User = mongoose.model('User', userSchema)

// const me = new User({
//     name: "Kristijna",
//     age: 22,
//     email: "kos@hotmail.com ",
//     password: "testtestt"
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log("Error!", error)
// }) 

module.exports = User