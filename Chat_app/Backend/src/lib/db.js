import mangoos from "mongoose"

export const connectDB = async ()=>{
    try{
        const conn=await mangoos.connect(process.env.MANGODB_URI)
        console.log(`Mangodb connected:${conn.connection.host}`)
    }catch(error){
        console.log(`Mangodb connection error:${error}`)
    };
    
}