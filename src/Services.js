import React, { useEffect } from 'react'
import ServicesPage from './ServicesPage'
import Header from './Header';
import Footersection from './Footersection';
const Services = (props) => {

  useEffect(
    ()=>{

      document.title = props.name;
    }

  );



  return (
    <>

         <Header></Header>
          <ServicesPage></ServicesPage>
          <Footersection></Footersection>

    </>
  )
}

export default Services