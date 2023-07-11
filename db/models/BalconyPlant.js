import mongoose from "mongoose";

const { Schema } = mongoose;

const balconyPlantSchema = new Schema({
  name: { type: String, required: true },
  botanicalName: String,
  lightRequirements: String,
  usageType: String,
  growthHeight: Number,
  hardy: String,
  bloomStart: String,
  bloomEnd: String,
  nectar: Number,
  pollen: Number,
  imgUrl: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1530224417158-b0f5c5615418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  isUserPlant: Boolean,
});

const BalconyPlant =
  mongoose.models.BalconyPlant ||
  mongoose.model("BalconyPlant", balconyPlantSchema);

export default BalconyPlant;
