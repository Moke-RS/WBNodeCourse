const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It works!');
  // const jsonData = { name: 'Moke', age: 34 };
  // res.json(jsonData);
  // res.send(req.query.name);
  // res.send(req.query);
  res.render('hello', {
    name: 'Moke',
    age: 34
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
