import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Main from './pages/Main';
import Login from './pages/Login/login';
import Administrar from './pages/Administrar/administrar';

function HtmlRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="https://lucielmacorretora.github.io/test.github.io/" element={<Main/>} />
                <Route path="https://lucielmacorretora.github.io/test.github.io/login" element={<Login />} />
                <Route path="https://lucielmacorretora.github.io/test.github.io/administrar" element = {<Administrar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default HtmlRoutes;
