import mongoose from "mongoose";

export const connectDatabase = async ()=>{
try{
    const {connection} = await mongoose.connect("mongodb+srv://projet:youssef@cluster0.8puajh2.mongodb.net/khalil?retryWrites=true&w=majority")
    console.log(`MongDB connected : ${connection.host}`)
}catch(error){
    console.log(error)
    process.exit(1)
}
}