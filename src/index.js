const express = require("express")
const dotenv = require("dotenv")
const {default: mongoose} = require("mongoose")
const routes = require("./routers")
const bodyParser = require("body-parser")
const cors = require("cors")

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.use(bodyParser.json({limit: '50mb'}))
app.use(cors())

routes(app)

app.get("/", (req, res) => {
    res.send("Api code by @crlk!")
})

app.get("/help", (req, res) => {
  res.send("Link!")
})

mongoose.connect(`mongodb+srv://lnkhoa1205:${process.env.KEY_MDB}@cluster0.ib9pez8.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log('Connected!'))
  .catch((err) => {
    console.log(err)
  })

app.listen(port, () => {
    console.log("Server is running in port: ",+ port)
})