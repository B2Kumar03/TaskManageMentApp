import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Button, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import axios  from 'axios'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const Home = () => {
const [data,setData]=useState([])

const delete1 = (id) => {
  axios.delete(`http://localhost:8080/tasks/${id}`);
  // setUpd((prev) => !prev);
};

console.log(data);
const navigate=useNavigate()
  const fetchData=()=>{
    try {
      axios.get('http://localhost:8080/tasks')
      .then((data)=>setData(data.data))
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (

    <>
   
    <Navbar/>
    <Heading textAlign={"center"}>Your Task</Heading>
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th>Due Date</Th>
        <Th>Status</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
     {data.map((ele)=>{
      return <>
      <Tr>
        <Td>{ele.title}</Td>
        <Td>{ele.due_date}</Td>
        <Td>{ele.status?"Completed":"Pending"}</Td>
        <Td>
         <Flex>
          <Button onClick={()=>delete1(ele.id)}>Delete</Button>
          <Button ml={2} onClick={()=>navigate(`/edit/${ele.id}`)}>Edit</Button>
          <Button ml={2} onClick={()=>navigate(`/task/${ele.id}`)}>View Details</Button>
         </Flex>
        </Td>
      </Tr>
      <Flex justifyContent={"flex-end"} mt={10} w={"100%"}><Button>Create New Task</Button></Flex>
      </>
     })}
    </Tbody>
    
  </Table>
</TableContainer>
    </>
  )
}

export default Home