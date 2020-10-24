/*//for handling socket connections

const express = require('express')
const app = express()
const http =require('http').createServer(app)

const PORT = process.env.PORT || 8080

http.listen(PORT, () => {
    console.log|(`LISTENING TO PORT ${PORT}`)
})

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})
*/

//_____________________________________________________

// for socket modele code

const io = require('socket.io')(8080)

const users = {};

//IF SOMEONE JOINS, OTHERS WILL KNOW
io.on('connection', socket =>{
    socket.on('new-user-joined', name =>{
        console.log("NEW USER", name)
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    });

//WHEN SOMEONE SENDS MESSAGE , OTHERS WILL KNOW
    socket.on('send', message =>{
        console.log("message", message)
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    });

//WHEN SOMEONE LEAVES MESSAGE , OTHERS WILL KNOW
    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
})