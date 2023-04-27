import React from 'react';

import Footersection from './Footersection';

const ServicesPage = () => {
  return (
    <>
        <div class="services_section layout_padding">
         <div class="container">
            <h1 class="services_taital">our services</h1>
            <p class="many_taital">There are many variations of passages of Lorem Ipsum </p>
            <div class="services_section2 layout_padding">
               <div class="row">
                  <div class="col-lg-3 col-sm-6">
                     <div class="icon_1"><img src="images/icon-1.png" /></div>
                     <h2 class="furnitures_text">Furnitures</h2>
                     <p class="dummy_text">There are many variations of passages of Lorem Ipsum available, but the</p>
                     <div class="read_bt_main">
                        <div class="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="icon_1"><img src="images/icon-2.png"/></div>
                     <h2 class="furnitures_text">office</h2>
                     <p class="dummy_text">There are many variations of passages of Lorem Ipsum available, but the</p>
                     <div class="read_bt_main">
                        <div class="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="icon_1"><img src="images/icon-3.png"/></div>
                     <h2 class="furnitures_text">Home</h2>
                     <p class="dummy_text">There are many variations of passages of Lorem Ipsum available, but the</p>
                     <div class="read_bt_main">
                        <div class="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="icon_1"><img src="images/icon-4.png" /></div>
                     <h2 class="furnitures_text">badroom</h2>
                     <p class="dummy_text">There are many variations of passages of Lorem Ipsum available, but the</p>
                     <div class="read_bt_main">
                        <div class="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        
    </>
  )
}

export default ServicesPage