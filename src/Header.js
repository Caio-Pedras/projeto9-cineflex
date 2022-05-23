import { Link, useNavigate } from "react-router-dom";
import BackButton from "./assets/img/BackButton.png";
import React from "react"
import styled from 'styled-components';
export default function Header ({displayButton}) {
    const navigate = useNavigate()
    return (
        <>
        <HeaderWrap>
            <Link to={'/'}>
            <h1>CINEFLEX</h1>
            </Link>
        </HeaderWrap>
            <Content display={displayButton? ('inherit'): ('none')} onClick={()=>navigate(-1)}>
            <img src={BackButton} alt="Botão de retorno"/>
            </Content>
        </>
    )
}
const HeaderWrap = styled.div`
width: 100%;
background-color: #C3CFD9;
color: #E8833A;
text-align: center;
font-family: 'Roboto', sans-serif;
font-size: 44px;
padding: 20px 0;
font-weight: 400;
position: fixed;
top: 0;
left: 0;
height: 80px;
z-index: 1;
` 
const Content = styled.div`
position: fixed;
top:16px;
left: 10px;
z-index:1;
display: ${props=>props.display} ;
img {
    width: 50px;
}
`
