const express = require('express');
const path = require('path');
var hbs = require('hbs');

const app = express();
const port = 3000;

const publicDirectoryPath = path.join(__dirname, '../lab1/public');
const viewsPath = path.join(__dirname, '../lab1/templates/views');
const partialsPath = path.join(__dirname, '../lab1/templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        tab_title: 'Home'
    });
});

app.get('/how_to_find_us', (req, res) => {
    res.render('how_to_find_us', {
        tab_title: 'How to find us'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        tab_title: 'About'
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));