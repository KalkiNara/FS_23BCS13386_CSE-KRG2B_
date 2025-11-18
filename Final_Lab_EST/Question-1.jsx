import React, { useState } from "react";

export default function EmployeeList() {
  const employees = [
    "Amit Sharma",
    "Anjali Verma",
    "Rahul Kumar",
    "Rohit Singh",
    "Vaibhav Garg",
    "Sneha Gupta",
    "Suman Yadav"
  ];

  const [filterText, setFilterText] = useState("");

  const filteredEmployees = employees.filter((name) =>
    name.toLowerCase().startsWith(filterText.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Employee List</h2>

      <input
        type="text"
        placeholder="Filter by starting letters..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid #aaa"
        }}
      />

      <ul>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((name, index) => (
            <li key={index} style={{ margin: "5px 0" }}>
              {name}
            </li>
          ))
        ) : (
          <li>No matching employees found.</li>
        )}
      </ul>
    </div>
  );
}

