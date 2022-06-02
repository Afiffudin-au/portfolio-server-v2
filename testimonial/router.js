const express = require('express')
const router = express.Router()
const Testimonial = require('./model')
router.get('/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find()
    res.status(200).json({
      data: testimonials,
    })
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
router.post('/testimonials', async (req, res, next) => {
  try {
    const { name, description, imgUrl } = req.body
    const testimonials = await Testimonial.create({
      name,
      description,
      imgUrl,
    })
    res.status(200).json({
      data: testimonials,
    })
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
router.put('/testimonials/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, imgUrl } = req.body
    const testimonials = await Testimonial.updateOne(
      { _id: id },
      {
        name,
        description,
        imgUrl,
      },
      {
        runValidators: true,
      }
    )
    if (testimonials) {
      res.status(200).json({
        data: testimonials,
      })
    } else {
      res.status(400).json({ message: 'testimonials tidak ditemukan' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
router.delete('/testimonials/:id', async (req, res) => {
  try {
    const { id } = req.params
    const testimonials = await Testimonial.deleteOne({ _id: id })
    if (testimonials) {
      res.status(200).json({
        data: testimonials,
      })
    } else {
      res.status(400).json({ message: 'testimonials tidak ditemukan' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
module.exports = router
