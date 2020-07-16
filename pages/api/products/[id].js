import Product from "../../../models/Product";
import connectDB from "../../../db";
import handler from "../../../middlewares/handler";
import auth from "../../../middlewares/auth";

connectDB();

export default handler
  .use(auth)
  .get(async (req, res) => {
    const { id } = req.query;
    try {
      const product = await Product.findById(id);
      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  })
  .put(async (req, res) => {
    const { id } = req.query;
    try {
      let product = await Product.findById(id);
      if (!product) {
        return res
          .status(404)
          .json({ error: "There is no product with this id" });
      }
      product = await Product.findByIdAndUpdate(id, req.body, { new: true });
      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  })
  .delete(async (req, res) => {
    const { id } = req.query;
    try {
      let product = await Product.findById(id);
      if (!product) {
        return res
          .status(404)
          .json({ error: "There is no product with this id" });
      }
      await product.remove();
      res.json({});
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  });
