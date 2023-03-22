import { useState,  } from "react";
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ContactImg, ContactSection, ContactTitle, ContactBtn, Input, Textarea, Span } from './style-Contact'

export const Contact = () => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    return (
        <ContactSection id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <ContactImg className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <ContactTitle>Get In Touch</ContactTitle>
                                <form>
                                    <Row>
                                        <Col size={12} sm={6} className="px-1">
                                            <Input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <Input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <Input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <Input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                        </Col>
                                        <Col size={12} className="px-1">
                                            <Textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></Textarea>
                                            <ContactBtn type="submit"><Span>Send</Span></ContactBtn>
                                        </Col>
                                    </Row>
                                </form>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </ContactSection>
    )
}