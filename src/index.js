const express = require('express');
const app = express();
const colors = require('colors');
const path = require('path');

app.use(require('./routes/index'));

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//middlewares

//static files
app.use(express.static(path.join(__dirname, 'public')));

//listening
app.listen(app.set('port'), ()=>{
    console.log('Server listening on port'.red, app.set('port'));
});

