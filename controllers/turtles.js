const express = require('express')
const Turtle = require('../models/turtles')
const cors = require('cors')
const router = express.Router()
router.use(express.json())
router.use(cors())
router.get('/seed', (req, res) => {
    const turtles = [
        { name: "Leonardo", role: "ninja" },
        { name: "Michaelangelo", role: "ninja" },
        { name: "Donatello", role: "ninja" },
        { name: "Raphael", role: "ninja" },
    ]
    Turtle.deleteMany({}, (err, data) => {
        Turtle.create(turtles, (err, data) => {
                res.json(data)
            })
        })
    })


router.get('/', (req, res)=>{
    Turtle.find({}, (err, turtles) => {
        res.json({turtles})
    })

})
router.delete('/:id', (req, res)=>{
    const { id } = req.params
    Turtle.findByIdAndDelete(id, (err, data) => {
        res.json(data)
    })
})
router.put('/:id', (req, res)=>{
    const {id}=req.params
    Turtle.findByIdAndUpdate(id, req.body, {new:true},(err, data) => {
        res.json(data)
    })
})
router.post('/', (req, res) => {
    Turtle.create(req.body, (err, data) => {
        res.redirect('/turtles')
    })
})


router.get('/:id', (req, res)=>{
    const { id } = req.params
    Turtle.findById(id, (err, data) => {
        res.json({ data })
    })
})

module.exports = router
