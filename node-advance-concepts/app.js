//CORE MODULES
const readline = require('readline');
const fs = require('fs');
const http = require('http');
const url = require('url');
const events = require('events');



//USER DEFINED MODULES
const  replaceHtml = require('./Modules/replaceHtml');
const user = require('./Modules/user');
// const { Socket } = require('dgram');

//THIRD PARTY MODULES / LIBRARIES

/*TOPIC 1: CODE EXAMPLE************
READING INPUT & WRITING OUTPUT
*************************************/
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Please enter your naame: ", (name) => {
//     console.log("You entered: "+name);
//     rl.close();
// })
    
// // events
// rl.on('close', () => {
//     console.log("Interface closed");
//     process.exit(0);
// })

/*TOPIC 2: CODE EXAMPLE************
READING & WRITING TO A FILE
*************************************/
// let textIn = fs.readFileSync('./Files/input.txt', 'utf-8'); //10min
// console.log(textIn)

// let content = `Data read from input.txt: ${textIn}. \nDate created ${new Date()}`
// fs.writeFileSync('./Files/output.txt', content);


/*TOPIC 4: CODE EXAMPLE**************
READING & WRITING TO FILE ASYNCHRONOUSLY
***************************************/
// fs.readFile('./Files/start.txt', 'utf-8', (error1, data1) => {
//     console.log(data1)
//     fs.readFile(`./Files/${data1}.txt`, 'utf-8', (error2, data2) => {
//         console.log(data2);
//         fs.readFile('./Files/append.txt', 'utf-8', (error3, data3) => {
//             console.log(data3);
//             fs.writeFile('./Files/output.txt', `${data2}\n\n${data3}\n\nDate created ${new Date()}`, () => {
//                 console.log('File writen successfully');
//             });
//         })
//     })
// })


// console.log('Reading file....');


/*TOPIC 5 to 11: CODE EXAMPLE**************
5 : CREATING A SIMPLE WEB SERVER
7 : CREATING ROUTES IN NODEJS ALONG WITH HTML RESPONSES
8 : SETTING HEADERS FOR RESPONSE
9 : WORKING WITH JSON DATA AND TRANSFORMING IT
10 : PARSING QUERY STRING FROM URL ALONG WITH RESUABLE FUNCTION
11 : Creating a Custom Module
***************************************/
const html = fs.readFileSync('./Template/index.html', 'utf-8')
let products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'))
let productListHtml = fs.readFileSync('./Template/product-list.html', 'utf-8');
let productDetailHtml = fs.readFileSync('./Template/product-details.html', 'utf-8');

// // Creating a Custom Module
// // function replaceHtml(template, product){

// //     let output = template.replace('{{%IMAGE%}}', product.productImage);
// //     output = output.replace('{{%NAME%}}', product.name);
// //     output = output.replace('{{%MODELNAME%}}', product.modeName);
// //     output = output.replace('{{%MODELNO%}}', product.modelNumber);
// //     output = output.replace('{{%SIZE%}}', product.size);
// //     output = output.replace('{{%CAMERA%}}', product.camera);
// //     output = output.replace('{{%PRICE%}}', product.price);
// //     output = output.replace('{{%COLOR%}}', product.color);
// //     output = output.replace('{{%ID%}}', product.id);
// //     output = output.replace('{{%ROM%}}', product.ROM);
// //     output = output.replace('{{%DESC%}}', product.Description);

// //     return output;
// // }

// // STEP 1: CREATE A SERVER
// const server = http.createServer((request, response) => {
//     console.log("A new request received")
//     // response.end(html)
//     // response.end("Hello from server")
//     let {query, pathname: path} = url.parse(request.url, true)
//     //console.log(x);
//     // let path = request.url;
//     // response.end(html)
    
