const express = require("express")
const server = express()
const { router } = require("./routes/tasks")

server.use(express.json())
server.use(router)

const port = 5000

//TDE 06
server.get('/health', (req, res) => {
    res.json({
        "status": "running"
    })
})

server.listen(port, () => {
    console.log("servidor rodando na porta " + port)
})