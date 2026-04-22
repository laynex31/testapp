import http from 'http';
const port = 8000;

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