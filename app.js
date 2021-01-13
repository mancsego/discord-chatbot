require('dotenv').config()
const express = require('express');
const app = express();

require('./src/routes/index')(app);
const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`## Deployment status chatbot has started ##`);
})
