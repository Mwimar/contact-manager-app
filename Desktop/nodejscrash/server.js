import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

//get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("File Name:", __filename, "Dirname:", __dirname);

//logging middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const server = http.createServer(async (req, res) => {
  logger(req, res, () => {});

  // res.end(JSON.stringify({ message: "Server Connected" }));
});

server.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
