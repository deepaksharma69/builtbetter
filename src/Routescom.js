import React from 'react';
import { Routes , Route  } from 'react-router-dom';
import Home from './Home';

import About from './About';
import Contact from './Contact';
import Shop from './Shop'
import Services from './Services';

const Routescom = () => {
  return (
    <>
        <Routes>

            <Route exact  path='/'  
            Component={()=> <Home name="Home Page Title" ></Home>}  
            ></Route>

             <Route exact  path='/Services'     
             Component={()=> <Services name="Services page title" ></Services>}  
             ></Route>

            <Route exact  path='/About'     
            Component={()=> <About name="About us page title" ></About>}  
            ></Route>


             <Route exact path='/Contact'
             Component={()=> <Contact name="Contact Us Page Title "></Contact>}
             ></Route>
             
             <Route exact path='/Shop'
             Component={()=> <Shop name="Shop Us Page Title "></Shop>}
             ></Route>


        </Routes>
    </>
  )
}

export default Routescom