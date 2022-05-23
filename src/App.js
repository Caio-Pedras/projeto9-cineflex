import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Header from "./Header.js"
import Main from "./Main.js"
import MovieInfo from "./MovieInfo.js"
import Session from "./Session.js";
import SuccessfulBuy from "./SuccessfulBuy.js";
import "./assets/css/reset.css";
import "./assets/css/styles.css";


export default function App(){
    const [cartItens, setCartItens] = React.useState('')
    const [movie, setMovie] = React.useState('')
    const [displayButton, setDisplayButton] = React.useState(false)

    return (
        <BrowserRouter>
            <Header displayButton={displayButton}/>
            
            <Routes>
                <Route path="/" element={<Main setDisplayButton={setDisplayButton}/>} />
                <Route path="/filme/:idMovie" element={<MovieInfo setDisplayButton={setDisplayButton}/>}/>
                <Route path="/sessao/:idSession" element={<Session setCartItens={setCartItens} setMovie={setMovie} setDisplayButton={setDisplayButton} />}/>
                <Route path="/sucesso" element={<SuccessfulBuy cartItens={cartItens} movie={movie} setDisplayButton={setDisplayButton}/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}