// import fs from "fs";
import fs from "fs/promises";
// // read file-callback; Async

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log("This is Async", data);
// });

// //readFile Sync;
// const data = fs.readFileSync("./test.txt", "utf-8");
// console.log("This is Sync", data);

//read file- promise
// const data = fs
//   .readFile("./test.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
//write file async rewrites file content;

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "This is a second Statement");
  } catch (error) {
    console.log(error);
  }
};
writeFile();

readFile();
