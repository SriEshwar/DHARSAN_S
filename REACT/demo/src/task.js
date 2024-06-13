import React,{useState} from 'react';
const Task = () => {
    const [hoverCount, setHoverCount] = useState(0);
    const [showTable, setShowTable] = useState(false);

    const employees = [
    { id: 1, name: 'Dharsan', salary: '$5000' },
    { id: 2, name: 'Selvan', salary: '$6000' },
    { id: 3, name: 'Rohith', salary: '$7000' },
  ];

    return (
<div className="App">
      <header className="App-header">
        <div
          onMouseOver={() => setHoverCount(hoverCount + 1)}
          style={{ cursor: 'pointer', marginTop: '20px' }}
        >
          Hi, new to React {hoverCount}
        </div>
        
        <button
          onClick={() => setShowTable(!showTable)}
          style={{ marginTop: '20px', padding: '10px', fontSize: '16px' }}
        >
          {showTable ? 'Hide' : 'Show'} Employee Details
        </button>

        {showTable && (
          <table style={{ marginTop: '20px', borderCollapse: 'collapse', width: '50%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px' }}>Employee ID</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Employee Name</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Salary</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{employee.id}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{employee.name}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{employee.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </header>
    </div>
    );
}

export default Task;
