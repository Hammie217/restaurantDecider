const express = require('express')
var routes = require('./routes');
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});


app.use(routes);