//     if(path === '/' || path.toLocaleLowerCase() ==='/home'){
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         // response.end('You are in Home page');
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
//     } else if(path.toLocaleLowerCase() === '/about'){
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         // response.end('You are in About page');
//         response.end(html.replace('{{%CONTENT%}}', 'You are in About page'));
//     } else if(path.toLocaleLowerCase() === '/contact'){
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         // response.end('You are in Contact page');
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'));
//     }
//      else if(path.toLocaleLowerCase() === '/products'){
//         if(!query.id){
//             let productHtmlArray = products.map((prod) => {
//                 return replaceHtml(productListHtml, prod);
//             })
//             let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
//             response.writeHead(200, {'Content-Type': 'text/html' });
//             response.end(productResponseHtml);
//         } else {
//             let prod = products[query.id]
//             let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
//             response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
//         }
//     } 
//     else {
//         response.writeHead(404, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//     // response.end('Error 404: Page not found!');
//         response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found!'));
//     }
// });

// //STEP 2: START THE SERVER
// server.listen(8000, '127.0.0.1', () => {
//     console.log('Server has started!');
// })


/*TOPIC 12: CODE EXAMPLE**************
UNDERSTANDING EVENT DRIVEN ARCHITECTURE
***************************************/
//SERVER INHERITS FROM EVENTEMITTER
const server = http.createServer();

// server.on('request', (request, response) => {
//     let {query, pathname: path} = url.parse(request.url, true)
//     //console.log(x);
//     //let path = request.url;
    
//     if(path === '/' || path.toLocaleLowerCase() ==='/home'){
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
//     } else if(path.toLocaleLowerCase() === '/about'){
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in About page'));
//     } else if(path.toLocaleLowerCase() === '/contact'){
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'));
//     } else if(path.toLocaleLowerCase() === '/products'){
//         if(!query.id){
//             let productHtmlArray = products.map((prod) => {
//                 return replaceHtml(productListHtml, prod);
//             })
//             let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
//             response.writeHead(200, {'Content-Type': 'text/html' });
//             response.end(productResponseHtml);
//         } else {
//             let prod = products[query.id]
//             let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
//             response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
//         }
//     } else {
//         response.writeHead(404, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found!'));
//     }
// })

// // STEP 2: START THE SERVER
server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started!');
})


/*TOPIC 13: CODE EXAMPLE**************
EMITTING & HANDLING CUSTOM EVENTS
***************************************/
// let myEmitter = new user();

// myEmitter.on('userCreated', (id, name) => {
//     console.log(`A new user ${name} with ID ${id} is created!`)
// })

// myEmitter.on('userCreated', (id, name) => {
//     console.log(`A new user ${name} with ID ${id} is added to database!`)
// })

// myEmitter.emit('userCreated', 101, 'John');


/*TOPIC 14: CODE EXAMPLE**************
UNDERSTANDING STREAMS IN PRACTICE
***************************************/
//SOLUTION 1: WITHOUT READABLE OR WRITABLE STREAM
// server.on('request', (req, res) =>{
//     fs.readFile('./Files/large-file.txt', (err, data) =>{
//         if(err){
//             res.end('Something went wrong!');
//             return;
//         }
//         res.end(data);
//     })
// })

//SOLUTION 2: USING READABLE & WRITABLE STREAM
// server.on('request', (req, res) =>{
//     let rs = fs.createReadStream('./Files/large-file.txt');

//     rs.on('data', (chunk) => {
//         res.write(chunk)
//         // res.end();
//     })

//     // Overcome -Pipe method
//     rs.on('end', () => {
//         res.end();
//     })

//     rs.on('error', (error) => {
//         res.end(error.message);
//     })
// })

/*TOPIC 15: CODE EXAMPLE**************
UNDERSTANDING PIPE() METHOD
***************************************/
//SOLUTION 3: USING PIPE METHOD
// server.on('request', (req, res) => {
//     let rs = fs.createReadStream('./Files/large-file.txt');
//     rs.pipe(res);
//     //redableSource.pipe(writableDest)
// })

// console.log('Nodemon is working')


/*TOPIC 16: CODE EXAMPLE**************
EVENT LOOP IN PRACTICE
***************************************/
// console.log('Program has started')

// //STORED - 2ND PHASE
// fs.readFile('./Files/input.txt', () => {
//     console.log('File read complete!');

//     //STORED IN - 1ST PHASE
//     setTimeout(() => {
//         console.log('Timer callback executed')
//     }, 0);

//     //STORED IN - 3RD PHASE
//     setImmediate(() => {console.log('SetImmediate callback executed')});

//     process.nextTick(() => {console.log('Process.nextTick callback executed')})
// })

// console.log('Program has completed')