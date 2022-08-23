const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/assignment/src'));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  })
app.use(requireHTTPS);
function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/assignment/src/index.html'));
})

app.listen(process.env.PORT || 8080);