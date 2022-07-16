const fs = require("fs");

const testObj = {
    name: "Jobayer",
    email: "jobayer.ak@gmail.com",
    address: {
        city: "Mymensingh",
        country: "BD"
    }
}

const data = JSON.stringify(testObj);

// write json file
fs.writeFile("./test.json", data, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File is written successfully!");
    }
})