const express = require('express')

const { db } = require('./db')
const todoRoute = require('./route/todo')
const todoOrderby = require('./route/order')
const app = express()
const server_port = process.env.PORT || 6565
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/public'))

app.use('/todos', todoRoute)
app.use('/orderby',todoOrderby)


db.sync()
    .then(() => {
        app.listen(server_port)
  })
  .catch((err) => {
    console.error(err)
  })