import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css'; // Import the custom CSS file

function Contact() {
  const data = [
    {
      id: 1,
      image: "https://img.icons8.com/color/96/000000/marker.png", // Larger location icon image
      title: "Location",
      description: "6952 Shelley St",
      content: "Melbourne"
    },
    {
      id: 2,
      image: "https://img.icons8.com/color/96/000000/phone.png", // Larger phone icon image
      title: "Phone Number",
      description: "+(800) 800-900-100",
      content: "+222 33 567 8665"
    },
    {
      id: 3,
      image: "https://img.icons8.com/color/96/000000/email.png", // Larger email icon image
      title: "Email Address",
      description: "reshmaedassery@gmail.com",
      content: "reshmavineesh@gmail.com"
    },
    {
      id: 4,
      image: "https://img.icons8.com/color/96/000000/clock.png", // Larger clock icon image
      title: "Open & Closing",
      description: "Mon-Fri: 09:00am",
      content: "to 07.00pm"
    }
  ];

  return (
    <div>
      <div 
        className="w-100 vh-100 d-flex align-items-center justify-content-center position-relative" 
        style={{
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=996&t=st=1717051694~exp=1717052294~hmac=9790443474452a9ab446e5b06966ccb2b4902647d53e51c75bf9d0c24be01dad')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '50vh',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '0',
            filter: 'brightness(40%)' // Dim the background image
          }}
        ></div>
        <h1 className="position-absolute top-10 start-50 translate-middle text-center text-white sofia-regular " style={{ zIndex: '2' ,padding:"150px",fontSize:"70px"}}>Contact Us</h1>
      </div> 

      <Container>
        <div className="d-flex gap-5" style={{ marginTop: '-250px', zIndex: '2' }}>
          {data.map((p) => (
            <Card key={p.id} style={{ width: '18rem', textAlign: 'center' }}>
              <Card.Img variant="top" src={p.image} style={{ height: '96px', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>{p.description}</Card.Text>
                <Card.Text>{p.content}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div style={{backgroundColor:'lightgray',height:"500px"}}>
          <Container className="text-center my-5">
            <h3 className="mb-5 p-5">Reservation</h3>
            <Form>
              <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridName" className='p-3'>
                  <Form.Control className="border-bottom-only " type="text" placeholder="Enter your Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail" className='p-3'>
                  <Form.Control className="border-bottom-only" type="email" placeholder="Enter your Email" />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridNumber" className='p-3'>
                  <Form.Control className="border-bottom-only" type="number" placeholder="Enter your Number" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridMembers" className='p-3'>
                  <Form.Control className="border-bottom-only" type="text" placeholder="Enter the Number of Members" />
                </Form.Group>
              </Row>
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
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

export default Contact;
