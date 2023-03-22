import styled from "styled-components"

export const FooterSection = styled.footer`
    padding: 0 0 50px 0;
    background-image: url('../../assets/img/footer-bg.png');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`

export const Emailbox = styled.div`
    background: #FFFFFF;
    border-radius: 55px;
    color: #121212;
    padding: 85px 125px;
    margin-bottom: 80px;
    margin-top: -120px;
`

export const EmailBoxTitle = styled.h3`
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 1.2em;
`

export const NewEmailBox = styled.div`
    background: #fff;
    padding: 5px;
    border-radius: 20px;
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    &::before {
        content: "";
        background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
        border-radius: 20px;
        position: absolute;
        z-index: -1;
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
    };
    &::after {
        content: "";
        background: #fff;
        border-radius: 20px;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`
export const Input = styled.input`
    width: 100%;
    color: #121212;
    font-weight: 500;
    background: transparent;
    border: 0;
    padding: 0 15px;
`

export const Btn = styled.button`
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
    padding: 20px 65px;
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.5px;
    border-radius: 18px;
`

export const FooterImg = styled.img`
    width: 26%;
`
export const FooterPara = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #B8B8B8;
    letter-spacing: 0.5px;
    margin-top: 20px;
`

export const Icons = styled.div`
    display: inline-block;
    margin-left: 14px;
`

export const IconAnchor = styled.a`
    width: 42px;
    height: 42px;
    background: rgba(217, 217, 217, 0.1);
    display: inline-flex;
    border-radius: 50%;
    margin-right: 6px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);
    &::before {
        content: "";
        width: 42px;
        height: 42px;
        position: absolute;
        background-color: #ffffff;
        border-radius: 50%;
        transform: scale(0);
        transition: 0.3s ease-in-out;
    };
    &:hover::before {
        transform: scale(1);
    };
    &:hover img {
        filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);
    }
`
export const IconImg = styled.img`
    width: 40%;
    z-index: 1;
    transition: 0.3s ease-in-out;
`