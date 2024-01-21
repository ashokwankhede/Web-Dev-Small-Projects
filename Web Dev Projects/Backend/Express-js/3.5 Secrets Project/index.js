//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = '3000';
app.use(bodyParser.urlencoded({extended:true}));

var authrized = false
function passwordGenerator (req,res,next) {
    console.log(`Request method:  ${req.method}`);
    console.log("Request url:  "+ req.url);
    console.log("Request body "+ req.body['password']); 
    if (req.body['password']==="ILoveProgramming") {
        authrized = true;
    }
    next();
};
app.use(passwordGenerator);


app.post("/check",(req,res) => {
    if (authrized){
    res.sendFile(__dirname+"/public/secret.html");
    } else {
        res.sendFile(__dirname+ "/public/index.html")
    }
});

app.get("/", (req,res) => {
    res.sendFile(__dirname+ "/public/index.html")
})

app.listen(port, () =>{
    console.log(`server is running on ${port}`)
});
