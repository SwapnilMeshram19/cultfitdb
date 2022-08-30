const express=require("express");
const connectDB = require("./dbConnection");
const app=express();

app.use(express.json());
const labTestRoute=require('./routes/labTest.route.js');






async function main(){
    await connectDB();
    app.use("/labTest",labTestRoute);
}



app.listen(8058,()=>{
    console.log("server started");
    main();
})
