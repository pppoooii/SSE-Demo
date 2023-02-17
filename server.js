const http = require("http");
const moment = require("moment");

// request -> 请求对象
// response
const server = http.createServer((req, res) => {
  if (req.url === "/sse") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*",
    });
    res.write("event: test\n");
    res.write("event: my\n");
    // res.write(`data: ${getDate()}\n`);
    setInterval(() => {
      res.write(`data: ${getDate()}\n\n`);
    }, 1000);
  }
});

function getDate() {
  return moment().format("YYYY-MM-DD HH:mm:ss");
}

server.listen(8080);
