const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');
// crateing a server useing node.js

const server = http.createServer();

// Listener

server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET');

    //streaming file reading 
    const readableStream = fs.createReadStream(process.cwd() + '/Read/read.txt');

    readableStream.on('data', (buffer)=>{
        res.statusCode = 200;
        res.write(buffer)
    })
    readableStream.on('end', ()=>{
        res.statusCode = 200;
    res.end('Hello World');
    })

})

server.listen(5000, () => {
    console.log(`server is listening on port 5000`);
});




