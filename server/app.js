const express = require('express');

const app = express();

const PORT =  process.env.PORT || 3002;

app.get('./login', (req, res)=>{
    res.status(200).end();

})

app.get('/logout', (req,res)=>{
    res.status(200).end();
})

app.use((req,res,next)=>{
    res.status(400).send('Route not found. ');

})

app.use((err, req, res, next)=>{
    res.status(err.status || 500).send(err.message || "Problem. ");

})
 
const server = app.listen(PORT, function(){
    console.log( `Server is up and running on port ${server.address().port }`);

})
