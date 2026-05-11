const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    project: String,
    task: String,
    status: String
});

module.exports = mongoose.model("Employee", EmployeeSchema);