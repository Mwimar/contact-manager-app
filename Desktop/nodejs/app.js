const http = require('http');
function handleRequest(request, response) {
    if (request.url === '/currenttime') {
        response.statusCode = 200;
    response.end('<h1>' +new Date().toISOString()+ '<h1/>')
            
    } else if (request.url === '/') {
        response.statusCode =200;//200 to indicate success 404 vice-versa
        response.end('<h1>Karibu Huku OG</h1>')        
    }
};
const server = http.createServer(handleRequest);
server.listen(3000); //listening incoming requests on port 3000 for development purposes

// switch to port 80 0r 443 on an actual server