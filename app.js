require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require("./server/config/db");
const session = require('express-session');
const passport = require("passport");
const MongoStore =  require("connect-mongo");

const app = express();
const port = process.env.PORT || 5000;


// app.use(passport.initialize());
// app.use(passport.session());


app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Connect to DB
connectDB();

// Static Files
app.use(express.static('public'));

// Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require("./server/routes/index"));
app.use('/', require("./server/routes/dashboard"));



// Handeling Page not Found
app.get('*', function(req,res){
    // res.status(400).send("404 Page not found.");
    res.status(400).render("404");
});


app.listen(port,()=>{
    console.log(`App listening on port http://localhost:${port}/`);
});