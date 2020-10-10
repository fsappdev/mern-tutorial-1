const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const newUser = new User({username})

    newUser.save()
    .then(() => res.json('User añadido!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/message').post((req, res)=>{
    res.json({
        body: req.body.params
    })
})

router.route('/addUser').post( async (req, res)=>{
   /*  console.log(req.body.username) */
    try {
        const username = req.body.username
        const newUser =  new User({username})

        await newUser.save()
        res.json({
            username,
            status: "201",
            success: "true"
        } )
    }catch(err){
        res.status(400).json('Error: ' + err)
    } 
})


module.exports = router