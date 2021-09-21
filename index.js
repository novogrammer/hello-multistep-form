const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.set('view engine','ejs');
app.post('/serverside-a', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
app.post('/serverside-b',(req, res) => {
  console.log(req.body);
  res.render('page-b-result.ejs',req.body);
});
// Start Listenings
app.listen(3000, () => console.log('Listening on http://localhost:3000/...'));

