const express = require('express');
const path = require('path')

const logger = require('./middleware/logger')

const app = express();

//Init middleware
// app.use(logger)



// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'))



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log("Server running "+ PORT));