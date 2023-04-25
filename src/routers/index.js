const userRouter = require("../routers/userRouter")
const messageRouter = require("../routers/messageRouter")

const routes = (app) => {
    app.use("/api/v1/", userRouter),
    app.use("/api/v1/message", messageRouter)
}

module.exports = routes