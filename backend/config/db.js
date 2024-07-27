const mongoose=require("mongoose");

module.exports.connectDB=async()=>{
    await mongoose.connect("mongodb+srv://rachitagupta150:Rachi123@cluster0.v0w2uyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("DB Connected")
    })
    .catch((e)=>{
        console.log(e)
    })
}