const express = require('express');
const https = require('https');
const app = express();
var server = https.createServer(app);
/*var io = require('socket.io');
io.listen(server);*/


const PORT = process.env.PORT || 3000;
app.get('/', (req, res)=> {
    res.send('hello world');

});
app.use( express.static('src'));
/**/
//routers
app.use(require('./router/usuarios'));


app.listen(PORT, ()=>{console.log('Server listening on port '+PORT)});
console.log('Server on port '+ PORT);