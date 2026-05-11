import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    project: "",
    task: "",
    status: ""
  });

  const fetchEmployees = async () => {
    const res = await axios.get("http://localhost:5000/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const addEmployee = async () => {
    await axios.post("http://localhost:5000/employees/add", form);
    fetchEmployees();
  };

  return (
    <div style={{padding:"20px"}}>

      <h1>IT Office Dashboard</h1>

      <input placeholder="Name"
      onChange={(e)=>setForm({...form,name:e.target.value})}/>

      <input placeholder="Email"
      onChange={(e)=>setForm({...form,email:e.target.value})}/>

      <input placeholder="Role"
      onChange={(e)=>setForm({...form,role:e.target.value})}/>

      <input placeholder="Project"
      onChange={(e)=>setForm({...form,project:e.target.value})}/>

      <input placeholder="Task"
      onChange={(e)=>setForm({...form,task:e.target.value})}/>

      <input placeholder="Status"
      onChange={(e)=>setForm({...form,status:e.target.value})}/>

      <button onClick={addEmployee}>Add Employee</button>

      <hr />

      {employees.map((emp)=>(
        <div key={emp._id}>
          <h3>{emp.name}</h3>
          <p>{emp.email}</p>
          <p>{emp.project}</p>
          <p>{emp.task}</p>

          <progress value={emp.status} max="100"></progress>
        </div>
      ))}

    </div>
  );
}

export default App;