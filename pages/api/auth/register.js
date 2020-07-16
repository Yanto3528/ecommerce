import cookie from "cookie";
import User from "../../../models/User";
import connectDB from "../../../db";
import handler from "../../../middlewares/handler";
import { validateRegister } from "../../../middlewares/validator";

connectDB();

export default handler.use(validateRegister).post(async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }
    const newUser = await User.create(req.body);
    const token = newUser.getSignedJwtToken();
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 3600 * 24 * 7,
        path: "/",
      })
    );
    res.json({ message: "Register successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});
