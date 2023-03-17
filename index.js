const express = require('express');
const path = require('path')

const logger = require('./middleware/logger');
const { use } = require('./routes/api/members');

const app = express();

//Init middleware
// app.use(logger)

//Body oarser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Member API Routes
app.use('/api/members', require('./routes/api/members'))



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log("Server running "+ PORT));