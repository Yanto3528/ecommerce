import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default models.Category || model("Category", CategorySchema);
