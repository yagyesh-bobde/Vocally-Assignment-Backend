const express = require('express')
const User = require('../models/User.js')
const router = express.Router()

// API 1: POST- Create a User
router.post('/newUser', async (req, res) => {
    try {
    let {name , email} = req.body
        console.log(email, name)
    let user = await User.find({ email: email })
    if( user[0]){
        return res.send({ success: false , error: "A user with this Email is already registered"})
    }

    let newUser = await User.create({
        email, 
        name
    })

    return res.send({
        success: true, 
        res: newUser
    })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ success: false, error: error })
    }
})


// API 2: GET: Get all Users


module.exports = router;