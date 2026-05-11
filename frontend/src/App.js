import React from "react";

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";

import "./App.css";

function App() {

  const employeeData = [
    { name: "Admin", value: 5 },
    { name: "Employees", value: 25 }
  ];

  const taskData = [
    {
      name: "Completed",
      tasks: 40
    },
    {
      name: "Pending",
      tasks: 20
    },
    {
      name: "In Progress",
      tasks: 15
    }
  ];

  const attendanceData = [
    {
      name: "Present",
      value: 22
    },
    {
      name: "Absent",
      value: 3
    }
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042"
  ];

  return (

    <div className="container">

      <h1>IT Office Dashboard</h1>

      {/* Dashboard Cards */}

      <div className="cards">

        <div className="card">
          <h2>Total Employees</h2>
          <p>25</p>
        </div>

        <div className="card">
          <h2>Total Projects</h2>
          <p>10</p>
        </div>

        <div className="card">
          <h2>Pending Tasks</h2>
          <p>20</p>
        </div>

        <div className="card">
          <h2>Attendance</h2>
          <p>22 Present</p>
        </div>

      </div>

      {/* Charts Section */}

      <div className="charts">

        {/* Pie Chart */}

        <div className="chart-box">

          <h2>Employee Roles</h2>

          <PieChart width={350} height={300}>

            <Pie
              data={employeeData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >

              {
                employeeData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))
              }

            </Pie>

            <Tooltip />

          </PieChart>

        </div>

        {/* Bar Chart */}

        <div className="chart-box">

          <h2>Task Status</h2>

          <BarChart
            width={400}
            height={300}
            data={taskData}
          >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar dataKey="tasks" fill="#82ca9d" />

          </BarChart>

        </div>

      </div>

      {/* Attendance Pie Chart */}

      <div className="chart-box attendance-chart">

        <h2>Attendance Overview</h2>

        <PieChart width={350} height={300}>

          <Pie
            data={attendanceData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >

            {
              attendanceData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))
            }

          </Pie>

          <Tooltip />

        </PieChart>

      </div>

    </div>

  );
}

export default App;