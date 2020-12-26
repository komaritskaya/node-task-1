const http = require('http');
const port = 8080;

const requestHandler = (request, response) => {
  console.log('Accessed by url', request.url);
  if (request.method === 'GET') {
    response.end('You got something\n');
  }
  if (request.method === 'POST') {
    console.log('Request headers: ', request.headers);
    response.end(`You posted ${
      request.headers.whatwillsavetheworld ? 
      `that ${request.headers.whatwillsavetheworld} will save the world\n` :
      `something\n`
    }`);
  }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('The following exception happened: ', err);
  }
  
  console.log(`Server listening on port ${port}`);
})