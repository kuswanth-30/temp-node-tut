const { readFile,writeFile } = require('fs').promises
// const util=require('util')
// const readFilepromise=util.promisify(readFile)
// const writeFilepromise=util.promisify(writeFile)


const start = async() =>{
    try{
        const first =await readFile('./first.txt','utf8')
        const second=await readFile('./second.txt','utf8')
        await writeFile('./result.txt',
            `this is awsome: ${first} ${second}`,
            {flag:'a'})


        console.log(first)
        console.log(second)
    }catch(error){
        console.log(error)
    }
}

start()




/*
const getText =(path)=>{
    return new Promise((reslove,reject)=>{
        readFile(path,'utf8',(err,data)=>{
    if (err){
        reject(err)
    } else{
        reslove(data)
        }   
    })
})
}
*/





