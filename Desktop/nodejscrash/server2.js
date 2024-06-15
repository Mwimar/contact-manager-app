import { createServer } from http;
const PORT = process.env.PORT;
const users = [
    { id: 1, name: "john doe" },
    { id: 2, name: "jane dawn" },
    { id: 3, name: "chief keef" }]

const server = createServer() = {};

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});