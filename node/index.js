const http = require('http')
const fs = require('fs')
// 全局变量  证明node是单线程的
//单线程一个人把服务器弄挂了，其他人也访问不了
let index = 0;

const server = http.createServer((req,res)=>{
    index++;
    fs.readFile('./test.html',(err,data)=>{
        if(err){
            console.log('err');
        }
        res.setHeader('Content-Type','text/html,chartset=utf8')
        res.end(data.toString())
    })
    // res.end(`<h1>hello world ${index}</h1>`)
})

server.listen(3000)