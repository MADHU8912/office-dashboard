const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
   employee: String,
   date: String,
   status: String
});

module.exports = mongoose.model("Attendance", AttendanceSchema);