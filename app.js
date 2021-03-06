const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
require('dotenv/config')


app.use(bodyParser.json());

// Route Api
//import Routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute);

const customerRoute = require('./routes/customers')
app.use('/api/customers', customerRoute);

const profileRoute = require('./routes/profiles')
app.use('/api/profile', profileRoute);

const profileBusinesRoute = require('./routes/profileBusines')
app.use('/api/busines', profileBusinesRoute);

// view
// menggunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

//Route Home
app.get('/', (req, res) => {
    // res.send("apiBosJasa");
    res.render('index', {
        layout : 'layouts/main-layout',
        title : 'ApiBosJasa'
    });
});
app.get('/docs', (req, res) => {
    // res.send("apiBosJasa");
    res.render('docs', {
        layout : 'layouts/main-layout',
        title : 'ApiBosJasa'
    });
});

// koneksi ke database
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    },
    ()=>console.log("Connected to DB")
)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server is running on port 3000`);
});