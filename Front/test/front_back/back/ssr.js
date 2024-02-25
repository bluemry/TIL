const http = require("http");
const fs = require("fs");
const url = require("url");
const scriptUrl = "./dynamicScript.js";

const server = http.createServer((req, res) => {
  console.log(req.url);
  const html = `
  <!doctype>
  <html>
    <head>
      <title>Hello World</title>
      <script defer type="text/javascript" src="./dynamicScript.js"></script>
    </head>
    <body>
      <h1 id="h1">Hello World</h1>
      <p>hi</p>
    </body>
  </html>
  `;
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else {
    fs.access("./dynamicScript.js", fs.constants.F_OK, () => {
      fs.createReadStream(scriptUrl).pipe(res);
    });
  }
});
server.listen(80);
