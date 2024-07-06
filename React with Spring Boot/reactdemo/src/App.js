import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';

function App() {


const [employees, setEmployees] = useState([]);

useEffect(()=>{
  fetchEmployees();
},[]);

const fetchEmployees= async () => {
  const response = await axios.get("http://localhost:8082/getEmp");
  console.log(response.data);
  setEmployees(response.data);
}

  return (
    <div className="App">
      <h1>hello </h1>

      <table>
        <thead>
          <tr>  
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr> 
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    
  
  );
}

export default App;
