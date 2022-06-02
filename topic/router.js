const express = require('express')
const Topic = require('./model')
const router = express.Router()
router.get('/topics', async (req, res) => {
  try {
    const topics = await Topic.find()
    res.status(200).json({
      data: topics,
    })
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
router.post('/topics', async (req, res) => {
  try {
    const { urlTopic } = req.body
    const topics = await Topic.create({
      urlTopic,
    })
    res.status(200).json({
      data: topics,
    })
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
router.put('/topics/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { urlTopic } = req.body
    const topics = await Topic.updateOne(
      { _id: id },
      {
        urlTopic,
      },
      {
        runValidators: true,
      }
    )
    if (topics) {
      res.status(200).json({
        data: topics,
      })
    } else {
      res.status(400).json({ message: 'topics tidak ditemukan' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
router.delete('/topics/:id', async (req, res) => {
  try {
    const { id } = req.params
    const topics = await Topic.deleteOne({ _id: id })
    if (topics) {
      res.status(200).json({
        data: topics,
      })
    } else {
      res.status(400).json({ message: 'topics tidak ditemukan' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
module.exports = router
