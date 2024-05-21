const express = require("express")
const server = express()
const { router: tasks } = require('./routes/tarefas')
const { router: users } = require('./routes/users')

server.use(express.json())
server.use("/v1", tasks)
server.use("/v1", users)

const port = 5000

//TDE 06
server.get('/health', (req, res) => {
    res.json({
        "status": "running"
    })
})

server.use((req, res, next) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    next()
})

server.listen(port, () => {
    console.log("servidor rodando na porta " + port)
})