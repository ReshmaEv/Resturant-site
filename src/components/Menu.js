import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Beeficon from "../images/steak_14376304.png";
import chickenicon from "../images/food_14973103.png";
import porkicon from "../images/kalua-pork.png";
import desserticon from "../images/desserts.png";
import seafoodicon from "../images/seafood.png";
import lambicon from "../images/mutton.png";
import allicon from "../images/tray.png";

function Menu() {
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showCategories, setShowCategories] = useState(true);
    const [showMeals, setShowMeals] = useState(false);
     const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
                setCategories(response.data.categories);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const fetchMealsByCategory = async (category) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            setMeals(response.data.meals);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            setShowCategories(false);
            setShowMeals(true);
        }
    };
    const fetchMealsBySearch = async (query) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`);
            setMeals(response.data.meals || []);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            setShowCategories(false);
            setShowMeals(true);
        }
    };
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery) {
            fetchMealsBySearch(searchQuery);
        }
    };

    const toggleCategories = () => {
        setShowCategories(!showCategories);
        setShowMeals(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
        <Container style={{ marginTop: "20px" }}>
            <div className='w-100 mt-4 mb-5 ' style={{ textAlign: "center", color: "blue" }}>
                <h1 className='sofia-regular fw-bold' style={{ fontSize: "50px" }}><i>special menu</i></h1>
                <div  className='w-100 mt-4 mb-5' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Form inline onSubmit={handleSearchSubmit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      </div>
            
            </div>

           

            <div style={buttonContainerStyle}>
          
                <Button onClick={toggleCategories} style={customButtonStyle}>
                    <div style={buttonContentStyle}>
                        <Image
                            src={allicon}
                            roundedCircle
                            style={{ width: '50px', height: '50px' }}
                        />
                        <div style={buttonTextStyle}>All</div>
                    </div>
                </Button>
                <Button onClick={() => fetchMealsByCategory('Beef')} style={customButtonStyle}>
                    <div style={buttonContentStyle}>
                        <Image
                            src={Beeficon}
                            roundedCircle
                            style={{ width: '50px', height: '50px' }}
                        />
                        <div style={buttonTextStyle}>Beef</div>
                    </div>
                </Button>
                <Button onClick={() => fetchMealsByCategory('Chicken')} style={customButtonStyle}>
                    <div style={buttonContentStyle}>
                        <Image
                            src={chickenicon}
                            alt="Chicken"
                            roundedCircle
                            style={{ width: '50px', height: '50px' }}
                        />
                        <div style={buttonTextStyle}>Chicken</div>
                    </div>
                </Button>
                <Button onClick={() => fetchMealsByCategory('Pork')} style={customButtonStyle}>
                    <div style={buttonContentStyle}>
                        <Image
                            src={porkicon}
                            alt="Pork"
                            roundedCircle
                            style={{ width: '50px', height: '50px' }}
                        />
                        <div style={buttonTextStyle}>Pork</div>
                    </div>
                </Button>
                <Button onClick={() => fetchMealsByCategory('Vegetarian')} style={customButtonStyle}>
                    <div style={buttonContentStyle}>
                        <Image
                            src={chickenicon}
                            alt="Vegetarian"
                            roundedCircle
                            style={{ width: '50px', height: '50px' }}
                        />
                        <div style={buttonTextStyle}>Veg</div>
                    </div>
                </Button>
                <Button onClick={() => fetchMealsByCategory('Seafood')} style={customButtonStyle}>
                    <div style={buttonContentStyle}>
                        <Image
                            src={seafoodicon}
                            alt="Seafood"
                            roundedCircle
                            style={{ width: '50px', height: '50px' }}
                        />
                        <div style={buttonTextStyle}>Seafood</div>
                    </div>
                </Button>
                <Button onClick={() => fetchMealsByCategory('Lamb')} style={customButtonStyle}>
                    <div style={buttonContentStyle}>
                        <Image
                            src={lambicon}
                            alt="Lamb"
                            roundedCircle
                            style={{ width: '50px', height: '50px' }}
                        />
                        <div style={buttonTextStyle}>Lamb</div>
                    </div>
                </Button>
                <Button onClick={() => fetchMealsByCategory('Dessert')} style={customButtonStyle}>
                    <div style={buttonContentStyle}>
                        <Image
                            src={desserticon}
                            alt="Dessert"
                            roundedCircle
                            style={{ width: '50px', height: '50px' }}
                        />
                        <div style={buttonTextStyle}>Dessert</div>
                    </div>
                </Button>
            </div>
            {showCategories && (
                <Row>
                    {categories.map((category) => (
                        <Col key={category.idCategory} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                            <Card style={customCardStyle}>
                                <Row noGutters>
                                    <Col md={4}>
                                        <Card.Img src={category.strCategoryThumb} style={cardImageStyle} className="rounded-circle" />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <Card.Title style={cardTitleStyle}>...............{category.strCategory}</Card.Title>
                                            <Button variant="primary" size="sm">Add</Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
            {showMeals && (
                <Row>
                    {meals.map((meal) => (
                        <Col key={meal.idMeal} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                            <Card style={customCardStyle}>
                                <Row noGutters>
                                    <Col md={4}>
                                        <Card.Img src={meal.strMealThumb} style={cardImageStyle} className="rounded-circle" />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <Card.Title style={cardTitleStyle}>......{meal.strMeal}</Card.Title>
                                            <Button variant="primary" size="sm">Add</Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
        <div className="footer-section  d-flex justify-content-around flex-wrap p-5 mt-5 ">
          <div className='footer-column ps-5'>
            <h5>CONTACT</h5>
            <div className='pt-3'>
              <h6>1247/Plot No. 39, 15th Phase,</h6>
              <h6>Colony, Kkatpally, Hyderabad</h6>
            </div >
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
            <h5 >OUR LINKS</h5>
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

const customButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s'
};

const buttonContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
};

const buttonTextStyle = {
    color: 'black',
    marginTop: '5px'
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px'
};

const customCardStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
};

const cardImageStyle = {
    width: '100%',
    height: 'auto'
};

const cardTitleStyle = {
    fontSize: '14px' // Slightly smaller text size
};

// Adding hover effects using CSS-in-JS
const styles = document.createElement('style');
styles.innerHTML = `
    .btn:hover {
        transform: scale(1.1);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
`;
document.head.appendChild(styles);

export default Menu;
