import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './assets/libs/@mdi/font/css/materialdesignicons.min.css';
import Switch from './component/Switch';
import IndexAi from './pages/index/index-ai';

import Contact from './pages/contact/Contact';

export default function App() {
    return (
        <BrowserRouter>
        <Switch/>
            <Routes>
                <Route exact path="/" element={<IndexAi/>} />
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}
