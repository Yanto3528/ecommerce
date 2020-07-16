import multer from "multer";
import cloudinary from "cloudinary";
import cloudinaryStorage from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "ecommerce",
  allowedFormats: ["jpg", "png"],
  filename: function (req, file, cb) {
    cb(undefined, `image_${new Date().getTime()}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const limits = {
  fileSize: 1000000,
};

const uploadImage = multer({
  storage,
  fileFilter,
  limits,
}).single("image");

export default (req, res, next) => {
  uploadImage(req, res, function (error) {
    if (error) {
      if (error.code === "LIMIT_FILE_SIZE") {
        error.message = "File Size is too large. Allowed file size is 1MB";
        error.success = false;
      }
      return res.json(error);
    }
  });
  next();
};
