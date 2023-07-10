import mongoose from "mongoose";

const { Schema } = mongoose;

const plantSchema = new Schema({
  name: String,
  botanicalName: String,
  lightRequirements: String,
  usageType: String,
  growthHeight: Number,
  hardy: String,
  bloomStart: String,
  bloomEnd: String,
  nectar: Number,
  pollen: Number,
  imgUrl: String,
});

const Plant = mongoose.models.Plant || mongoose.model("Plant", plantSchema);

export default Plant;
