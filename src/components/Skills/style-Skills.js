import styled from "styled-components"
import Carousel from 'react-multi-carousel';


export const SkillsSection = styled.div`
    padding: 0 0 50px 0;
    position: relative;
`

export const SkillBox = styled.div`
    background: #151515;
    border-radius: 64px;
    text-align: center;
    padding: 60px 50px;
    margin-top: -60px;
`

export const SkillTitle = styled.h2`
    font-size: 45px;
    font-weight: 700;
`
export const SkillDesc = styled.p`
    color: #B8B8B8;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    margin: 14px 0 75px 0;
`

export const CarouselSkill = styled(Carousel)`
    width: 80%;
    margin: 0 auto;
    position: relative;
`

export const SkillImg = styled.img`
    width: 50%;
    margin: 0 auto 15px auto;
`

export const SkillsImage = styled.img`
    top: 28%;
    position: absolute;
    bottom: 0;
    width: 40%;
    z-index: -4;
`