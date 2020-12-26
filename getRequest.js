const http = require('http');

const getOptions = {
  hostname: 'localhost',
  port: 8080,
  path: '/',
  method: 'GET'
}

const getRequest = http.request(getOptions, (res) => {
  console.log('Hello guest!');
  console.log(`${getOptions.method} request finished with code: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d);
    console.log('Bye!');
  })
});

getRequest.on('error', error => {
  console.error(error);
})

getRequest.end();