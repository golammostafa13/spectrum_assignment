const express = require('express');

const path = require('path');

const app = express();

const distDir = __dirname+'/dist'
console.log(distDir);

app.use(express.static(distDir));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname+'/dist/index.html'))
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);