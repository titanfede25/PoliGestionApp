import express from "express";
import router from "./Controller.js";
import cors from "cors";

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

app.use("/", router)
app.listen (port, ()=>{
    console.log(`EJEMPLO ${port}`)
})



