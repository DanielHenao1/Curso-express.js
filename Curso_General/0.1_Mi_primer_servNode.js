const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const read = fs.createReadStream("./static/index.html");
  read.pipe(res);
});

const puerto = 3000;

server.listen(3000);
console.log(`Server on port ${puerto}`);