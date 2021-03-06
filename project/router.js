const express = require('express')
const router = express.Router()
const Project = require('./model')
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find()
    res.status(200).json({
      data: projects,
    })
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
router.get('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params
    const projects = await Project.findOne({ _id: id })
    if (projects) {
      res.status(200).send({ data: projects })
    } else {
      res.status(400).send({ message: 'Project not found' })
    }
  } catch (err) {
    res.status(500).send({ message: err.message || 'Internal server erorr' })
  }
})
router.post('/projects', async (req, res, next) => {
  try {
    const { projectName, description, githubLink, imgUrl, tech, previewLink } =
      req.body
    if (Array.isArray(tech)) {
      const projects = await Project.create({
        projectName,
        description,
        githubLink,
        imgUrl,
        tech,
        previewLink,
      })
      res.status(201).json({
        data: projects,
      })
    } else {
      res.status(400).json({ message: 'Bad Request' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
router.put('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { projectName, description, githubLink, imgUrl, tech, previewLink } =
      req.body
    const projects = await Project.updateOne(
      { _id: id },
      { projectName, description, githubLink, imgUrl, tech, previewLink },
      {
        runValidators: true,
      }
    )
    if (projects.modifiedCount === 0) {
      res.status(400).json({ message: 'project cant be updated ' })
    } else {
      res.status(200).json({
        message: 'project has been updated',
      })
    }
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
router.delete('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params
    const projects = await Project.deleteOne({ _id: id })
    if (projects.deletedCount === 0) {
      res.status(400).json({ message: 'project cant be deleted ' })
    } else {
      res.status(200).json({
        message: 'project has been deleted',
      })
    }
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server erorr' })
  }
})
module.exports = router
