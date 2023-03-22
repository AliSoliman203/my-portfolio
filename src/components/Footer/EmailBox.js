import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import {Emailbox, EmailBoxTitle, Input, NewEmailBox, Btn} from './style-Footer'

export const EmailBox = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearFields = () => {
        setEmail('');
    }

    return (
        <Col lg={12}>
            <Emailbox>
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <EmailBoxTitle>See My Projects At Once<br></br> & Leave Here Your E-mail Address...</EmailBoxTitle>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={12} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <NewEmailBox>
                                <Input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <Btn type="submit">Submit</Btn>
                            </NewEmailBox>
                        </form>
                    </Col>
                </Row>
            </Emailbox>
        </Col>
    )
}
