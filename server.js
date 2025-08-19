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




// const express = require("express");
// const app = express()
// const path = require("node:path")

// app.use(express.json())

// const filePath = path.join(__dirname, 'view/index.html')

// app.get("/", (req, res)=>{
//     res.sendFile(filePath)
// })

// let arr = [];

// app.post("/", (req, res)=> {
//     console.log(req.query)
//     console.log(req.headers)
//     arr.push(req.body)
//     console.log(arr, "arr")
//     console.log(req.body)
//     res.end()
// })

// app.get("/tasks", (req, res)=>{
//     return res.json({"arr": arr});
// })
// app.listen(3000, ()=>{
//     console.log("Server is running at http://localhost:3000")
// })


//tasks (html file) => (GET)
// get all task (backend api) (GET)

// display html form (html file) (GET)
// create task (POST)





//user-information (username, email , password) => please fill all fields
//is information empty or not empty => please fill correct information
//validate the data lenght => name should be in 5 latter
// check the user information in databse if yes: user already exists => already in DB
//store the information in databse => register successfully


//lib (databse)
//model (schemas)
//controller ()
//router
//middleware
// app.use(express.raw({ type: "multipart/form-data", limit: "10mb" }));

// import express from "express";
// import { configDotenv } from "dotenv";
// import connectDB from "./db.js";
// import StudentModel from "./student.model.js";
// import jwt from "jsonwebtoken"
// configDotenv()
// const app = express();
// app.use(express.json())

// connectDB()

// app.post("/", async (req, res)=>{
//     // console.log(req.files)
//     const {firstname, lastname, email} = req.body;
//     if(firstname === "" || lastname === "" || email === ""){
//         console.log("all fields are require...")
//     }
//     console.log("before ")

//     const dbUser = await StudentModel.findOne({email: email});
//     if(dbUser){
//         return res.json({"message": "user already exists"})
//     }
//     console.log(dbUser, "check")
//     //  db.users.
//     // console.log(req.body)
//     const check =await StudentModel.create({firstname, lastname, email});
//     const token = jwt.sign({userId: check._id}, process.env.JWT_SECRET_KEY, {'expiresIn':'1h'})
//     console.log("error from db")
//     console.log(check, "information from db")
//     // res.end()
//     return res.json({
//         "message":"user register successfully",
//         "user":check,
//         "token":token
//     })
// })


// app.get("/profile", async(req, res)=>{
//     // console.log(req.header, "header");
//     // console.log(req.headers.authorization, "token");

//     const reqToken = req.headers.authorization;

//     const tryCheck = reqToken.split(" ");

//     const token = tryCheck[1]


//     const verifyData = jwt.verify(token, process.env.JWT_SECRET_KEY);

//     console.log(verifyData, "verify data")

//     res.end()
// })


// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// import { v4 as uuidv4 } from "uuid"
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//         const uuid = uuidv4();
//         const ext = path.extname(file.originalname);
//         const newFilename = `${uuid}${ext}`;
//         cb(null, newFilename);
//     }
// })

// const upload = multer({ storage: storage })


// app.use(express.urlencoded({ extended: true }))
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
// app.post("/upload", upload.single('file'), async (req, res, next) => {
//     // console.log(req.file)
//     const fileUrl = `/uploads/${req.file.filename}`;
//     console.log(fileUrl)
//     res.send("File uploaded successfully!");
// })

// app.get('/', (req, res) => {
//     res.send(`
//     <form action="/upload" method="POST" enctype="multipart/form-data">
//       <input type="file" name="file" />
//       <button type="submit">Upload</button>
//     </form>
//   `);
// });


// app.listen(3000, () => {
//     console.log("Server is running at http://localhost:3000")
// })





// import express from "express";
// import multer from "multer";
// import path from "path"
// import { v4 as uuidv4 } from 'uuid';
// import { v2 as cloudinary } from "cloudinary";
// import { configDotenv } from "dotenv";
// import cors from "cors"
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import nodemailer from "nodemailer";
// import { html, otp } from "./html-template.js";
// configDotenv();
// const app = express();


// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// })




// const transporter = nodemailer.createTransport({
//     host:"smtp.gmail.com",
//     port:587,
//     secure: false,
//     auth:{
//         user:"ov5010143@gmail.com",
//         pass:"mdth mofw cgst kvbg"
//     }
// })



// const mailOptions = {
//   from: "baghelvivek67@gmail.com",
//   to: "ov5010143@gmail.com",
//   subject: "Your OTP Code",
//   text: `Use this OTP to verify your email: ${otp}. It expires in 10 minutes.`, // plaintext fallback
//   html, // the HTML above
// };


// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: function (req, file) {
//         const ext = path.extname(file.originalname);
//         const uuid = uuidv4();
//         const newFileName = `${uuid}${ext}`
//         return { newFileName }
//     }
// })


// const upload = multer({ storage: storage })
// app.use(express.urlencoded({ extended: true }));
// app.use(cors())

// app.get('/', async (req, res) => {
//     try {
//         const mailInfo = await transporter.sendMail(mailOptions);
//         console.log(mailInfo);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }

//     res.json({"message":"hello world"})
// })

// app.post("/uploads", upload.single('file'), async (req, res) => {
//     const imageUrl = req.file.path;
//     console.log(imageUrl)
//     res.end()
// })
// app.listen(3000, () => {
//     console.log("server is running on http://localhost:3000")
// })


import { createServer } from 'http';
import { WebSocketServer } from 'ws';
const PORT = 3000
const server = createServer();

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    const users = wss.clients.size;
    console.log(users);

    ws.on("message", (message) => {
        wss.clients.forEach((client) => {
            client.send(message.toString())
        })
    })
    ws.send("hello from socket")
    ws.on('close', () => {
        console.log("user disconnected")
    })
})

server.listen(PORT, () => {
    console.log(`server is running on port https://localhost:${PORT}`)
})