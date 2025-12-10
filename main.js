const express = require ("express");
const app = express();

const PORT = ProcessingInstruction.env.PORT || 8000;

app.length("/", (req,res)=> {
    return res.json ({message : "Hey, I am nodejs in container running by ankita"});
});

app.listen (PORT,() => console.log(`Server started on PORT:${PORT}`))