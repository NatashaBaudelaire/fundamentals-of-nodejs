import http from 'http';
import { Transform, pipeline } from 'node:stream';
import { promisify } from 'node:util';

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1;

        console.log(transformed);

        callback(null, Buffer.from(String(transformed)));
    }
}

const streamPipeline = promisify(pipeline);

const server = http.createServer(async (req, res) => {
    try {
        await streamPipeline(
            req,
            new InverseNumberStream(),
            res
        );
    } catch (err) {
        console.error('Pipeline failed:', err);
        res.end();
    }
});

server.listen(3333);
console.log('Server is running on port 3333');