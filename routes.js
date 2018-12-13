const express = require('express')
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/test', (req, res) => {
    
});


module.exports = router;