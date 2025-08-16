const express=require('express');
const { addrider, getrider } = require('../controller/rider');
const riderrouter=express.Router();


riderrouter.post('/addrider',addrider);
riderrouter.get('/getrider',getrider);

module.exports=riderrouter;