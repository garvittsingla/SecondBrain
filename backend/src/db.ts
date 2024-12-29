import mongoose,{model,Schema} from "mongoose";


mongoose.connect("mongodb+srv://garvits093:43rDBHOUx4jmrKmU@cluster0.iokxe.mongodb.net/brainly")
const UserSchema = new Schema({
    username:{type:String,unique:true,},
    password:String
})
const ContentSchema = new Schema({
    type:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:'Tag'}],
    userId:{type:mongoose.Types.ObjectId,ref:'User',required:true}


})
const LinkSchema = new Schema({
    hash:String,
    userId:({type:mongoose.Types.ObjectId,ref:"User",required:true,unique:true})
})

export const UserModel = model("User",UserSchema)
export const LinkModel = model("Links",LinkSchema)
export const ContentModel= model("Content",ContentSchema)

