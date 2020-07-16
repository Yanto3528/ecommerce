import cookie from "cookie";
import User from "../../../models/User";
import connectDB from "../../../db";
import handler from "../../../middlewares/handler";
import { validateLogin } from "../../../middlewares/validator";

connectDB();

export default handler.use(validateLogin).post(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ error: "No user found. Please sign up" });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid creadentials" });
    }
    const token = user.getSignedJwtToken();
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
    res.json({ message: "Login successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});
