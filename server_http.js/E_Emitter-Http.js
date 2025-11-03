const http=require('http')

/* 
const server=http.createServer((req,res)=>{
    res.end('welcome')
    })
*/

// using event API
const server = http.createServer()
//emits request event
//subcribe to it/ listen to it/respond to it


server.on('request',(req,res)=>{ // using (on) event
    res.end('Welcome')
})

server.listen(5000)