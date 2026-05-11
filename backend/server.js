const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   MongoDB Connection
========================= */

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("MongoDB Error:", err);
});

/* =========================
   Create Uploads Folder
========================= */

if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
}

/* =========================
   Multer Storage Config
========================= */

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }

});

/* =========================
   File Filter
========================= */

const fileFilter = (req, file, cb) => {

    const allowedTypes = [
        "image/jpeg",
        "image/png",
        "application/pdf"
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only JPG, PNG, PDF allowed"), false);
    }
};

/* =========================
   Upload Config
========================= */

const upload = multer({

    storage: storage,

    limits: {
        fileSize: 5 * 1024 * 1024
    },

    fileFilter: fileFilter

});

/* =========================
   Static Folder Access
========================= */

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* =========================
   Home Route
========================= */

app.get("/", (req, res) => {
    res.send("IT Office Dashboard API Running");
});

/* =========================
   File Upload Route
========================= */

app.post("/upload", upload.single("file"), (req, res) => {

    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });
        }

        res.status(200).json({
            success: true,
            message: "File Uploaded Successfully",
            file: req.file.filename,
            path: `/uploads/${req.file.filename}`
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

/* =========================
   Multiple File Upload
========================= */

app.post("/multi-upload", upload.array("files", 5), (req, res) => {

    try {

        const files = req.files;

        if (!files || files.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No files uploaded"
            });
        }

        res.status(200).json({
            success: true,
            message: "Files Uploaded Successfully",
            files: files
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

/* =========================
   Error Handling
========================= */

app.use((err, req, res, next) => {

    console.log(err);

    res.status(500).json({
        success: false,
        message: err.message
    });

});

/* =========================
   Server Start
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});