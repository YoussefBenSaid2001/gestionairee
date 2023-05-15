import { app } from "./app.js";
import { connectDatabase } from "./dataBase.js"

connectDatabase();

app.listen(8800 , ()=>{
    console.log("Server is Running " + 8800)
    })