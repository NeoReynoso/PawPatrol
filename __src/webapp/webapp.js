const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({"test":"test"});
});

app.listen(5000, () =>{console.log("Webapp started on part 5000")});