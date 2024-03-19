const express = require('express');
const https = require('https');
const app = express();
var server = https.createServer(app);
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');
const PORT = process.env.PORT || 3000;

app.use(express.static('src'));
/**/
//routers
app.use(require('./router/usuarios'));
app.use(require('./router/form-to-pdf'));

app.get('/', async (req, res) => {
    res.send("hello");
});




app.listen(PORT, () => { console.log('Server listening on port ' + PORT) });