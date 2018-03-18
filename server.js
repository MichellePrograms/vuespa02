//import { request } from "https";


//this is the concept of modules, creating refs and using them
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");  //returns path relative to server.js file

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})();

//pull in the static file created by web pack in our dist folder
// that holds the app.js file with all our pollyfills and content.
// app here is the app express server ref that pulls in our dist content.
app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

require("./build/dev-server")(app);

app.get("*", (req, res) => {
  res.write(indexHTML);
  res.end();
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
