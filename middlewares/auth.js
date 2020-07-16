import jwt from "jsonwebtoken";
import User from "../models/User";

export default async (req, res, next) => {
  if (!req.cookies.token) {
    return res.json({ error: "No authentication token found." });
  }
  try {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Access denied. Not authorized" });
  }
};
