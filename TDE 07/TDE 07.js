const express = require("express")
const server = express()

server.use(express.json())

const port = 5000

let tasks = [
    {
        id: 1,
        name: 'Comprar leite',
        description: 'Ir no mercado e comprar leite',
        isDone: false
    },
    {
        id: 2,
        name: 'Tirar o lixo',
        description: 'Levar o lixo pra fora',
        isDone: false
    },
    {
        id: 3,
        name: 'Limpar a casa',
        description: 'Varrer o chão e passar pano',
        isDone: false
    }
]


server.get('/tasks', (req, res) => {
    res.json(tasks)
})


server.post('/tasks', (req, res) => {
    const data = req.body
    const newTask = {
        id: tasks.length + 1,
        name: data.name,
        description: data.description,
        isDone: false
    }
    tasks.push(newTask)
    res.status(201).json(newTask)
})

server.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    const task = tasks.find(tasks => tasks.id === id)

    if (!task) return res.status(404).json({message: 'Task not found'})
    
    task.name = data.name
    task.description = data.description
    res.json(task)
})

server.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id)
    tasks = tasks.filter(tasks => tasks.id !== id)
    res.status(204).send()
    
})

server.listen(port, () => {
    console.log("servidor rodando na porta " + port)
})