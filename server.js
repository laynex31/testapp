import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const port = 8000;

// paths
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer( async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
        console.log(filePath);
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
        console.log(filePath);
      } else {
        throw new Error("not found");
      }
      const data = await fs.readFile(filePath);
      res.setHeader('content-type', 'text/html');
      res.write(data);
      res.end();
    } else {
      throw new Error("not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("server error");
  }
const server = http.createServer((req, res) => {
if (req.url === '/'){
    res.writeHead(200, { 'content-type': 'text/html'});
res.end('<h1>Homepage</hl>');

} else if ( req.url === '/about' ){

    res.writeHead(200, { 'content-type': 'text/html'});
    res.end ('<h1>about</h1>')
} else {
    res.writeHead(404, { "content-type": 'text/html'});
    res.end('<h1>not found</h1>')

}
// console.log(req.url);
// console.log(req.method);

});

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
