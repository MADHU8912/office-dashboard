const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['admin', 'employee'],
        default: 'employee'
    },

    department: {
        type: String,
        default: 'IT'
    },

    project: {
        type: String,
        default: ''
    },

    task: {
        type: String,
        default: ''
    },

    taskStatus: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        default: 'Pending'
    },

    progress: {
        type: Number,
        default: 0
    },

    attendance: {
        type: String,
        enum: ['Present', 'Absent', 'Leave'],
        default: 'Present'
    },

    phone: {
        type: String,
        default: ''
    },

    address: {
        type: String,
        default: ''
    },

    profileImage: {
        type: String,
        default: ''
    },

    uploadedFiles: [{
        type: String
    }],

    notifications: [{
        message: String,
        date: {
            type: Date,
            default: Date.now
        }
    }],

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Employee", EmployeeSchema);