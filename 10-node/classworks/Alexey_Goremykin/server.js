const http = require('http');
const os = require('os');
const fs = require('fs');
const crypto = require('crypto')

const server = http.createServer((request, response) => {

response.setHeader("Content-Type", "text/html; charset=utf-8;");
  let body = '';
  request.on('data', (chunk) => {
    body += chunk;
  }).on('end', () => {
    let value = JSON.parse(body);
    let result = value.password
    crypto.DEFAULT_ENCODING = 'hex';
    const key = crypto.pbkdf2Sync('supper-secure-password', 'salt', 100000, 64, 'sha512');
    if(crypto.pbkdf2Sync(result, 'salt', 100000, 64, 'sha512') === key){
      console.log({isValid: true})
    }else{
      console.log({isValid: false})
    }
  })
  if(request.url === "/dir_name"){
    response.write("<h2>Dir name</h2>");
    response.write(__dirname);
  }
  else if(request.url == "/file_name"){
    response.write("<h2>File name</h2>");
    response.write(__filename);
  }
  else if(request.url == "/cpus"){
    response.write("<h2>Cpus</h2>");
    console.log(os.cpus());
  }
  else if(request.url == "/number_of_cores"){
    response.write("<h2>Number of cores</h2>");
    console.log(os.cpus().length);
  }
  else if(request.url == "/home.html"){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(fs.readFileSync('home.html'));
  }
  else{
    response.write("<h2>Not found</h2>");
  }

  response.end();
}).listen(3000);
