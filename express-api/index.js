const express = require('express');
const app = express();

require('./controllers')(app);

const port = process.env.PORT || 3000;
app.listen(port);