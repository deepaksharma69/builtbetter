import React, { useEffect } from 'react'
import Header from './Header'
import Banner from './Banner'
import ServicesPage from './ServicesPage'
import Aboutsection from './Aboutsection'
import Furnituressection from './Furnituressection'
import Whosection from './Whosection'
import Projectssection from './Projectssection'
import Clientsection from './Clientsection'
import Contactsection from './Contactsection'
import Footersection from './Footersection'

const Home = (props) => {

  useEffect(
    ()=>{

      document.title = props.name;
    }

  );


  return (
    <>
    
        <Header></Header>
        <Banner></Banner>
        <ServicesPage></ServicesPage>
        <Aboutsection></Aboutsection>
        <Furnituressection></Furnituressection>
        <Whosection></Whosection>
        <Projectssection></Projectssection>
        <Clientsection></Clientsection>
        <Contactsection></Contactsection>
        <Footersection></Footersection>
        

    </>
  )
}

export default Home