import { createServer } from 'http';
import url from "url";

const port = 8000;
const users = [
    {id:1, name: 'fruit'},
    {id:2, name: 'vegetable'},
    {id:3, name: 'meat'},

];

const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET' ) {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        console.log(users);
        res.end();
    } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id ===parseInt(id));
        if (user) {
            res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(user));
        res.end();
        } else  {
            res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({message: '404 not found'}));
        res.end();

        }
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({message: '404 not found'}));
        res.end();
    }
});

server.listen(port, () => {
    console.log (`server running on port ${port}`)
});