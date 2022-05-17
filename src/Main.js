import React from "react"
import axios from "axios";
import react from "react";
import { useEffect } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies';

export default function Main ({setIdFilme}) {
    const [API_MOVIES, setAPI_MOVIES] = React.useState('')
    React.useEffect(()=>{axios.get(URL).then((response)=>setAPI_MOVIES(response.data))},[])
    if (API_MOVIES==="") return<div className="loading"></div>
    return (
        <>
        <h2>Selecione o filme</h2>
        <div className="movieList">
            {API_MOVIES.map(({title, posterURL, id})=>
                <Link to={`/filme/${id}`} key={id}>
                <div className="movie" onClick={()=>setIdFilme(id)}>
                    <img  src={posterURL} alt={title} />
                </div>
                </Link>
            )}
        </div>
        </>
    )
}