const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

//connect db
db.connect();

//HTTP log
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '/public')))

//template engine
app.engine('hbs', handlebars({
  extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views') );
//console.log('PATH :',path.join(__dirname, 'resource/views') )

//Route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})