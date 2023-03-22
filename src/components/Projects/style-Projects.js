import styled from "styled-components"
import { Nav } from "react-bootstrap";

export const ProjectSection = styled.div`
    padding: 80px 0;
    position: relative;
    background-color: black;
`

export const ProjectTitle = styled.h2`
    font-size: 45px;
    font-weight: 700;
    text-align: center;
`

export const ProjectDesc = styled.p`
    color: #B8B8B8;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    margin: 14px auto 30px auto;
    text-align: center;
    width: 56%;
`

export const ProjectCardImg = styled.div`
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 24px;
    &::before {
        content: "";
        background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
        opacity: 0.85;
        position: absolute;
        width: 100%;
        height: 0;
        transition: 0.4s ease-in-out;
    };
    &:hover::before {
        height: 100%;
    };
    &:hover > div {
        top: 50%;
        opacity: 1;
    }
`

export const ProjectCardDiv = styled.div`
    position: absolute;
    text-align: center;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s ease-in-out;
    opacity: 0;
    width: 100%;
`
export const ProjectCardTitle = styled.h4`
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 1.1em;
`

export const ProjectCardSpan = styled.span`
    font-style: italic;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.8px;
`

export const ProjectImage = styled.img`
    top: 20%;
    position: absolute;
    bottom: 0;
    width: 35%;
    right: 0;
    z-index: -4;
`