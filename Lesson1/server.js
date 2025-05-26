const http = require('http');

const server = http.createServer((req, res) => {
    console.log('✅ Request');

    // Обробка preflight-запиту
    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': 'http://localhost:63342',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        });
        res.end();
        return;
    }

    // Відповідь на звичайні запити
    res.writeHead(200, {
        'Access-Control-Allow-Origin': 'http://localhost:63342',
        'Content-Type': 'text/plain',
    });
    res.end('Hello from Back-end');
});

server.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000');
});

