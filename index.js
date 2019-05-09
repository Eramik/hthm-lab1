const express = require('express');
const path = require('path');
var hbs = require('hbs');

const app = express();
const port = 3000;

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use('/static', express.static(publicDirectoryPath));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));