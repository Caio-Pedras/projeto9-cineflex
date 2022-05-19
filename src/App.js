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
    const [cartItens, setCartItens] = React.useState({
    })
    return (
        <BrowserRouter>
            <Header cartItens={cartItens}/>
            
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/filme/:idMovie" element={<MovieInfo />}/>
                <Route path="/sessao/:idSession" element={<Session cartItens={cartItens} setCartItens={setCartItens}/>}/>
                <Route path="/sucesso" element={<SuccessfulBuy cartItens={cartItens}/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}