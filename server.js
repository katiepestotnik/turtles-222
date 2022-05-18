require('dotenv').config()
const express = require('express')
const app = express()
PORT = process.env.PORT
const mongoose = require('./models/connection')

const Router = require('./controllers/turtles')

app.use('/turtles', Router)
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({
        hello: "こんにちは",
        goodbye: "じゃまた",
    })
})




// //index
// app.get('/turtles', (req, res)=>{
//     res.json(turtles)
// })

// //delete
// app.delete('/turtles/:id', (req, res)=>{
//     const { id } = req.params
//     turtles.splice(id, 1)
//     res.redirect('/turtles')
// })
// //create
// app.post('/turtles', (req, res)=>{
//     turtles.push(req.body)
//     res.redirect('/turtles')
// })

// //update
// app.put('/turtles/:id', (req, res)=>{
//     const {id} = req.params
//     turtles.splice(id, 1, req.body)
//     res.redirect(`/turtles/`)
// })

// //show
// app.get('/turtles/:id', (req, res)=>{
//     const {id}=req.params
//     res.json(turtles[id])
// })

app.listen(PORT,()=>{
    console.log(`${PORT} is listening`)
})