const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const makeIpsum = require('./makeIpsum')

const port =  process.env.PORT || 8080

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/ipsum/:num', (req, res) => {
  num = Number(req.params.num)
  res.send(makeIpsum(num))
})

app.get('*', function(req, res){
  res.redirect('/')
})

app.listen(port, () => {
  console.log('listening on', port)
})
