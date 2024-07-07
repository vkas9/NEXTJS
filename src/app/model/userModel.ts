
import mongoose,{Document, Model, Schema} from "mongoose"


export interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    about:string;
    profileURL:string;
    createdAt: Date;
    updatedAt: Date;

}

const userSchema=new Schema<IUser>({
    name:{
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
    },
    about:{type:String,lowercase:true},
    profileURL:{type:String,lowercase:true}

},{timestamps:true})
const UserModel:Model<IUser>=mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default UserModel
