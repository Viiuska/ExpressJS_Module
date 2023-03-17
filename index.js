const express = require('express');
const path = require('path')
const members = require('./Members')
const moment = require('moment')

const app = express();


const logger = (req,res, next)=>{
    console.log(req.protocol+"://"+req.get('host')+req.originalUrl+":"+moment().format());
    next()
}
//Init middleware
app.use(logger)

// Get all members
app.get('/api/members', (req, res)=>{
    res.json(members)
})

// Static folder
app.use(express.static(path.join(__dirname, 'public')));







const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log("Server running "+ PORT));