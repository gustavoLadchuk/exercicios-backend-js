const express = require("express")
const router = express.Router()
const { prisma } = require("../prisma/db/prisma")


router.get('/tasks', async (req, res) => {
    const tasks = await prisma.tasks.findMany()
    res.json(tasks)
})


router.post('/tasks', async (req, res) => {
    const data = req.body
    const task = await prisma.tasks.create({
        data
    })
    res.status(201).json(task)
})

router.put('/tasks/:id', async (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    const task = await prisma.tasks.update({
        data,
        where: {
            id
        }
    })
    res.json(task)
})

router.delete('/tasks/:id', async (req, res) => {
    const id = Number(req.params.id)
    const task = await prisma.tasks.delete({
        where: {
            id
        }
    })
    res.status(204).send()
    
})

module.exports = { router }