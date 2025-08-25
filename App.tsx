
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import BookingCTA from './components/BookingCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="font-inter text-charcoal-gray dark:text-off-white">
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <Hero />
                <About />
                <Services />
                <Team />
                <Gallery />
                <Testimonials />
                <Pricing />
                <BookingCTA />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;