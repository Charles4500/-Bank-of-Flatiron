import React, { useState } from 'react';
import {FormControl, Input,Table,Thead,Tbody,Tr,Th,Td,TableContainer,InputGroup,} from '@chakra-ui/react';
import './foot.css'

function Foot() {
  const [formData, setFormData] = useState({ date: '', description: '',category: '',amount: '', });
  
  const [tableData, setTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({ date: '',description: '', category: '',  amount: '' });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTableData = tableData.filter((data) =>
    data.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

<div className='form'>
  <FormControl onSubmit={handleSubmit}> 
    <form  id='input' onSubmit={handleSubmit}>
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
<button className='btn' type="submit">Add Transaction</button>
</form>

        <input
          className='sea'
          type="text"
          placeholder="Search by description"
          value={searchQuery}
          onChange={handleSearchChange}
        />

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
{filteredTableData.map((data, index) => (
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
export default Foot;


      
        
       
     

