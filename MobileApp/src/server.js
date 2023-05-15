import express from "express";
import rutaController from "./controllers/rutaController.js";

const app = express();
const port = 3001;
app.use(express.json());

app.use("", rutaController)

app.listen (port, ()=>{
    console.log(`EJEMPLO ${port}`)
})

