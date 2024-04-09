const express = require('express'); 
const app = express(); 

app.get('/test', (req, res) => res.json({ data: 'hello friend'} ))

app.listen(8080, () => {
    console.log("APP ON 8080");
});