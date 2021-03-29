const express = require('express')
const Controller = require('./index')
const router = express.Router()

const response = require('../../../network/response')

// Routes
router.get('/', get)
router.post('/', upsert)

async function get(req, res, next) {
  let { start_date } = req.query
  const validDate = Controller.validateDate(start_date)
  if (!validDate) {
    return response.error(req, res, 'invalid date format', 400);
  }
  
  await Controller.get(start_date)
    .then((student) => {
      response.success(req, res, student, 200)
    })
    .catch(next)
}

async function upsert(req, res, next) {
  const student = req.body
  Controller.upsert(student)
    .then(() => {
      response.success(req, res, student, 201)
    })
    .catch(next)
}

module.exports = router
