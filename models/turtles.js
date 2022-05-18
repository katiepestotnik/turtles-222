const mongoose = require('mongoose')

const { Schema, model } = mongoose

const turtlesSchema = new Schema ({
    name: String,
    role: String,
})

const Turtle = model("Turtle", turtlesSchema)

module.exports = Turtle