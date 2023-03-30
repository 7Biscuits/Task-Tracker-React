const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const mongoConnectionString = "mongodb://localhost:27017/<db-name>"

mongoose.connect(mongoConnectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
}).then(() => {
    console.log('Database connected')
});

const app = express()

app.use(express.json())

app.use(cors())

const routes = require('./routes/router')

app.use('/', routes)

app.listen(8080, () => {
    console.log(`Listening on http://localhost:${8080}`)
})
