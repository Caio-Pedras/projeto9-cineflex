import React from "react"
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import BuyInput from "./BuyInput";
import Footer from "./Footer";
import Seat  from "./Seat";
import styled from 'styled-components';
export default function Session ({setCartItens, setMovie, setDisplayButton}) {
    setDisplayButton(true)
    const {idSession} = useParams()
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`;
    const postURL= 'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many';
    const [API_SEAT, setAPI_SEAT] = React.useState('')
    const [seatArray, setSeatArray] = React.useState([])
    const [buyers, setBuyers] = React.useState([])
    const navigate = useNavigate()
    
    function loadPage(response){
        setAPI_SEAT(response.data)
        setMovie({
            movieTitle:response.data.movie.title,
            movieTime:response.data.name,
            movieDay:response.data.day.date
        })
        setSeatArray([])
        setCartItens('')
    }
    function onlyNumbers(str) {
        return /^[0-9]+$/.test(str);
      }
    function buyTickets (){
        setCartItens(buyers)
        const postItens = {
            ids:seatArray,
            compradores: buyers,
        }
        let validatePost = true
        if (seatArray.length === 0) validatePost=false
        {buyers.map((obj,i)=>{
            if (Object.keys(obj).length !== 3 || obj.cpf.length !== 11){validatePost = false;}
            let check = onlyNumbers(obj.cpf)
            if (check === false) {validatePost= false}
            }
            )}
            if (validatePost === false){
                alert('preencha os dados corretamente')
            } else {
            axios.post(postURL, postItens).then(()=>navigate('/sucesso'))
        }
    }
    React.useEffect(()=>{axios.get(URL)
        .then((response)=>loadPage(response))
        .catch(()=>alert('essa sessão não existe, escolha outra'))
    },[])
    if (API_SEAT==="") return(
    <Container> 
        <Loading></Loading>
    </Container> 
    )
    return (
        <Container> 
        <h2>Selecione o(s) assento(s)</h2>
        <Seats>
                {API_SEAT.seats.map(({name, isAvailable, id})=>
                  <Seat name={name} id={id} seatArray={seatArray} setSeatArray={setSeatArray} buyers={buyers} setBuyers={setBuyers} isAvailable={isAvailable} key={id} />
                )}
        </Seats>
        <Captions>
            <Caption>
                <Circle color='#8DD7CF' border='1px solid #1AAE9E'></Circle>
                <p>Selecionado</p>
            </Caption>
            <Caption>
                <Circle></Circle>
                <p>Disponível</p>
            </Caption> 
            <Caption>
                <Circle color='#FBE192' border='1px solid #F7C52B'></Circle>
                <p>Indisponível</p>
            </Caption>  
        </Captions>
        
        {seatArray.map((id, index) =>
            <BuyInfo key={index}>
                <h3>Assento {id%50}</h3>
                <BuyInput id={id} index={index} setBuyers={setBuyers} buyers={buyers}/>
            </BuyInfo>
            )}
        
        
            <BuySeat onClick={buyTickets}><p>Reservar assento(s)</p></BuySeat>
      
        <Footer movieIMG={API_SEAT.movie.posterURL} movieTitle={API_SEAT.movie.title} movieTimeDay={`${API_SEAT.day.weekday} - ${API_SEAT.name}`} />
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
const Seats = styled.div`
display: flex;
flex-wrap: wrap;
width: 350px;
column-gap: 10px;
`   
const Captions = styled.div`
display: flex;
max-width: 500px;
margin-top: 10px;
color: #4E5A65;
margin-bottom: 40px;
`   
const Circle = styled.div`
border: ${props=>props.border? props.border : '1px solid #808F9D' };
background-color: ${props=>props.color? props.color:'#C3CFD9'};
border-radius: 50%;
width: 26px;
height: 26px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 20px;
color: #000000;
font-size: 15px;
font-weight: 400;
`
const Caption = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100px;
margin-right: 10px;
Circle{
    margin-bottom: 8px;
    margin-right: 0px;
}
`
const BuyInfo = styled.div`
font-size: 18px;
font-weight: 400;
width: 100%;
max-width: 500px;
input{
    width: 100%;
    height: 50px;
    border: 1px solid #D4D4D4;
    padding: 0 20px;
    font-size: 18px;
}
h3 {
    font-weight:700;
    margin-bottom:10px;
}
`
const BuySeat = styled.div`
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
const Loading = styled.div `
animation: is-rotating 1s infinite;
width: 100px;
height: 100px;
border: 10px solid gray;
border-top-color: #E8833A;
border-radius: 50%;
margin-top:35vh;
@keyframes is-rotating { 
  
    to {
        transform: rotate(1turn);
    }
}
`
