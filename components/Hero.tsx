
import React from 'react';
import GlowingText from './GlowingText';

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
};

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-off-white text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="/assets/img/hero-bg.png"
                    alt="Barber at work" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-dark-midnight-blue via-transparent to-black/20"></div>
            </div>
            
            <div className="relative z-10 p-6 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-extrabold tracking-tight leading-tight mb-4">
                    <GlowingText text="Look Sharp, Feel Fresh" />
                    <span className="text-pale-gold"><GlowingText text=" ✂️" /></span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-off-white mb-8">
                    Premium grooming services for men who care about their style.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                        href="#contact"
                        onClick={(e) => handleScroll(e, '#contact')}
                        className="w-full sm:w-auto px-8 py-4 bg-deep-orange text-black font-bold rounded-full shadow-lg hover:bg-burnt-sienna transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-deep-orange/50 text-center hover:shadow-[0_0_20px_#FF8C00]"
                    >
                        Book an Appointment
                    </a>
                    <a 
                        href="#services"
                        onClick={(e) => handleScroll(e, '#services')}
                        className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-off-white text-off-white font-bold rounded-full hover:bg-off-white hover:text-dark-midnight-blue transform hover:scale-105 transition-all duration-300 text-center hover:shadow-[0_0_20px_#F5F5DC]"
                    >
                        View Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;