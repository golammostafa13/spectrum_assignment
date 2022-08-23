const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/assignment'));

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
app.use(requireHTTPS);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/assignment/index.html'));
})

app.listen(process.env.PORT || 8080);