const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post("/Login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await credentials.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/Signup",async(req,res)=>{
    const{email,
        password,
        firstName,
        lastName,
        contactNumber}=req.body

    const data={
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName,
        contactNumber:contactNumber
    }

    try{
        const check=await credentials.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await credentials.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/SkinProfileCreation", async (req, res) => {
    const skinProfileData = req.body;

    try {
        const skinProfile = new userprofiles(skinProfileData);
        await skinProfile.save();

        res.status(200).json({ status: 'success', message: 'Skin profile saved successfully.' });
    } catch (error) {
        console.error('Error saving skin profile:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});


app.listen(8000,()=>{
    console.log("port connected");
})