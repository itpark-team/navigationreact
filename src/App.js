import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Info from "./components/Info";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="info" element={<Info/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;