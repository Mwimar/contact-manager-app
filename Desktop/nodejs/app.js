const express = require('express');

const app = express();
 
app.use(express.urlencoded({ extended: false }));//urlencoded checks requests for form data

app.get('/currenttime', function (req, res) {
    res.send('<h1>' + new Date().toISOString() + '<h1/>')}
);

app.get('/', function (req, res) {
    res.send('<form action="/store-user" method="POST"><label>Your Name<label> <input type="text" name="username"> <button>Submit</button></form>');
})//localhost 3000/currenttime;

app.post('/store-user', function (req, res) {
    const userName = req.body.username; //extract username
    console.log(userName);
    res.send('<h1>User Name Received</h1>')
})

app.listen(3000);

// function handleRequest(request, response) {
//     if (request.url === '/currenttime') {
//         response.statusCode = 200;
//     response.end('<h1>' +new Date().toISOString()+ '<h1/>')
            
//     } else if (request.url === '/') {
//         response.statusCode =200;//200 to indicate success 404 vice-versa
//         response.end('<h1>Karibu Huku OG</h1>')        
//     }
// };
// const server = http.createServer(handleRequest);
// server.listen(3000); //listening incoming requests on port 3000 for development purposes

// switch to port 80 0r 443 on an actual server 