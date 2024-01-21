import express from "express";
const app = express();
const port = 3000;
app.set('view cache', false)
app.listen(port,() =>{
    console.log(`server running on port http:localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello, World! how are you');
});