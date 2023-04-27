import React, { useEffect } from 'react'
import Header from './Header';
import Footersection from './Footersection';
import Aboutsection from './Aboutsection';

const About = (props) => {

  useEffect(
    ()=>{
      document.title = props.name;
    }
  )


  return (
    <> 
    <Header></Header>
<Aboutsection></Aboutsection>
    
    <Footersection></Footersection>
    </>
  )
}

export default About