import { isEmpty, isEmail, isLength, normalizeEmail } from "validator";

const validate = (field, cb = isEmpty) => {
  if (!field || cb(field)) {
    return false;
  }
  return true;
};

export const validateRegister = (req, res, next) => {
  const { name, password } = req.body;
  const email = normalizeEmail(req.body.email);
  if (!validate(name)) {
    return res.status(400).json({ error: "Name is required" });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email" });
  }
  if (!isLength(password, { min: 6 })) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 or more character" });
  }
  next();
};

export const validateLogin = (req, res, next) => {
  const { password } = req.body;
  const email = normalizeEmail(req.body.email);
  if (!isEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email" });
  }
  if (!isLength(password, { min: 6 })) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 or more character" });
  }
  next();
};

export const validateProduct = (req, res, next) => {
  const { name, description, price, images } = req.body;
  if (isEmpty(name) || isEmpty(description) || isEmpty(price)) {
    return res.status(400).json({ error: "Missing field(s)" });
  }
  if (images.length === 0) {
    return res.status(400).json({ error: "Pleae upload at least 1 image" });
  }
  next();
};
