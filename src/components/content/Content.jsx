import { FormControl, Input,Table,Thead,Tbody,Tr,Th,Td,TableContainer,InputGroup,  } from '@chakra-ui/react';
import React, { useState } from 'react';
import './content.css'
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
    setFormData({ date: '',description: '', category: '',  amount: '' });
  };

  return (
    <div className='form'>
<FormControl onSubmit={handleSubmit}>
   <form id='input' onSubmit={handleSubmit}>
      <InputGroup>

        <Input
          className='input'
          value={formData.date}
          onChange={handleChange}
          placeholder='Select Date'
          size='sm'
          name="date"
          type='date'
        />

        <Input
          className='input'
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder='Description'
          size='sm'
        />
            
        <Input
          className='input'
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder='Category'
          size='sm'
        />
      
        <Input
          className='input'
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder='Amount'
          size='sm'
        />
      
      </InputGroup>

      <button id='input' type="submit">Add Transaction</button>
  </form>
  
<TableContainer className='table'>

    <Table variant='simple'>
  
          <Thead className='tb'>
            <Tr >
              <Th>Date</Th>
              <Th>Description</Th>
              <Th>Category</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
<Tbody className='tb'>
  
    {tableData.map((data, index) => (
          <Tr  key={index}>
            <Td>{data.date}</Td>
            <Td>{data.description}</Td>
            <Td>{data.category}</Td>
            <Td>{data.amount}</Td>
          </Tr>
        ))}

</Tbody>

</Table>
</TableContainer> 
</FormControl>
</div>
);
}
export default Content;
