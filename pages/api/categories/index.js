import Category from "../../../models/Category";
import connectDB from "../../../db";
import handler from "../../../middlewares/handler";

connectDB();

export default handler
  .get(async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  })
  .post(async (req, res) => {
    const { name } = req.body;
    if (name === "") {
      return res.status(400).json({ error: "Name is required" });
    }
    try {
      const category = await Category.create({ name });
      res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  });
