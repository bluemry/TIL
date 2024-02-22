const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // 요청된 URL을 파싱하여 쿼리스트링을 포함한 정보를 얻음
  const pathname = parsedUrl.pathname;
  if (req.method === "GET") {
    if (pathname === "/") {
      fs.access("./front.html", fs.constants.F_OK, () => {
        fs.createReadStream("./front.html").pipe(res);
      });
    }
    //홈페이지
    else if (pathname === "/api/data") {
      // API 엔드포인트에 대한 GET 요청 처리
      const data = {
        message: "server!",
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    }
  }
});

server.listen(3000);
