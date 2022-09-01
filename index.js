const express=require("express");
const connectDB = require("./dbConnection");
const app=express();

app.use(express.json());
const labTestRoute=require('./routes/labTest.route.js');
const personalDetail = require("./routes/personalDetails.route");
const testRoute=require('./routes/test.route.js');







async function main(){
    await connectDB();
    app.use("/labTest",labTestRoute);
    app.use("/test",testRoute);
    app.use("/personalDetails",personalDetail);
}



app.listen(8058,()=>{
    console.log("server started");
    main();
})
