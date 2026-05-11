const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

router.post("/add", async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json(employee);
});

router.get("/", async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

module.exports = router;