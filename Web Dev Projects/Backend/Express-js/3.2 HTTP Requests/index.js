import express from "express";
const app = express();
const port = "3000";



// URLS created
app.get('/',(req,res)=>{
    res.send(' <h1> hello </h1>')
});

app.get('/contact',(req,res) =>{
    res.send(`
    <h1>Heyy</h1> <br>
    <p> You can contact us here.</p> 
    `)
});


app.get('/about',(req,res) =>{
    res.send(`
    <h1>Heyy</h1> <br>
    <p> You can know more about us here. </p>    
    `)
});


// Port created 
app.listen(port,()=>{
    console.log(`Server is running at the port ${port}`);
});