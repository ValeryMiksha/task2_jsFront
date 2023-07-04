import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DBRequestConstructor from "./db-request-constructor/DBRequestConstructor.jsx";
export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<DBRequestConstructor/>}/>
            <Route path='*' element={<div>Page not found</div>}/>
        </Routes>
    </BrowserRouter>
}