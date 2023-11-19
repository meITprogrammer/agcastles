import React from 'react'
import AGCastle from "../Images/agcastle.jpg"
import AGCastle2 from "../Images/agcastle2.jpg"
import AGCastle3 from "../Images/agcastle3.jpg"
import AGCastle4 from "../Images/option1.jpg"
import AGCastle5 from "../Images/option2.jpg"
import AGCastle6 from "../Images/option3.jpg"
import AGCastle7 from "../Images/option4.jpg"
import AGCastle8 from "../Images/option5.jpg"
import AGCastle9 from "../Images/option6.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About() {
  return (
    <div className='container-section'>
         <Container>
         <section class="content-section container">
         {/* <h2 class="section-header">ABOUT US</h2> */}
         <br />
         <br />
         <br />
         <br />
         <h3>We are your premier destination for safe
          and fun entertainment for kids! As a small, family-owned business, we
          understand the importance of creating unforgettable memories for your
          little ones. </h3>
         <p>
        At AG Castles and Kids Party Hire, we specialize in providing a wide
        range of high-quality inflatable castles, bounce houses, and party
        equipment that are guaranteed to bring joy and excitement to any event.
        Whether you're planning a birthday party, a school fair, or a community
        gathering, our extensive selection of entertaining options will cater to
        all your needs.
      </p>

      <p>
        What sets us apart is our utmost commitment to safety. We prioritize the
        well-being of your children by ensuring that all our inflatables are
        meticulously maintained, regularly inspected, and meet the highest
        industry standards for safety. Rest assured knowing that your little
        ones will be bouncing and sliding on secure and reliable structures.
      </p>
      <p>
        Our dedicated team of professionals is passionate about creating
        unforgettable experiences. From initial inquiry to the actual event, we
        strive to provide you with exceptional customer service. We will work
        closely with you to understand your unique requirements and help you
        select the perfect inflatables and party equipment to suit your specific
        theme or event.
      </p>
         </section>
      <Row>
        <Col>
        <img className='agcastle-image' src={AGCastle} alt="agcastles-bouncy" />  
        </Col>
        <Col>
        <img className='agcastle-image' src={AGCastle2} alt="agcastles-bouncy" />
        </Col>
        <Col>
        <img className='agcastle-image' src={AGCastle3} alt="agcastles-bouncy" />
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
        <img className='agcastle-image' src={AGCastle4} alt="agcastles-bouncy" />  
        </Col>
        <Col>
        <img className='agcastle-image' src={AGCastle5} alt="agcastles-bouncy" />
        </Col>
        <Col>
        <img className='agcastle-image' src={AGCastle6} alt="agcastles-bouncy" />
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
        <img className='agcastle-image' src={AGCastle7} alt="agcastles-bouncy" />  
        </Col>
        <Col>
        <img className='agcastle-image' src={AGCastle8} alt="agcastles-bouncy" />
        </Col>
        <Col>
        <img className='agcastle-image' src={AGCastle9} alt="agcastles-bouncy" />
        </Col>
      </Row>
    </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      {/* <p>
        As part of our comprehensive service, we offer hassle-free setup and
        takedown, saving you time and effort. Our skilled technicians will
        handle everything, allowing you to focus on enjoying the special
        occasion with your loved ones. Additionally, we ensure punctuality and
        reliability so that your event runs smoothly from start to finish. AG
        Castles and Party Hire is not just about supplying equipment; we aim to
        bring happiness and laughter to every child's face. We firmly believe
        that children's parties should be a time of pure joy and excitement for
        both kids and parents alike. With our top-notch entertainment options,
        you can be confident that your event will be a resounding success and a
        truly memorable occasion. Thank you for considering AG Castles and Party
        Hire to make your next event a remarkable experience. We look forward to
        the opportunity of serving you and making your child's special day an
        extraordinary one. Contact us today and let's start planning the perfect
        party!
      </p> */}
    

    </div>
  )
}

export default About