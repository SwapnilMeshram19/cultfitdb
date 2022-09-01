const {Router}=require('express');
const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const personalDetail=Router();

const personalDetailsSchema=new Schema({
    name:String,
    birthData:String,
    gender:String,
})

const PersonalDetail=model('personalDetail',personalDetailsSchema)

personalDetail.post('/',async(req,res)=>{

    try {
        const {personalDetail}=req.body;
        console.log(personalDetail)  
        
    } catch (error) {
        res.send("something Wrong Happned")
    }
})


module.exports=personalDetail

