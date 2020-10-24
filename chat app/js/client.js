/*
const socket = io('http://localhost:8080');

const form = document.getElementById('send-container')
const messageinput = document.getElementById('messageinp')
const messagecontainer = document.querySelector(".container")

var audio = new Audio('hangouts.mp3');

function appendmessage (message,position){
    const messageelement = document.createElement('div')
    messageelement.innerText=message
    messageelement.classList.add(message);
    messageelement.classList.add(position);
    messagecontainer.append(messageelement);
    if(position =='left'){
        audio.play();
    }
}

const name = prompt("ENTER YOUR NAME TO JOIN THIS SERVER:");
appendmessage(`You joined`, 'right')
socket.emit('new-user-joined',name)

socket.on('user-joined', name =>{
    appendmessage(`${name} joined the chat`, 'join')
 })

 socket.on('receive', data =>{
    appendmessage(`${data.name}: ${data.message}`,'left' )
})
 
 socket.on('left', name =>{
    appendmessage(`${name} left the chat`, 'leave')
 })
 form.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageinput.value
    append(`You: ${message}`, 'right') //YOUR MESSAGE
    socket.emit('send', message);
    messageinput.value =''

})*/





const socket = io('http://localhost:8080');

const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageinp')
const messagecontainer = document.querySelector(".container")

var audio = new Audio('hangouts.mp3');

const append = (message,position)=>{
    const messageelement = document.createElement('div');
    messageelement.innerText=message;
    messageelement.classList.add('message');
    messageelement.classList.add(position);
    messagecontainer.append(messageelement);
    if(position =='left'){
        audio.play();
    }
}

const name = prompt("ENTER YOUR NAME TO JOIN THIS SERVER:");
append(`YOU JOINED THIS CHAT`, 'right')
socket.emit('new-user-joined',name);

socket.on('user-joined', name =>{
     append(`${name} joined the chat`, 'join')
 })

 socket.on('receive', data =>{
    append(`${data.name}: ${data.message}`,'left' )
})
 
 socket.on('left', name =>{
     append(`${name} left the chat`, 'leave')
 })
 form.addEventListener('submit', (e) => {
    e.preventDefault()
    const message = messageinput.value;
    append(`You: ${message}`, 'right'); //YOUR MESSAGE
    socket.emit('send', message);
    messageinput.value =''

})
