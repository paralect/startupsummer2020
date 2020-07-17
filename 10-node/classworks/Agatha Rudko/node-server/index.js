const http = require('http')
var os = require('os');
const crypto = require('crypto');
const port = 8080;
const hash = '37e753db1079f7d8ff8d145769664df46b12d8c3a3c4930a2e66ab76a8bfb4ca9e0fe69b7bc40355755846342cf19c95c58fa538d964963f04aff409621ec330';

const requestHandler = (request, response) => {
  response.setHeader("Content-Type", "text/html; charset=utf-8;")
  if(request.method === 'POST'){
   if(request.body == { password: 'supper-secure-password' }){
     response.write("{ isValid: true }")
   }else{
     response.write("{ isValid: false }")
   }
  }
if(request.method === 'GET'){
  switch (request.url) {
    case '/home' || '/':{
      response.write("<h2>This is home page</h2>");
      break;
    }
    case '/dir_name':{
      response.write(`<h2>${__dirname}</h2>`);
      break;
    }
    case '/file_name':{
      response.write(`<h2>${__filename}</h2>`);
      break;
    }
    case '/cups':{
      response.write(`<h2>${os.cpus()}</h2>`);
      break;
    }
    case '/number_of_cores':{
      response.write(`<h2>${os.cpus().length}</h2>`);
      break;
    }
    default:{
      response.write("<h2>Lol</h2>");
    }
  }}
  response.end();
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})
