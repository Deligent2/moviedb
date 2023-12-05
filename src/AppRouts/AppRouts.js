import React from 'react';
import {Route, Routes} from "react-router-dom";

const AppRouts = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/movie" element={<MoviePage/>}/>
        </Routes>
    )
}