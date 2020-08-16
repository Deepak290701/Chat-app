const express = require('express')
const app = express()
const http = require('http').createServer(app) 
const PORT = process.env.PORT || 3000
const path = require('path')
const { Socket } = require('net')

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

http.listen(PORT, ()=>{
    console.log(`port is running on ${PORT}`)
})


//socket

const io = require('socket.io')(http)
io.on('connection',(socket)=>{
    console.log('connected')
})