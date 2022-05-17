import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from './Footer.js'
export default function MovieInfo ({idFilme,setIdSession}) {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;
    const [API_MOVIE, setAPI_MOVIE] = React.useState('')
    React.useEffect(()=>{axios.get(URL).then((response)=>setAPI_MOVIE(response.data))},[])
    if (API_MOVIE==="") return<div className="loading"></div>
    console.log(API_MOVIE)
    return(
        <>
        <h2 >Selecione o horário</h2>

        {API_MOVIE.days.map(({weekday,date},i)=>
            <div className="movieDay" key={i}>
                <p className='date'>{weekday} - {date}</p>
                <div className="times">
                    {API_MOVIE.days[i].showtimes.map(({name,id})=>
                    <Link to={`/sessao/${id}`} key={id}>
                    <div className="movieTime" onClick={()=>setIdSession(id)} >
                        <p>{name}</p>
                    </div> 
                    </Link>   
                    )}  
                </div>     
            </div>
        )}
        <Footer movieIMG={API_MOVIE.posterURL} movieTitle={API_MOVIE.title}/>
        </>
)
} 
    

