import { Col } from "react-bootstrap";
import { ProjectCardDiv, ProjectCardImg, ProjectCardSpan, ProjectCardTitle } from './style-Projects'

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <ProjectCardImg>
                <img src={imgUrl} />
                <ProjectCardDiv>
                    <ProjectCardTitle>{title}</ProjectCardTitle>
                    <ProjectCardSpan>{description}</ProjectCardSpan>
                </ProjectCardDiv>
            </ProjectCardImg>
        </Col>
    )
}