const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public/assets/')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/api/', (req, res) => {
  const date = new Date();
  const time = date.getHours().toString().concat(':', date.getMinutes());

  res.json({
    body: "This text was generated at ".concat(time)
  });
});

app.listen(8080);
