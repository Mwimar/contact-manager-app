import url, { URLSearchParams } from "url";

const urlString = "https://www.google.com/search?q=wus+good";
//URL Object;

const urlObj = new URL(urlString);

console.log(urlObj.pathname);

//format
console.log(url.format(urlObj));

//import.,meta.url- fole url

console.log(import.meta.url);

//fileURLToPath()

console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params);
console.log(params.get("q"));
