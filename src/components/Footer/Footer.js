import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import { FooterImg, FooterSection, FooterPara, Icons, IconAnchor, IconImg } from './style-Footer'
export const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <FooterImg src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <Icons>
                            <IconAnchor href="http://linkedin.com/in/ali-soliman-ba41a9261" target='_blank'><IconImg src={navIcon1} alt="Icon" /></IconAnchor>
                            <IconAnchor href="#"><IconImg src={navIcon2} alt="Icon" /></IconAnchor>
                            <IconAnchor href="#"><IconImg src={navIcon3} alt="Icon" /></IconAnchor>
                        </Icons>
                        <FooterPara>Copyright &copy;. All Rights Reserved By Ali Soliman</FooterPara>
                    </Col>
                </Row>
            </Container>
        </FooterSection>
    )
}