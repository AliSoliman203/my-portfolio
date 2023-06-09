import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"
import { Col, Container, Row } from "react-bootstrap";
import { SkillsSection, SkillBox, SkillTitle, SkillDesc, CarouselSkill, SkillImg, SkillsImage } from './style-Skills'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
    <SkillsSection id="skills">
        <Container>
            <Row>
                <Col>
                    <SkillBox>
                        <SkillTitle>Skills</SkillTitle>
                        <SkillDesc>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</SkillDesc>
                        <CarouselSkill autoPlay={true} responsive={responsive} infinite={true} >
                            <div className="item">
                                <SkillImg src={meter1} alt="Image" />
                                <h5>FrontEnd Development</h5>
                            </div>
                            <div className="item">
                                <SkillImg src={meter2} alt="Image" />
                                <h5>Data Science</h5>
                            </div>
                            <div className="item">
                                <SkillImg src={meter3} alt="Image" />
                                <h5>Odoo Development</h5>
                            </div>
                            <div className="item">
                                <SkillImg src={meter1} alt="Image" />
                                <h5>Backend Development</h5>
                            </div>
                        </CarouselSkill>
                    </SkillBox>
                </Col>
            </Row>
        </Container>
        <SkillsImage src={colorSharp} alt="Image" />
    </SkillsSection>
    )
}
