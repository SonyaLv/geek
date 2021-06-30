const http = require("http");
http
  .createServer((request, response) => {
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk.toString());
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log("body", body);
        response.writeHead("200", { "content-type": "text/html" });
        response.end("hello world yep11212111");
      });
  })
  .listen(8888);
console.log("server started");
