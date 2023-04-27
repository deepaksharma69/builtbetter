import React, { useEffect } from 'react'
import Header from './Header';
import Footersection from './Footersection';
import Contactsection from './Contactsection';

const Contact = (props) => {

  useEffect(()=>{
    document.title= props.name;
  }
    
  );


  return (
    <>
    
    <Header></Header>

    <Contactsection></Contactsection>

    <Footersection></Footersection>

    </>
  )
}

export default Contact