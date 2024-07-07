
import mongoose,{Document, Model, Schema} from "mongoose"


export interface IUser extends Document{
    username:string;
    email:string;
    password:string;
  
    createdAt: Date;
    updatedAt: Date;

}

const userSchema=new Schema<IUser>({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
    }

},{timestamps:true})
const UserModel:Model<IUser>=mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default UserModel
