import User from "../../../models/User";
import connectDB from "../../../db";
import handler from "../../../middlewares/handler";
import auth from "../../../middlewares/auth";

connectDB();

export default handler.use(auth).get(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});
