

import React, { useState, useEffect } from 'react';
import GlowingText from './GlowingText';

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
};

const BookingCTA: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScrollEvent = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent);
        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, []);

    return (
        <section 
            className="relative py-24 md:py-32 text-white text-center overflow-hidden bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/img/rfl-bg.png')" }}
        >
            <div className="absolute inset-0 bg-black/70"></div>
            <div 
                className="absolute inset-0 bg-cover bg-center hidden md:block"
                style={{ 
                    backgroundImage: "url('/assets/img/rfl-bg.png')",
                    transform: `translateY(${offsetY * 0.3}px)`,
                    backgroundAttachment: 'fixed'
                }}
            ></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-poppins font-extrabold mb-6">
                    <GlowingText text="Ready for a Fresh Look?" />
                </h2>
                <p className="text-lg md:text-xl text-off-white mb-8 max-w-2xl mx-auto">
                    Don't wait to look your best. Our expert barbers are ready to give you the style you deserve.
                </p>
                <a 
                    href="#contact"
                    onClick={(e) => handleScroll(e, '#contact')}
                    className="px-10 py-4 bg-deep-orange text-black font-bold rounded-full shadow-lg hover:bg-burnt-sienna transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-deep-orange/50 hover:shadow-[0_0_20px_#FF8C00]"
                >
                    Book Now
                </a>
            </div>
        </section>
    );
};

export default BookingCTA;