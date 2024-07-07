import mongoose,{Connection} from "mongoose"

 export const connectDB=async():Promise<void>=>{

    try {
        const {connection}:{connection:Connection}=await mongoose.connect(process.env.MONGODB_URL!);
        console.log("successfully Connected to DB");
        console.log("connection",connection.host)
        connection.on("connected",()=>{
            console.log("Server Connected!!!!")
        })

    } catch (error:any) {
        console.log("error",error)
    }

}