const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
var methodOverride = require('method-override')
const port = 3002;
const route = require('./routes');
const db = require('./config/db');
app.use(express.json());
app.use(express.urlencoded());

//connect db
db.connect();

//HTTP log
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '/public')))

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}), );
app.set('view engine', 'hbs');
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'resources', 'views'));

//console.log('PATH :',path.join(__dirname, 'resource/views') )

//Route init

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})

route(app);