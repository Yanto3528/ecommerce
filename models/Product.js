import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    sizes: [
      {
        type: String,
        enum: ["S", "M", "L", "XL"],
      },
    ],
    colors: [String],
    selectedColor: String,
    selectedSize: {
      type: String,
      enum: ["S", "M", "L", "XL"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    category: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
  },
  { timestamps: true }
);

export default models.Product || model("Product", ProductSchema);
