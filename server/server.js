const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'anacondong!' })
  })

app.get('/login', (req, res) => {
  if(req.query.username == "test" && req.query.password == "test"){
    res.json({ user: {name: "test", password:"test", isAuth: true} })
  } else {
    res.json({ error: {msg: req.query.username+" login failed"} })
  }
})

// ADD THIS
var cors = require('cors');
app.use(cors());

app.listen(9000, () => {
  console.log('Application is running on port 9000')
})