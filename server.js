const express = require('express');
const app = express();
const PORT = 8088;
const path = require('path');
app.use(express.static('public'));
app.listen(PORT);
