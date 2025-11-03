const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id) => {
    console.log(`data recieved user ${name} and id ${id}!!!`)
    })

customEmitter.emit('response','kuswanth',39) 

// u can also pass parameters in emit 
// and define in callback fucn