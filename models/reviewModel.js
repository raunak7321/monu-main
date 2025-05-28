import mongoose from "mongoose";
const reviewSchema  =  new mongoose.Schema({
 name:{
    type:String,
    required:true,
 },
 rating:{
    type:Number,
    enum:[1,2,3,4,5],
    default:5,
 },
 comment:{
    type:String,
    
 }

},
{timestamps:true})
export default mongoose.model("review",reviewSchema)