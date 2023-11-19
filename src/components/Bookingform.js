import React from 'react'
import { Form, Col, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.module.css";


const initialFormData = Object.freeze({
    username: "",
    email: "",
    mobile: "",
    message: "",
    date: "",
    service:"",
    address:""
  });

export const Bookingform = (props) =>  {

    const [formData, updateFormData] = React.useState(initialFormData);
  

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an Error.', err))
    }

    const handleChange = (e) => {
        updateFormData({
          ...formData,

          [e.target.name]: e.target.value.trim()
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thank you for your message. Your message has been forwarded.`);
        const templateId = 'template_tx1n6iu';
        const serviceID = "service_czswxgc";
        sendFeedback(serviceID, templateId, { from_name: formData.name, mobile: formData.mobile, 
            message_html: formData.message, email: formData.email, date: formData.date, 
            service: formData.service, address: formData.address })

        console.log(formData);
      };

  return (
    <div className='container-section'>


        <Container>
    
        <Form>
            <br/>
            <br/>
            <br/>
            
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name*</Form.Label>
                <Form.Control onChange= {handleChange} name="name" type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control onChange= {handleChange} name="email" type="email" placeholder="Enter email"
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label>Mobile no.*</Form.Label>
                <Form.Control onChange= {handleChange} name="mobile" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} id="formGridDate">
                <Form.Label>Date Required*</Form.Label><br/>
                <Form.Control type='date' onChange= {handleChange} name="date" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridService">
                <Form.Label>Service Required:*</Form.Label>
                <Form.Select onChange= {handleChange} name="service">
                    <option>Choose...</option>
                    <option value="Bouncy Castle"   >Bouncy Castle Hire</option>
                    <option value="Soft Play Hire" >Soft Play Hire</option>
                    <option value="Other Party Hire" >Other Party Hire</option>
                </Form.Select>
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>Event Address*</Form.Label>
                <Form.Control onChange= {handleChange} name="address" type="address" />
            </Form.Group>

            <Form.Group as={Col} id="formGridMessage">
                <Form.Label>Booking Details*</Form.Label>
                <Form.Control onChange= {handleChange} name="message" as="textarea" rows={3} />
            </Form.Group>
            <br/>
            <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
                </Button>
        </Form >
        <br/>
        <br/>
        <br/>
        <br/>
        </Container>
    </div>
  )
}

export default Bookingform