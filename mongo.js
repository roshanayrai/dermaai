const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://admin:123@cluster0.yarczpw.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})
