import { Button } from '@chakra-ui/react';
import React from 'react'

const  createPageArray=(n)=> {
    return new Array(n).fill(0);
  }
  
const Pagination = ({totalPages,currentPage,handlePage}) => {
    // console.log(totalPages,currentPage,handlePage)
    let pages = createPageArray(totalPages).map((a, i) => <Button m={"0.5rem"} className="page-btn" key={i} onClick={()=>handlePage(i+1)} disabled={currentPage == i+1}>{i+1}</Button>);
    return <div>{pages}</div>;
}

export default Pagination