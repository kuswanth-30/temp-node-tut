const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt')

stream.on('data',(result) => {
console.log(result)
})

//note output: total file size=167
// it reads file in 64kb + 64kb + 37kb =166kb 

/* default buffer size is 64kb
    last buffer -remainder
    highWaterMark- control buffer size
    */
   
    //const stram = createReadStream('./content/big.txt,{ highWaterMark: 90000 })
