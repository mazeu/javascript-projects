const http = require('http');
const host = 'http://localhost';
const port = 3000;

console.log(http);

http.createServer((req, res)=>{
    res.write('<h1>working</h1>')
}).listen(port, ()=>console.log(`server is running in ${host}:${port}`));