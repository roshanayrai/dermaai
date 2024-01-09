const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://admin:123@cluster0.v4oqmyc.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

const credSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
  });
  
  const credentials = mongoose.model("credentials", credSchema);

  const profileSchema = new mongoose.Schema({
    overallSkinType: {
      type: String,
      required: true,
    },
    sensitiveSkin: {
      type: String,
      required: true,
    },
    triggerIngredients: {
      type: String,
    },
    recentIrritations: {
      type: String,
      required: true,
    },
    dietDescription: {
      type: String,
      required: true,
    },
    dietImpactOnSkin: {
      type: String,
      required: true,
    },
    lifestyleFactors: {
      type: String,
      required: true,
    },
    diagnosedSkinConditions: {
      type: String,
      required: true,
    },
    medicationsAffectingSkin: {
      type: String,
      required: true,
    },
    knownAllergies: {
      type: String,
      required: true,
    },
    professionalTreatments: {
      type: String,
      required: true,
    },
    treatmentReactions: {
      type: String,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    sunExposure: {
      type: String,
      required: true,
    },
    sunPrecautions: {
      type: String,
    },
  });
  
  const userprofiles = mongoose.model("profiles", profileSchema);
  
  module.exports = {
    credentials,
    userprofiles,
  };