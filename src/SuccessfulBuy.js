import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
export default function SuccessfulBuy ({cartItens, movie}){
    return (
    <Container> 
        <h2>Pedido feito com sucesso!</h2>
        <Box>
            <h3>Filme e sessão</h3>
            <p>{movie.movieTitle}</p>
            <p>{movie.movieDay} {movie.movieTime} </p>
        </Box>
        <Box>
            <h3>Ingressos</h3>
            {cartItens.ids.map((info,i)=>
            <p key = {i}>Assento {info}</p>
        )}
        </Box>
        <Box>
            <h3>Comprador</h3>
            <p>{cartItens.name}</p>
            <p>{cartItens.cpf}</p>
        </Box>
        <Link to='/'>
        <Button><p>Voltar para a Home</p></Button> 
        </Link>  
    </Container>
    )
}
const Container = styled.div`
margin-top: 80px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 140px;
padding: 0 20px;
h2{
    font-size: 26px;
    color:#247A6B;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
    font-weight:700;
    width:200px;
}
`  
const Box = styled.div`
    margin-bottom:20px;
    width:100%;
    h3{
    font-size:24px;
    font-weight:700;
    margin-bottom:10px
    }
    p{
    font-size:22px;
    font-weight:400;
    margin-bottom:10px;
    }
    `
    const Button = styled.div`
    color:#FFFFFF;
    font-size: 18px;
    background-color: #E8833A;
    border-radius: 5px;
    height: 50px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;
    `
