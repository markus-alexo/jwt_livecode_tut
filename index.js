const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser())
app.get('/',(req,res) => {
  res.send("Hello my dear friend!")
})

app.listen(3000)