const http = require("http");
const fs = require("fs");
const url = require("url");
const query = require("querystring");
const htmlUrl = "../front/front.html";

let numberGameAns = Math.floor(Math.random() * 100);
let playerturn = 5;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // 요청된 URL을 파싱하여 쿼리스트링을 포함한 정보를 얻음
  const pathname = parsedUrl.pathname;
  if (req.method === "GET") {
    if (pathname === "/") {
      fs.access(htmlUrl, fs.constants.F_OK, () => {
        fs.createReadStream(htmlUrl).pipe(res);
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
    } else if (pathname === "/numberGame/") {
      let inputNum = Number(url.parse(req.url).query);
      console.log(
        `inputNum: ${inputNum}, turn :${playerturn} , answer :${numberGameAns} `
      );
      if (playerturn === 0) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "gameover" }));
      } else if (inputNum < numberGameAns) {
        playerturn--;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "small" }));
      } else if (inputNum > numberGameAns) {
        playerturn--;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "large" }));
      } else if (inputNum === numberGameAns) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "congratuation" }));
      } else if (url.parse(req.url).query === "reset") {
        playerturn = 5;
        numberGameAns = Math.floor(Math.random() * 100);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "reset" }));
      }
    }
  }
});

server.listen(3000);
