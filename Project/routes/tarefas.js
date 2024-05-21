const express = require("express")
const router = express.Router()
const { prisma } = require("../prisma/db/prisma")
const { auth } = require("../middlewares/auth")


router.get('/tasks', auth, async (req, res) => {
    const user = req.user
    const tasks = await prisma.tasks.findMany({
        where: {
            usersId: user
        }
    })
    res.json(tasks)
})


router.post('/tasks', auth, async (req, res) => {
    const data = req.body
    const user = req.user
    const task = await prisma.tasks.create({
        data: {
            ...data,
            user: {
                connect: {
                    id: user
                }
            }
        }
    })
    res.status(201).json(task)
})

router.put('/tasks/:id', auth, async (req, res) => {
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

router.delete('/tasks/:id', auth, async (req, res) => {
    const id = Number(req.params.id)
    const task = await prisma.tasks.delete({
        where: {
            id
        }
    })
    res.status(204).send()

})

module.exports = { router }