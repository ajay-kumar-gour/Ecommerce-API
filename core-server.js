const http = require("http");
const PORT = 8000;
const server = http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.write("HOME PAGE");
      res.end();
    } else if (req.url == "/app") {
      res.write("Application View");
      res.end();
    } else {
      res.write("<h1>404 Not Found !!</h1>");
      res.end();
    }
  })
  .listen(PORT, () => {
    console.log(`server is up and listening on http://localhost:${PORT}`);
  });
