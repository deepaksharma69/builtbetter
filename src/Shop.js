import React, { useEffect } from 'react'
import Header from './Header';
import Footersection from './Footersection';
import Furnituressection from './Furnituressection'

const Shop = (props) => {

  useEffect(
    ()=>{

      document.title = props.name;
    }

  );


  return (
    <>
  <Header></Header>
  <Furnituressection></Furnituressection>

  
  <Footersection></Footersection>
    </>
  )
}

export default Shop