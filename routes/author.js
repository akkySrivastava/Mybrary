const express = require('express')
const router = express.Router()

//All Authors Route
router.get('/', (req,res) => {
    res.render('author/index')
})


//New Authoer Router
router.get('/new',(req,res) =>{
    res.render('/author/new')
})

//create Author Route
router.post('/',(req,res) =>{
    res.send('Create')
})
module.exports = router