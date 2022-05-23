import React from 'react'
import axios from "axios";
import { Link, useParams} from "react-router-dom";
import Footer from './Footer.js'
import styled from 'styled-components';


export default function MovieInfo ({setDisplayButton}) {
    const {idMovie} = useParams();
    setDisplayButton(true)
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`;
    const [API_MOVIE, setAPI_MOVIE] = React.useState('')
    React.useEffect(()=>{axios.get(URL)
        .then((response)=>setAPI_MOVIE(response.data))
        .catch(()=>alert('esse filme não existe, escolha outro'))
    },[])
    if (API_MOVIE==="") return(
        <Container> 
            <Loading></Loading>
        </Container> )
    return(
        <Container> 
        <h2 >Selecione o horário</h2>

        {API_MOVIE.days.map(({weekday,date},i)=>
            <MovieDay key={i}>
                <Date>{weekday} - {date}</Date>
                <Times>
                    {API_MOVIE.days[i].showtimes.map(({name,id})=>
                    <Link to={`/sessao/${id}`} key={id}>
                    <MovieTime >
                        <p>{name}</p>
                    </MovieTime> 
                    </Link>   
                    )}  
                </Times>     
            </MovieDay>
        )}
        <Footer movieIMG={API_MOVIE.posterURL} movieTitle={API_MOVIE.title}/>
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
const MovieDay = styled.div`
font-size: 20px;
font-weight: 400;
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 30px;
`
const Date = styled.div`
margin-bottom: 10px;
` 
const Times = styled.div`
width: 100%;
display:flex;
`
const MovieTime = styled.div`
background-color: #E8833A;
color: #FFFFFF;
width: 80px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
border-radius: 5px;
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