const fs = require("fs");

// File system in node js

// Writing file in node js

fs.writeFile("message.txt","Hello from Node JS",(err)=> {
    if (err) throw err;
    console.log("The file has been saved!")
});


// reading file 

fs.readFile('message.txt', 'utf-8' ,(err, data) => {
  if (err) throw err;
  console.log(data);
});
