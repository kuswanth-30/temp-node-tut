const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url==='/'){
res.end('hone page')
    }
    if(req.url==='/about'){
        res.end('about page')

    }
    console.log('req event')
    res.end('hello world this is reddy')
    res.end('error page')
})

server.listen(5000,() =>{

console.log('server listening on port:5000...')
})