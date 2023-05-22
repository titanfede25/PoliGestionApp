import express from "express";
import router from "./controllers/rutaController.js";
import cors from "cors";

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

app.use("", router)
/*por ahora abrimos http://localhost:19006/  */
app.listen (port, ()=>{
    console.log(`EJEMPLO ${port}`)
})

