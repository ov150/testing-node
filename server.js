//http(create server, reqest, response, port, ip)

// build modules 
// http, fs, path, url, os

// fs - file system (readFile, writeFile, appendFile, unlink, rename, mkdir, rmdir)


// import fs from 'fs';
// console.log("first")
// const result = fs.readFileSync('./computer-hardware.txt', 'utf-8');
// console.log(result, "check")
// console.log('second')
// fs.readFile('./computer-hardware.txt', 'utf-8', ((err, data) => {
//     console.log(data, "from none blocking fs")
// }))
// console.log('third');


// const resultWrite = fs.writeFileSync("./computer-hardware.txt", "");
// console.log(resultWrite)

// const resultAppend = fs.appendFileSync("./computer-hardware.txt", "from ojd batch")

// const deleteFile = fs.unlinkSync("./computer-hardware.txt");


// fs.mkdirSync('./docs/a/b')
// fs.rmdirSync('./docs/a/')
// const stat = fs.statSync('./docs').isFile()
// console.log(stat)


// import os from 'node:os'
// console.log(os.platform())
// console.log(os.hostname())
// console.log(os.homedir())
// console.log(os.tmpdir())
// console.log(os.totalmem())
// console.log(os.freemem())
// const uptimeInMinutes = os.uptime() / 60;
// console.log('System Uptime (minutes):', uptimeInMinutes.toFixed(2));
// console.log(os.cpus().length)
// console.log(os.cpus()[0].model);


// import path from "path";
// console.log(path.basename('./computer-hardware.txt'))
// console.log(path.parse("/home/vivek/Desktop/testing-node/computer-hardware.txt"))

// console.log(path.basename('./docs/a/b/c.txt')) // c.txt
// console.log(path.dirname('./docs/a/b/c.txt')) // ./docs/a/b
// console.log(path.extname('./docs/a/b/c.txt')) // .txt
// console.log(path.join('./docs/a/b', 'c.txt')) // ./docs/a/b/c
// console.log(path.resolve('./docs/a/b', 'c.txt')) // /full/path/to/docs/a/b/c.txt
// console.log(path.isAbsolute('./docs/a/b/c.txt')) // false
// console.log(path.isAbsolute('/docs/a/b/c.txt')) // true 

// console.log(path.isAbsolute('/docs'))




//simple program 


//curl http://localhost:3000

// /about  api
// /gallery



// import http from "node:http"
// import fs from "node:fs"
// const fs = require('node:fs');
// const http = require('node:http');
// const server = http.createServer((req, res)=> {
//     //http://localhost:3000/file (console the file content(data))
//     console.log(req.url)
//     console.log(req.method)
//     const date  = new Date();
//     const time  =  date.getTime();
//     const writeMessage = `Url : ${req.url} , Method: ${req.method}, Time: ${time} \n`;
//     fs.appendFileSync("./computer-hardware.txt", writeMessage)
//     res.end();
// })

// server.listen(3000, ()=>{
//     console.log(`server is running at port : http://localhost:${3000}`)
// })


// const path = require('node:path');
// console.log(__dirname);
// console.log(__filename);
// console.log(path.dirname());
// console.log(path.basename());

// const result = path.join('/users', 'john', 'docs', 'file.txt');
// console.log(result); // Output: '/users/john/docs/file.txt'



// mkdir 

// const result = path.resolve('folder', 'file.txt');
// console.log(result); // Output: '/current/working/directory/folder/file.txt'


// /home/vivek/Desktop/testing-node 
//file explorer



// const path = require('node:path');
// console.log(__dirname); // Current directory
// console.log(__filename); // Full path of the current file
// const filePath = path.join('/docs', '/a','..//', 'c.txt');
// console.log(filePath);



// const http = require('node:http');
// const fs = require('node:fs');
// const path = require('node:path');

//multiple api endpoint (http://localhost:3000/api/user/login), methods(GET, POST, PUT, PATCH, DELETE)
//http=>creating server (createServer ), (req, res) (listen), 


// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;

//     if (url === '/' && method == "GET") {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>Welcome to the Home Page</h1>');
//     } else if (url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>About Us</h1>');
//     } else if (url === '/gallery') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>Gallery</h1>');
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h1>Page Not Found</h1>');
//     }
// });


// server.listen(3000, () => {
//     console.log(`Server is running at http://localhost:3000`);
// });


// cosnt [ variable, funcation ] = useState(), useEffect, useContext 



//http://localhost:3000/tasks (GET) => task form (when user click on submit task) get all the tasks (right top a button to "craete task")
//http://localhost:3000/task/create (GET) => 
//http://localhost:3000/task/create (POST) => 




const express = require("express");
const app = express()
const path = require("node:path")

app.use(express.json())

const filePath = path.join(__dirname, 'view/index.html')

app.get("/", (req, res)=>{
    res.sendFile(filePath)
})

let arr = [];

app.post("/", (req, res)=> {
    console.log(req.query)
    console.log(req.headers)
    arr.push(req.body)
    console.log(arr, "arr")
    console.log(req.body)
    res.end()
})

app.get("/tasks", (req, res)=>{
    return res.json({"arr": arr});
})
app.listen(3000, ()=>{
    console.log("Server is running at http://localhost:3000")
})


//tasks (html file) => (GET)
// get all task (backend api) (GET)

// display html form (html file) (GET)
// create task (POST)