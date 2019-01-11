const fs = require("fs");
const readFromFile = (textFileName,callback) => {
    let arrayList = fs.readFileSync("./"+textFileName, "utf-8").split('\n');    
    callback(arrayList);
}
module.exports = {
    readFromFile
}