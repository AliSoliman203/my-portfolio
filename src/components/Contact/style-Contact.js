import styled from "styled-components"

export const ContactSection = styled.div`
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
    padding: 60px 0 200px 0;
`

export const ContactImg = styled.img`
    width: 92%;
`

export const ContactTitle = styled.h2`
    font-size: 45px;
    font-weight: 700;
    margin-bottom: 30px;
`

export const Input = styled.input`
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    color: #fff;
    margin: 0 0 8px 0;
    padding: 18px 26px;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.8px;
    transition: 0.3s ease-in-out;
    &:focus {
        background: rgba(255, 255, 255, 1);
        color: #121212;
    };
    &::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
    };
    &:focus::placeholder {
        color: #121212;
        opacity: 0.8;
    }
`
export const Textarea = styled.textarea`
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    color: #fff;
    margin: 0 0 8px 0;
    padding: 18px 26px;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.8px;
    transition: 0.3s ease-in-out;
    &:focus {
        background: rgba(255, 255, 255, 1);
        color: #121212;
    };
    &::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
    };
    &:focus::placeholder {
        color: #121212;
        opacity: 0.8;
    }
`

export const ContactBtn = styled.button`
    font-weight: 700;
    color: #000;
    background-color: #fff;
    padding: 14px 48px;
    font-size: 18px;
    margin-top: 25px;
    border-radius: 0;
    position: relative;
    transition: 0.3s ease-in-out;
    &:hover {
        color: #fff;
    };
    &::before {
        content: "";
        background: #121212;
        width: 0;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        transition: 0.3s ease-in-out;
    };
    &:hover::before {
        width: 100%;
    }
`

export const Span = styled.span`
    z-index: 1;
    position: relative;
`