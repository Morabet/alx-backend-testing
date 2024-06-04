const express = require('express');
const routes = require('./routes');

const app = express();
const port = 1245;

app.use('/', routes);
app.use('/students', routes);
app.use('/students/:major', routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
