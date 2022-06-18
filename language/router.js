const express = require('express')
const Language = require('./model')
const router = express.Router()
router.get('/languages', async (req, res) => {
  try {
    const languages = await Language.find()
    res.status(200).json({
      data: languages,
    })
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
router.get('/languages/:id', async (req, res) => {
  try {
    const { id } = req.params
    const languages = await Language.findOne({ _id: id })
    if (languages) {
      res.status(200).send({ data: languages })
    } else {
      res.status(400).send({ message: 'Language not found' })
    }
  } catch (err) {
    res.status(500).send({ message: err.message || 'Internal server erorr' })
  }
})
router.post('/languages', async (req, res) => {
  try {
    const { urlProgLang } = req.body
    const languages = await Language.create({
      urlProgLang,
    })
    res.status(201).json({
      data: languages,
    })
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
router.put('/languages/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { urlProgLang } = req.body
    const languages = await Language.updateOne(
      { _id: id },
      {
        urlProgLang,
      },
      {
        runValidators: true,
      }
    )
    if (languages.modifiedCount === 0) {
      res.status(400).json({ message: 'language cant be updated' })
    } else {
      res.status(200).json({
        message: 'language has been updated',
      })
    }
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
router.delete('/languages/:id', async (req, res) => {
  try {
    const { id } = req.params
    const languages = await Language.deleteOne({ _id: id })
    if (languages.deletedCount === 0) {
      res.status(400).json({ message: 'language cant be deleted' })
    } else {
      res.status(200).json({
        message: 'language has been deleted',
      })
    }
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
module.exports = router
