const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config()

//local modules
const { port } = require('../config')
const products = require('./components/students/network')

//Config
const app = express()
app.use(helmet())
app.use(cors())

//Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use('/students', products)


app.listen(port, () => console.log(
  `Server running on port ${port}`
))