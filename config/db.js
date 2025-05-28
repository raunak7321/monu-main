import mongoose from "mongoose";
const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        if(conn){
            console.log(`Mongodb Database Connected Successfully on ${conn.connection.host}`)
        }
    } catch (error) {
        console.log(`Mongodb Error in ${error}`)
        
    }
}
export default connectDb;