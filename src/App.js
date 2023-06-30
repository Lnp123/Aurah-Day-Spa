import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
    return (
        <div>
            <Navbar />

            <Hero/>
            <Services />
            <Newsletter />
            <Cards />
            <Footer />
        </div>
    );
}

export default App;