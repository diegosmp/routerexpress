const express = require('express')
const path = require('path')
const usersRouter = require('./src/router/usersRouter')

const app = express()
const basePath = path.join(__dirname, 'src/pages')
const port = 5000

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(express.static('src/public'))

app.use('/users', usersRouter)

app.get('/about', (req, res) => {
    try{
        res.status(200)
        res.sendFile(`${basePath}/about.html`)
    }catch(error){
        console.error(error)
    }
})

app.get('/', (req, res) => {
    try{
        res.status(200)
        res.sendFile(`${basePath}/index.html`)
    }catch(error){
        console.error(error)
    }
})

app.use('/', (req, res) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    try {
        console.log(`Sevidor aberto com sucesso \nlocalhost:${port}`)
    } catch(error) {
        console.error(error)
    }
})