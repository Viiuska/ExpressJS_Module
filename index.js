const express = require('express');
const path = require('path')
const expressValidator = require('express-validator')
//const logger = require('./middleware/logger');
//const { use } = require('./routes/api/members');
const members = require('./Members')

const app = express();

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "views"));

app.use(expressValidator())


//Init middleware
// app.use(logger)

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Homepage router
app.get('/', (req, res)=>{
    res.render('index', {
        title:"Member App",
        members
    })

})


// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Member API Routes
app.use('/api/members', require('./routes/api/members'))



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log("Server running "+ PORT));