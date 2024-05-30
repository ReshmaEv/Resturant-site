import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

function Blogs() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
        setCategories(response.data.categories);
        console.log(response.data.categories);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleShowModal = (category) => {
    setModalContent({ title: category.strCategory, description: category.strCategoryDescription });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div style={{
          position: 'relative',
          width: '100%',
          height: '50vh',
          overflow: 'hidden'
        }}>
          <div style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=996&t=st=1717051694~exp=1717052294~hmac=9790443474452a9ab446e5b06966ccb2b4902647d53e51c75bf9d0c24be01dad')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '0',
            filter: 'brightness(40%)'
          }}>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100" style={{ position: 'relative', zIndex: '1' }}>
            <h4 className="text-center text-white sofia-regular" style={{ fontSize: '50px' }}>
              Uncovering Taste of Tradition &
            </h4>
            <h4 className="text-center text-white sofia-regular" style={{ fontSize: '40px' }}>
              Celebrating Timeless Recipes
            </h4>
          </div>
        </div>
      <Container>
        <Row>
          {categories.map((category) => (
            <Col key={category.idCategory} xs={12} sm={6} md={4} lg={3} className="mb-4 mt-5">
              <Card>
                <Card.Img variant="top" src={category.strCategoryThumb} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{category.strCategory}</Card.Title>
                  <Card.Text style={{ height: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {category.strCategoryDescription}
                  </Card.Text>
                  <Button variant="primary" size="sm" onClick={() => handleShowModal(category)}>Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Blogs;
