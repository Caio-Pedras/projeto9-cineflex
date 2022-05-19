import React from 'react'
import InfoBox from './InfoBox'
import styled from 'styled-components';
export default function SuccessfulBuy ({cartItens}){

    return (
    <Container> 
        <h2>Pedido feito com sucesso!</h2>
        <InfoBox title='Ingresos' infoArray= {cartItens.ids}/>
        <InfoBox title='Comprador' infoArray={[cartItens.name, cartItens.cpf]}/>
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
    color: #293845;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
}
`   