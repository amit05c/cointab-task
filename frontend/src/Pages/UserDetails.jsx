import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { Box, Container, Flex, Select } from '@chakra-ui/react'
import TableComp from '../components/TableComp'
import { useState } from 'react'
import Pagination from '../components/Pagination'
const UserDetails = () => {
 const [data,setData]= useState([])
 const [total,setTotal]= useState()
 const [page,setPage]= useState(1)
 const [country,setCountry]= useState("")
 const [gender,setGender]= useState("")
 const [countryList,setCountryList]=useState([])

const getCountries= ()=>{
  axios
  .get(`http://localhost:8080/users/country`)
  .then((res) => setCountryList(res.data) )
  
  .catch((err) => console.log(err));
}

  useEffect(()=>{

       
  getCountries()


    // console.log(gender,country)
    
      if(gender && country){
        console.log(gender,country, "all")
        axios
      .get(`http://localhost:8080/users/getData?page=${page}&gender=${gender}&country=${country}`)
      .then((res) => {setData(res.data.allusers);setTotal(res.data.totalPages)})
  
      .catch((err) => console.log(err));
      }else if(country){
        axios
      .get(`http://localhost:8080/users/getData?page=${page}&country=${country}`)
      .then((res) => {setData(res.data.allusers);setTotal(res.data.totalPages)})
  
      .catch((err) => console.log(err));
      }else if(gender){
        axios
      .get(`http://localhost:8080/users/getData?page=${page}&gender=${gender}`)
      .then((res) => {setData(res.data.allusers);setTotal(res.data.totalPages)})
  
      .catch((err) => console.log(err));
      }else{
        axios
      .get(`http://localhost:8080/users/getData?page=${page}`)
      .then((res) => {setData(res.data.allusers);setTotal(res.data.totalPages)})
  
      .catch((err) => console.log(err));
      }

  
    
   
  },[page,gender,country])

const handlePage= (value)=>{
  console.log(value)
    setPage(value)
}

const handleGender= (e)=>{
   setGender(e.target.value)
}

const handlCountry= (e)=>{
   setCountry(e.target.value)
}



  return (
    <Box w={"100%"} border={"1px solid red"}>
      <Box>
        <Pagination totalPages={total} handlePage={handlePage} currentPage={page}/>
      </Box>

      <Flex>
        <Select onChange={handleGender}>
          <option>Filter by Gerder</option>
          <option value={"male"}>Male</option>
          <option value={"female"}>Female</option>
        </Select>

        <Select onChange={handlCountry}>
          <option>Filter by Country</option>
          {countryList.map((el,i)=>(

          <option key={i}>{el}</option>
          ))}
        </Select>
      </Flex>
      <TableComp data={data}/>
    </Box>
  )
}

export default UserDetails