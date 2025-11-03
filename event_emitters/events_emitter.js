const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',() => {
    console.log("data recieved !!!")
})

customEmitter.emit('response') //must match with (.on) event name