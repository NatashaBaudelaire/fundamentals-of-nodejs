import http from 'http';
import { json } from './json.js';
import { routes } from './route.js';
import { extractQueryParams } from '../src/utils/extract-query-params.js';

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    await json(req, res);

    const route = routes.find(route => {
        return route.method === method && route.path.test(url);
    });

    if (route) {
        const routeParams = req.url.match(route.path);
        const { query, ...params } = routeParams.groups;

        req.params = params;
        req.query = query ? extractQueryParams(query) : {};

        res.setHeader('Content-Type', 'application/json');
        return route.handler(req, res);
    }

    return res.writeHead(404).end();
});

server.listen(3334);
console.log('Server is running on port 3334');
