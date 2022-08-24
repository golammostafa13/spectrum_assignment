const express = require('express');
const jsonServer = require('json-server');

const app = express();

const PORT = process.env.PORT || 8000;

app.use('/api', jsonServer.router('db.json'));
app.use(express.static(__dirname+'/dist/assignment'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname+'/dist/assignment/index.html');
});

app.listen(PORT, () => {
    console.log('app is listening at '+PORT);
})