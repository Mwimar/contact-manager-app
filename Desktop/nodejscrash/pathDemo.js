import path, { dirname, extname } from "path";
import url from "url";

//basename();
const filePath = "/dir1/dir2/test.txt";
// console.log("Basename:", path.basename(filePath));

//dirname();

// console.log("Dirname:", path.dirname(filePath));

//extName();
// console.log("EXT:", path.extname(filePath));

//parse();

// console.log("Parse:", path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__filename, __dirname);

//join
const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath2);

//resolve()
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath3);
