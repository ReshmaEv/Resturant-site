import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <div
      className="position-relative w-100 vh-100"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=996&t=st=1717051694~exp=1717052294~hmac=9790443474452a9ab446e5b06966ccb2b4902647d53e51c75bf9d0c24be01dad')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
      }}
    >
      <Container className="position-relative h-100">
        <Row className="h-100 align-items-center">
          <Col className="d-flex justify-content-end">
            <div style={{ maxWidth: '400px', marginTop: '50px', color: 'rgb(204, 192, 17)' }}>
              <h3 className="fw-bold  sofia-regular" style={{color:"white",fontSize:"50px"}}>About</h3> {/* Set font color to black */}
              <p className="fw-bold  sofia-regular "style={{color:"white",fontSize:"30px"}}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-section d-flex justify-content-around flex-wrap p-5 mt-5">
          <div className='footer-column ps-5'>
            <h5>CONTACT</h5>
            <div className='pt-3'>
              <h6>1247/Plot No. 39, 15th Phase,</h6>
              <h6>Colony, Kkatpally, Hyderabad</h6>
            </div>
            <div className='pt-3'>
              <h6>+91 987-654-3210</h6>
              <h6>+91 123-456-7890</h6>
            </div>
            <div className='pt-3'>
              <h6>info@example.com</h6>
              <h6>info@example.com</h6>
            </div>
          </div>
          <div className='footer-column'>
            <h5>OUR LINKS</h5>
            <h6 className='pt-3'>Home</h6>
            <h6 className='pt-3'>About Us</h6>
            <h6 className='pt-3'>Services</h6>
            <h6 className='pt-3'>Team</h6>
            <h6 className='pt-3'>Blog</h6>
          </div>
          <div className='footer-column'>
            <h5>OUR SERVICES</h5>
            <h6 className='pt-3'>Strategy & Research</h6>
            <h6 className='pt-3'>Seat Reservation</h6>
            <h6 className='pt-3'>Pickup In Store</h6>
            <h6 className='pt-3'>Our Menu</h6>
          </div>
          <div className='footer-column'>
            <h5>HELP CENTER</h5>
            <h6 className='pt-3'>FAQ</h6>
            <h6 className='pt-3'>Shop</h6>
            <h6 className='pt-3'>Category Filter</h6>
            <h6 className='pt-3'>Testimonials</h6>
            <h6 className='pt-3'>Contact Us</h6>
          </div>
        </div>
      
    </div>
  );
}

export default About;
