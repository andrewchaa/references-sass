const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(4000, function () {
  console.log('listening on port 4000...');
})
