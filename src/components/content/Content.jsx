
import React, { useState } from 'react';
function Content() {
  const [formData, setFormData] = useState({ date: '', description: '',category: '',amount: '', });
  
  // State to hold table data
  const [tableData, setTableData] = useState([]);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the current form data to the table data
    setTableData([...tableData, formData]);
    // Clear the form inputs after submission
    setFormData({ date: '',description: '', category: '',  name: '' });
  };

  return (
    <div >
     
      {/* Form component */}
      <form id='input' onSubmit={handleSubmit}>
        {/* Input for name */}
        <label id='input'>
        Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label >
        <br />
        {/* Input for email */}
        <label id='input'>
        Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label id='input'>
        Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <label id='input'>
        Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>
        <br />
       
        <button id='input' type="submit">Add Transaction</button>
      </form>
      {/* Table component to display submitted data */}
      
      <table id='input' border='1'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through the tableData array to render table rows */}
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.description}</td>
              <td>{data.category}</td>
              <td>{data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Content;
