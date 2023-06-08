import express from "express";
let app = express();

app.get("/alumno", (req, res,next) => {
    res.send([
        "Jaime Grimaldo",
        "Mauricio Matuz",
        "Ana Navarro"
    ])
});

app.listen(3001,()=>{
    console.log("> Api de alumnos funcionando.")
});