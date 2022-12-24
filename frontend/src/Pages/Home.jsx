import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import ModalComp from '../components/ModalComp'
const Home = () => {
const [status,setStatus]=useState(false)
const navigate= useNavigate()
  const handleFetch= async()=>{
    console.log(status)
    if(status){
       alert("Feth in Progress")
    }
    setStatus(true)
   return await axios("https://randomuser.me/api/?results=50").then((res) =>
    
     res.data.results
  
  ).then((data)=>{
    // console.log(data)
    axios
      .post("http://localhost:8080/users/addusers", { results: data })
      .then((res) => console.log(res.data),setStatus(false))

      .catch((err) => console.log(err));
 
  })
  }

  const handleDelete= ()=>{
  
    axios
    .delete("http://localhost:8080/users/delete")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  }

  const handleNavigate= ()=>{
    navigate("/users")
  }

  
  return (
    <Container>
      <Text as="b" size="8xl">Home</Text>
       <Flex gap={"1rem"}>
        <Button colorScheme='green' onClick={handleFetch}>Fetch Users</Button>
        {/* <Button colorScheme='red' onClick={handleDelete}>Delete Users</Button> */}
        <Button colorScheme='cyan' onClick={handleNavigate}>View Users</Button>
        <ModalComp handleDelete={handleDelete}/>
       </Flex>
    </Container>
  )
}

export default Home