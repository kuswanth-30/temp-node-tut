var http = require('http')
var fs= require('fs')

http
    .createServer(function(req,res){
        /*
        const text=fs.readFileSync('./content/big.txt','utf8')
        res.end(text) */
        
        //this is large data and we want to 
        // break it into chunks using fs module
        //fileStream

        const fileStream = fs.createReadStream('./content/big.txt','utf8');
        fileStream.on('open',()=>{
            fileStream.pipe(res)
            
            /* pushes from readStream to 
              writeStream*/
        })
        fileStream.on('error',(err)=>{
            res.end(err)

        })
        })
    .listen(5000)