const app = require("./app")
const app = express()

//ENVIRONMENT VARIABLES declared in dev.env and set in package.json with env-cmd
const port = process.env.PORT
app.listen(port, () => {
    conosle.log('Server is up on port' + port)
})