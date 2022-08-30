// event

const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('event', (data) => {
    console.log(data)
})
setTimeout(() => {


    emitter.emit('event', {
        id: 1,
        text: 'hello vitalii',
        type: 'data',
        online: true
    })
}, 2000)