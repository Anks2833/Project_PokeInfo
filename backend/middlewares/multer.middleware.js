import multer from "multer"
import path from 'path';
import fs from 'fs';

// Get the absolute path to the uploads directory
const __dirname = path.resolve();
const uploadDir = path.join(__dirname, 'public', 'uploads');

// Ensure the directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = file.originalname
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

export { upload }