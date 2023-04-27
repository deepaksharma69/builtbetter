import React from 'react'

const Footersection = () => {
  return (
    <>
    <div className="footer_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        <div className="fooer_logo">
          <img src="images/footer-logo.png" />
        </div>
        <p className="footer_lorem_text">
          There are many variat ions of passages of L orem Ipsum available , but
          the majority h ave suffered altera tion in some form, by
        </p>
      </div>
      <div className="col-lg-3 col-sm-6">
        <h1 className="customer_text">LET US HELP YOU</h1>
        <p className="footer_lorem_text">
          There are many variat ions of passages of L orem Ipsum available , but
          the majority h ave suffered altera tion in some form, by
        </p>
      </div>
      <div className="col-lg-3 col-sm-6">
        <h1 className="customer_text">INFORMATION</h1>
        <p className="footer_lorem_text1">
          About Us
          <br />
          Careers
          <br />
          Sell on shopee
          <br />
          Press &amp; News
          <br />
          Competitions
          <br />
          Terms &amp; Conditions
        </p>
      </div>
      <div className="col-lg-3 col-sm-6">
        <h1 className="customer_text">OUR Design</h1>
        <p className="footer_lorem_text">
          There are many variat ions of passages of L orem Ipsum available , but
          the majority h ave suffered altera tion in some form, by
        </p>
      </div>
    </div>
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your email"
        aria-label="Enter your email"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <span className="input-group-text" id="basic-addon2">
          <a href="#">Subscribe</a>
        </span>
      </div>
    </div>
  </div>
</div>



    
    </>
  )
}

export default Footersection