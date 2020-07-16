import Category from "../../../models/Category";
import connectDB from "../../../db";
import handler from "../../../middlewares/handler";

connectDB();

export default handler
  .get(async (req, res) => {
    const { id } = req.query;
    try {
      const category = await Category.findById(id);
      res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  })
  .put(async (req, res) => {
    const { id } = req.query;
    const { name } = req.body;
    try {
      let category = await Category.findById(id);
      if (!category) {
        return res
          .status(404)
          .json({ error: "There is no category with this id" });
      }
      category = await Category.findByIdAndUpdate(id, { name }, { new: true });
      res.json(category);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  })
  .delete(async (req, res) => {
    const { id } = req.query;
    try {
      let category = await Category.findById(id);
      if (!category) {
        return res
          .status(404)
          .json({ error: "There is no Category with this id" });
      }
      await category.remove();
      res.json({});
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  });
