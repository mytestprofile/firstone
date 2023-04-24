import { About } from './pages/about/About';
import { Carousel } from './pages/carousel/Carousel';
import { Contact } from './pages/contact/Contact';
import { Footer } from './pages/footer/Footer';
import { Main } from './pages/main/Main';
import React from 'react';
import './App.css';
import {Header} from "./pages/header/Header";

function App() {
    return (
        <div className={'App'}>
            <Header/>
            <Main/>
            <About/>
            <Carousel/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
