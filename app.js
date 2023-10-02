const http = require("http");
const url = require("url");
const { User1, User2, User3, notAllow } = require("./data");

const app = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      const parsedUrl = url.parse(req.url, true);
      const pathname = parsedUrl.pathname;
      if (pathname === "/") {
        res.setHeader("Content-Type", "html");
        res.writeHead(200);
        res.end("<h1>Hello</h1>");
      } else if (pathname === "/users") {
        const users = [User1, User2, User3];
        res.setHeader("Content-Type", "json");
        res.writeHead(200);
        res.end(JSON.stringify(users));
      } else {
        const err = {
          status: "Not Found",
          message: "Data tidak ditemukan",
        };
        res.setHeader("Content-Type", "json");
        res.writeHead(404);
        res.end(JSON.stringify(err));
      }
    } else {
      res.setHeader("Content-Type", "json");
      res.writeHead(405);
      res.end(JSON.stringify(notAllow));
    }
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000),
  () => {
    console.log("Server berjalan di PORT 3000");
  };
