const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',() => {
    console.log("data recieved !!!")
    })


customEmitter.on('response',() => {
    console.log("u can write as many funcns u want")
})


customEmitter.emit('response') //must match with (.on) event name