import reviewModel from "../models/reviewModel.js";

export const createReviewController = async (req, res) => {
    try {
        const { name, rating, comment } = req.body;

        if(!name){
            return res.send({success:false,message:"name is required...!"})
        }
        const data = await  reviewModel.create({name,rating,comment})
        if(!data){
            return res.send({success:false,message:"review creation failed "})
        }
       if(data){
        return res.status(201).send({
            success: true,
            message: "Review created successfully",
            review: data
        });

       }
      
       
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message,
            error
        });
    }
};


export const  allReviewController = async(req,res)=>{
    try {

        const data = await reviewModel.find()
        if(!data){
            return res.send({success:false,message:"not found review"})
        }
        if(data){
            return res.send({success:true,message:"data find successfully...!",data})
        }
      
    } catch (error) {
        return res.status(500).send({success:false,message:error.message,error})

     
    }
  }


