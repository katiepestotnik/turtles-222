require('dotenv').config()
const mongoose = require('mongoose')
const DATABASE_URL = process.env.DATABASE_URL
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection
.on('open', ()=>console.log('connected'))
.on('close', ()=>console.log('closed'))
.on('error', (err)=>console.log(err))

module.exports = mongoose