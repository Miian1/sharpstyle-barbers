import React from 'react';
import type { Barber } from '../types';
import useScrollAnimation from '../hooks/useScrollAnimation';
import GlowingText from './GlowingText';

const barbersData: Barber[] = [
    {
        photo: '/assets/img/mop-1.png',
        name: 'James "The Blade" Miller',
        role: 'Senior Barber',
        socials: { instagram: '#', facebook: '#', twitter: '#' }
    },
    {
        photo: '/assets/img/mop-2.png',
        name: 'Carlos "Fade King" Rodriguez',
        role: 'Master Stylist',
        socials: { instagram: '#', facebook: '#', twitter: '#' }
    },
    {
        photo: '/assets/img/mop-3.png',
        name: 'Ethan "The Detailer" Chen',
        role: 'Grooming Specialist',
        socials: { instagram: '#', facebook: '#', twitter: '#' }
    }
];
const BarberCard: React.FC<{ barber: Barber; index: number }> = ({ barber, index }) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
    return (
        <div 
            ref={ref}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`group relative overflow-hidden rounded-lg shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-500`}
        >
            <img src={barber.photo} alt={barber.name} className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-off-white text-center
                            bg-gradient-to-t from-black/90 via-charcoal-gray/60 to-transparent
                            transition-all duration-500 ease-in-out
                            h-1/3 group-hover:h-4/5
                            flex flex-col justify-end group-hover:justify-center"
            >
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-poppins font-bold"><GlowingText text={barber.name} /></h3>
                    <p className="text-pale-gold">{barber.role}</p>
                </div>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                     <div className="flex justify-center space-x-4">
                        <a href={barber.socials.instagram} aria-label={`${barber.name}'s Instagram`} className="text-off-white hover:text-pale-gold transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_6px_#FFD700]"><i className="ri-instagram-line text-3xl"></i></a>
                        <a href={barber.socials.facebook} aria-label={`${barber.name}'s Facebook`} className="text-off-white hover:text-pale-gold transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_6px_#FFD700]"><i className="ri-facebook-box-fill text-3xl"></i></a>
                        <a href={barber.socials.twitter} aria-label={`${barber.name}'s Twitter`} className="text-off-white hover:text-pale-gold transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_6px_#FFD700]"><i className="ri-twitter-x-fill text-3xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Team: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();
    return (
        <section id="team" ref={ref} className="py-20 md:py-32 bg-off-white dark:bg-dark-midnight-blue/50">
            <div className="container mx-auto px-6">
                <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-charcoal-gray dark:text-off-white">
                        <GlowingText text="Meet Our " /><span className="text-deep-orange"><GlowingText text="Professionals" /></span>
                    </h2>
                    <p className="text-lg text-medium-gray dark:text-warm-taupe mt-4 max-w-2xl mx-auto">
                        Our team of certified barbers is passionate about their craft and dedicated to making you look your best.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {barbersData.map((barber, index) => (
                        <BarberCard key={index} barber={barber} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;