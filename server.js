const http = require('http');

const server = http.createServer((req, res) => {
    const random = Math.random();

    if (random < 0.8) {
        // 80% des cas : Réponse 200
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK');
    } else if (random < 0.95) {
        // 15% des cas : Réponse 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    } else {
        // 5% des cas : Pas de réponse (timeout simulé)
        // On ne fait rien ici pour simuler l'absence de réponse
    }
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});