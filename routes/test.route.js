const {Router}=require("express");
const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const test=Router();
const TestSchema=new Schema({

});

const Test=model('test',TestSchema)

test.get('/',async(req,res)=>{
    try {
    const {ids}=req.query;
    const data = ids.map((ele)=>ele.replace(/^'|'$/g,""));
    const idsArray=JSON.parse(data);
    const idsObjectArray=idsArray.map((el)=>mongoose.Types.ObjectId(el));
    const testData=await Test.find({"_id":{"$in":idsObjectArray}});
     return res.send(testData)   
    } catch (error) {
       console.log(error) 
       return res.send(error)   
    }
     
})

test.get('/all',async(req,res)=>{
    try {
    const testData=await Test.find();
     return res.send(testData)   
    } catch (error) {
       console.log(error) 
       return res.send(error)   
    }
     
})

module.exports=test;