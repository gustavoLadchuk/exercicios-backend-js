const express = require("express")
const router = express.Router()
const { prisma } = require("../prisma/db/prisma")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.post("/register", async (req, res) => {
    const email = req.body.email
    const userAlreadyRegistered = await prisma.users.findFirst({
        where: {
            email: email
        }
    })
    if (userAlreadyRegistered) return res.status(400).json({ message: "User already registered" })

    const password = bcrypt.hashSync(req.body.password, 10)

    await prisma.users.create({
        data: {
            email: email,
            password: password
        }
    })
    res.status(201).json({ message: "User created sucefully" })
})

router.post("/login", async (req, res) => {
    const data = req.body
    const user = await prisma.users.findFirst({
        where: {
            email: data.email
        }
    })
    if (!user) return res.status(400).json({ message: "Invalid credentials" })

    const isPasswordTheSame = bcrypt.compareSync(data.password, user.password)
    if (!isPasswordTheSame) res.status(400).json({ message: "Invalid credentials" })

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET)
    return res.status(200).json({
        message: "Logged sucefully",
        token
    })

})

module.exports = { router }