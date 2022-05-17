import React from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import BuyInput from "./BuyInput";
export default function Session ({idSession}) {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`;
    const [API_SEAT, setAPI_SEAT] = React.useState('')
    React.useEffect(()=>{axios.get(URL).then((response)=>setAPI_SEAT(response.data))},[])
    if (API_SEAT==="") return<div className="loading"></div>
    return (
        <>
        <h2 onClick={()=>console.log(API_SEAT)}>Selecione o(s) assento(s)</h2>
        <div className="seats">
                {API_SEAT.seats.map(({name, isAvailable})=>
                 <div className={`circle ${(isAvailable)? (''):('yellow')}`}>
                    <p>{name}</p>
                 </div>
                )}
        </div>
        <div className="captions">
            <div className="caption">
                <div className="circle green"></div>
                <p>Selecionado</p>
            </div>
            <div className="caption">
                <div className="circle"></div>
                <p>Disponível</p>
            </div> 
            <div className="caption">
                <div className="circle yellow"></div>
                <p>Indisponível</p>
            </div>  
        </div>
        <div className="buyInfo">
            <BuyInput inputName='Nome do comprador' placeholder='Digite seu nome' inputClass=''/>
            <BuyInput inputName='CPF do comprador' placeholder='Digite seu CPF' inputClass=''/>
        </div>
        <div className="buySeat"><p>Reservar assento(s)</p></div>

        </>
    )
}