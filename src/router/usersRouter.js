const express = require('express')
const path = require('path')

const router = express.Router()
const basePath = path.join(__dirname, '../pages')

router.get('/create', (req,res) => {
    res.sendFile(`${basePath}/usersForm.html`)
})

router.post('/save', (req, res) => {
    const name = req.body.name
    const phone = req.body.phone

    console.log(`Name: ${name} \nPhone: ${phone}`)

    res.sendFile(`${basePath}/usersForm.html`)
})

router.get(':id', (req, res) => {
    try{
        req.params.id
        res.status(200)
        res.sendFile(`${basePath}/users.html`)
    }catch(error){
        console.error(error)
    }
})

router.get('/', (req, res) => {
    try{
        res.status(200)
        res.sendFile(`${basePath}/users.html`)
    }catch(error){
        console.error(error)
    }
})

module.exports = router