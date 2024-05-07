const express = require("express")
const server = express()

const port = 5000

server.get('/health', (req, res) => {
    res.json({
        "status": "running"
    })
})

server.listen(port, () => {
    console.log("servidor rodando na porta " + port)
})
