const express = require('express');
const router = express.Router();

//routes
router.get('/', (req, res) =>{
    res.render('index.html', { title: 'berrna annannanaNA' } );
    
    });

router.get('/berna', (req, res) =>{
        res.render('berna.html', { title: 'donde los enanos nacen' } );
        
        });

        router.get('/eli', (req, res) =>{
            res.render('eli.html', { title: 'welcome!' } );
            
            });

    module.exports = router;