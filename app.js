require('dotenv').config()
const express = require('express')
const app = express()
const middleware = require('./src/middleware')
app.use(middleware)

require('./src/routes/index')(app)
const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log('## Deployment status chatbot has started ##')
})
