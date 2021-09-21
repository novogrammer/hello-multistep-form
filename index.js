const express = require('express')
const app = express()
// body-parser
app.use(express.urlencoded({ extended: true }))
// static built-in middleware
app.use(express.static('public'))
// GET /foo
app.post('/foo', (req, res) => {
  console.log('--- post() /foo called ---')
  console.log(req.body);
  res.json(req.body);
})
// Start Listenings
app.listen(3000, () => console.log('Listening on http://localhost:3000/...'))

