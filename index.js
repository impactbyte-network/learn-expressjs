const express = require("express")
const bodyParser = require("body-parser")

const controllers = require("./controllers")
const todos = require("./todos")

const app = express()
const PORT = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", controllers.displayHelloWorld)
app.post("/", controllers.displayName)

app.get("/todos", todos.display)
app.post("/todos", todos.add)

app.listen(PORT, () => {
    console.log(`
    Server is listening on port ${PORT}
    `)
})
