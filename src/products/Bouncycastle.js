import { collection, getDocs } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { db } from '../FirebaseConfig';
import Navigationbar from "../components/Navigationbar"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import '../App.css';
import Footers from '../components/Footers';



function Bouncycastle() {
    const [products, setProducts] = useState([]);
    

    useEffect (() => {
        const fetchProducts = async () => {
            try {
              const querySnapshot = await getDocs(collection(db, 'products'));
              const fetchedProducts = [];
              querySnapshot.forEach((doc) => {
                fetchedProducts.push({ id: doc.id, ...doc.data() });
              });
              const sortedProducts = fetchedProducts.sort((a, b) =>
              a.name.localeCompare(b.name));
              setProducts(sortedProducts);
            } catch (error) {
              console.log('Error fetching products:', error);
            }
          };
      
          fetchProducts();
        }, []);

  return (
    <div className='main-container'>
        <div>
            <Navigationbar />
        </div>
        <div>
            <h1 className='content-headline heading-content'>Bouncy Castle</h1>
        </div>
        <div className='content-section container'>
            <br />
            <h5>We offer a range of exciting bouncy castle option packages to make your event a memorable one. Our dedicated team takes care of the entire process, 
              from delivery and setup to pick up. 
              <h5>
            Delivery Option:<br />
            <ul>
                <li>For those residing <b>in New Plymouth</b>, we are delighted to offer <b>free delivery</b>, ensuring that your bouncy castle arrives with <b>no additional cost</b>.</li>
                <li>If you reside <b>outside New Plymouth, a delivery fee will apply</b>. Please contact us for more information on the delivery fee and availability in your area.</li>
                
            </ul>
            Get ready for non-stop laughter, joy, and bouncing excitement with AG Castles & Party Hire. Book your bouncy castle today and let the fun begin!
            </h5></h5>
            <br />
        </div>
        <Container>
         <Row>
                     {products.map((product) => (
                        <Col xs={12} sm={6} md={4} lg={4}>
                                <div key={product.id}>
                                    <Card>
                                        <Card.Img variant="top" src={product.image} className='image' />
                                        <Card.Body>
                                        <Card.Title><h6 className=''><b>{product.name}</b></h6></Card.Title>
                                        <Card.Text>
                                        <div className='content-section'>                       
                                        <h6><b>Price:</b> {product.price} </h6>
                                        <h6><b>Size:</b> {product.size}</h6>
                                        <h6><b>Area Required:</b> {product.area}</h6>
                                        <h6><b>Suitable Age:</b> {product.age}</h6>
                                        <h6><b>Maximum User:</b> {product.maxUser}</h6>
                                        <h6>Delivery Option : We deliver, set up & Pick up (Free delivery within New Plymouth)
                                        ***Delivery fee applies outside New Plymouth area, subject to staff availability</h6>
                                        </div>
                                        </Card.Text>                                    
                                        </Card.Body>
                                    </Card>    
                                </div>
                                </Col>
                              ))}    
                </Row>
            </Container>
        <Footers />
    </div>
    
  );
}

export default Bouncycastle