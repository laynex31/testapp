import http from 'http';
const port = 8000;

const server = http.createServer((req, res) => {


    res.write('hello world! 123');
    res.end();
});

server.listen(port, () => {
    console.log(`server running on port ${port}`);
});