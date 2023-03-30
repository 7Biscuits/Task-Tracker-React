const express = require('express')
const router = express.Router()

const Model = require('../models/model')

router.post('/tasks', async (req, res) => {
    const data = new Model({
        title: req.body.title,
        description: req.body.description,
        day: req.body.day
    })

    try {
        dataToSave = data.save()
        res.status(200).json(data)
    }
    catch (error) {
        res.json({ message: error.message })
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const data = await Model.find()
        res.status(200).json(data)
    }
    catch (error) {
        res.json({ message: error.message })
    }
})

router.get('/tasks/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id)
        res.status(200).send(data)
    }
    catch (error) {
        res.json({ message: error.message })
    }
})

router.patch('/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id
        const updatedData = req.body
        const options = { new: true }
    
        const data = await Model.findByIdAndUpdate(id, updatedData, options)
    
        res.status(200).send(data)    
    }
    catch (error) {
        res.json({ message: error.message })
    }
})

router.delete('/tasks', async (req, res) => {
    try {
        const data = await Model.deleteMany({})
        res.status(200).send(data)
    }
    catch (error) {
        res.json({message: error.message})
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await Model.findByIdAndDelete(id)
        res.status(200).send(data)
    }
    catch (error) {
        res.json({message: error.message})
    }
})

module.exports = router