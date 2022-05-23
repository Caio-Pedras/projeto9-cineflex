import React from "react"
import axios from "axios";
import react from "react";
import styled from 'styled-components';
import { useEffect } from "react/cjs/react.production.min";
import { Link} from "react-router-dom";
const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies';

export default function Main ({setDisplayButton}) {
    const [API_MOVIES, setAPI_MOVIES] = React.useState('')
    setDisplayButton(false)
    React.useEffect(()=>{axios.get(URL).then((response)=>setAPI_MOVIES(response.data))},[])
    if (API_MOVIES==="") return(
    <Container>
    <Loading></Loading>
    </Container>)
    return (
        <Container>  
            <h2>Selecione o filme</h2>
            <MovieList>
                {API_MOVIES.map(({title, posterURL, id})=>
                    <Link to={`/filme/${id}`} key={id}>
                        <Movie>
                            <img  src={posterURL} alt={title} />
                        </Movie>
                    </Link>
                )}
            </MovieList>
        </Container>
    )
}
const Container = styled.div`
margin-top: 80px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 80px;
padding: 0 20px;
h2{
    font-size: 26px;
    color: #293845;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
}
`
const MovieList = styled.div`
display: flex;
flex-wrap: wrap;
padding: 0 ;
column-gap: 30px;
align-items: center;
justify-content: center;
`
const Movie = styled.div`
background-color: #FFFFFF;
box-shadow: 0px 2px 4px 2px #0000001A;
border-radius: 10px;
width: 150px;
height: 230px;
position: relative;
margin-bottom: 20px;

img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 130px;
    height: 200px;
    border-radius: 10px;
}
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