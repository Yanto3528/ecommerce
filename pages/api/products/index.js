import { isEmpty } from "validator";
import Product from "../../../models/Product";
import connectDB from "../../../db";
import mockup from "../../../mockup";
import handler from "../../../middlewares/handler";
import { validateProduct } from "../../../middlewares/validator";

connectDB();

export default handler
  .get(async (req, res) => {
    res.json(mockup);
  })
  .use(validateProduct)
  .post(async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  });
