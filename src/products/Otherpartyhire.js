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

function Otherpartyhire() {
    const [otherProducts, setOtherProducts] = useState([]);
    

    useEffect (() => {
        const fetchOtherProducts = async () => {
            try {
              const querySnapshot = await getDocs(collection(db, 'otherProducts'));
              const fetchedOtherProducts = [];
              querySnapshot.forEach((doc) => {
                fetchedOtherProducts.push({ id: doc.id, ...doc.data() });
              });
              const sortedOtherProducts = fetchedOtherProducts.sort((a, b) =>
              a.name.localeCompare(b.name));
              setOtherProducts(sortedOtherProducts);
            } catch (error) {
              console.log('Error fetching products:', error);
            }
          };
      
          fetchOtherProducts();
        }, []);

  return (
    <div className='main-container'>
        <div>
            <Navigationbar />
        </div>
        <div>
            <h1 className='content-headline heading-content'>Other Party Hire</h1>
        </div>
        <div className='content-section container'>
            <br />
            <h5>We are pleased to offer a variety of party hire options for your convenience. Please note that the following items are available for <h4><b>pick-up only. </b></h4> 
            Our dedicated team will ensure that these items are ready for your collection at your selected time. Whether you need tables, chairs, decorations, or other party essentials, 
            we have you covered. Contact us today to secure your reservation and make your upcoming event a success!</h5>
            <br />
        </div>
        <Container>
         <Row>
                     {otherProducts.map((otherProduct) => (
                        <Col xs={12} sm={6} md={4} lg={4}>
                                <div key={otherProduct.id}>
                                    <Card>
                                        <Card.Img variant="top" src={otherProduct.image} className='image' />
                                        <Card.Body>
                                        <Card.Title><h6 className=''><b>{otherProduct.name}</b></h6></Card.Title>
                                        <Card.Text>
                                          <h6>{otherProduct.moreInfo}</h6>  
                                          <h6><b>Price: </b>{otherProduct.price}</h6>
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
  )
}

export default Otherpartyhire