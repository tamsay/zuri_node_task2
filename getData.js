let fetch = require("node-fetch");
let fs = require("fs").promises;
let path = require("path");

let resultDataPath = path.join(__dirname, "./result/posts.json");

(async () => {
  let call = await fetch("http://jsonplaceholder.typicode.com/posts");
  let result = await call.json();
  fs.writeFile(resultDataPath, JSON.stringify(result, null, 2));
})();
