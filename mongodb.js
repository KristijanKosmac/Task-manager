// const monogdb = require('mongodb')

// const MongoClient = monogdb.MongoClient
// const ObjectID = monogdb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = process.env.MONGODB_URL
const databaseName = 'task-manager'

// ID 
// const id = ObjectID()

// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.toHexString())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)


    //INSETING DATA IN COLLECTION
    // db.collection('users').insertOne({
    //     name: "Viktor",
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("unable to insert user")
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: "Jen",
    //         age: 28
    //     },
    //     {
    //         name: "Gunther",
    //         age: 28
    //     }
    // ], (error, result) => {
    //     if ( error ) {
    //         return console.log("Unable to insert documents!")
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: "Clean the house",
    //         status: true
    //     },
    //     {
    //         description: "Renew inspection",
    //         status: false
    //     },
    //     {
    //         description: "Pot plants",
    //         status: true
    //     }
    // ], (error, result) => {
    //     if ( error ) {
    //         return console.log("Unable to insert documents!")
    //     }

    //     console.log(result.ops)
    // })


    //FETCHING DATA FROM COLLECTION

    // db.collection('users').findOne({ _id: new ObjectID("60ba0a8d8b3bd2a239fda821") }, (error, user) => {
    //     if (error) {
    //         return console.log("Unable to fetch")
    //     } else if (!user) {
    //         return console.log("User not found!")
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({ age: 22 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log("Unable to fetch")
    //     } else if (!users) {
    //         return console.log("Users not found!")
    //     }

    //     console.log(users);
    // })

    //COUNT ALL DOCUMENTS WITH THAT CRITERIA
    // db.collection('users').find({ age: 22 }).count((error, count) => {
    //     if (error) {
    //         return console.log("Unable to fetch")
    //     } else if (!count) {
    //         return console.log("count not found!")
    //     }

    //     console.log(count);
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("60b9f56934e2efa0e8ae3271") }, (error, task) => {
    //     if (error) {
    //         return console.log("Unable to fetch")
    //     } else if (!task) {
    //         return console.log("Task not found!")
    //     }

    //     console.log(task);
    // })

    // db.collection('tasks').find({ status: false }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log("Unable to fetch")
    //     } else if (!tasks) {
    //         return console.log("Tasks not found!")
    //     }

    //     console.log(tasks);
    // })


    //UPDATE DATA FROM COLLECTION

    // db.collection('users').updateOne({
    //     _id: new ObjectID("60b9f2d73461f2a0ccbf311d")
    // }, {
    //     $set: {
    //         name: "Mike"
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     status: false
    // },{
    //     $set: {
    //         status: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // increment number field
    // db.collection('users').updateOne({
    //     _id: new ObjectID("60b9f2d73461f2a0ccbf311d")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // DELETE DOCUMENT FROM COLLECTION

    // db.collection('users').deleteMany({
    //     age: 22
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: "Renew inspection"
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

})
