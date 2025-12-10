const express = require ("express");
const app = express();

const PORT = Process.env.PORT || 8000;

app.get("/", (req,res)=> {
    return res.json ({message : "Hey, I am nodejs in container running by ankita"});
});


app.listen (PORT,() => console.log(`Server started on PORT:${PORT}`))
