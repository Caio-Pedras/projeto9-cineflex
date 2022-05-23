import React from 'react';
import styled from 'styled-components';
export default function BuyInput ({id, index, setBuyers, buyers}){
    const [buyer, setBuyer] = React.useState({idAssento:id,
})

    React.useEffect (()=>{
        const updateBuyers = [...buyers]
        updateBuyers[index] = buyer
        setBuyers(updateBuyers)
        }, [buyer])
    return (
        <InfoInput>
                <p>Nome do comprador:</p>
                <input type="text" placeholder={`Digite seu nome...`} onChange={(e)=>setBuyer(
                {...buyer,
                nome: e.target.value})}/>
                <p>CPF do comprador:</p>
                <input type="text" placeholder={`CPF do comprador...`} onChange={(e)=>setBuyer(
                {...buyer,
                cpf: e.target.value
                })}/>
        </InfoInput>
    )
}
const InfoInput = styled.div`
margin-bottom: 20px;
 p {
    margin-bottom: 10px;
}
input {
    margin-bottom:10px;
}
`
