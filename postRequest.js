const http = require('http');

const postOptions = {
  hostname: 'localhost',
  port: 8080,
  path: '/',
  method: 'POST'
}

const postRequest = http.request(postOptions, (res) => {
  console.log('Hello guest!');
  console.log(`${postOptions.method} request finished with code: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d);
    console.log('Bye!');
  })
});

postRequest.on('error', error => {
  console.error(error);
})

postRequest.end();