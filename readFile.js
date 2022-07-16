const fs = require("fs");

fs.readFile("./test.json", (err,data)=>{
    if(err){
        return console.log(err);
    }

    let convertedData = JSON.parse(data);
    console.log(convertedData);
})