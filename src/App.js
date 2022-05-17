import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Header from "./Header.js"
import Main from "./Main.js"
import MovieInfo from "./MovieInfo.js"
import Session from "./Session.js";
import "./assets/css/reset.css";
import "./assets/css/styles.css";


export default function App(){
    const [idFilme, setIdFilme] = React.useState('')
    const [idSession, setIdSession] = React.useState('')
    return (
        <BrowserRouter>
            <Header/>
            <div className="container">
            <Routes>
                <Route path="/" element={<Main setIdFilme={setIdFilme}/>}/>
                <Route path={`/filme/${idFilme}`} element={<MovieInfo idFilme={idFilme} setIdSession={setIdSession}/>}/>
                <Route path={`/sessao/${idSession}`} element={<Session idSession={idSession}/>}/>
                {/* <Route path="/sucesso" element={}/> */}
            </Routes>
            </div>
        </BrowserRouter>
    )
}