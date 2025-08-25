import React, { useState, useEffect, useCallback } from 'react';
import type { Service } from '../types';
import useScrollAnimation from '../hooks/useScrollAnimation';
import GlowingText from './GlowingText';

const servicesData: Service[] = [
    {
        icon: <i className="ri-scissors-cut-line"></i>,
        name: 'Classic Haircut',
        description: 'A timeless cut tailored to your style, complete with a shampoo and finish.',
        price: '$40',
        accentColor: 'text-deep-orange',
        accentColorHex: '#FF8C00',
    },
    {
        icon: <i className="ri-brush-4-line"></i>,
        name: 'Beard Trim',
        description: 'Expert shaping and trimming of your beard, finished with nourishing beard oil.',
        price: '$25',
        accentColor: 'text-burnt-sienna',
        accentColorHex: '#E97451',
    },
    {
        icon: <i className="ri-magic-line"></i>,
        name: 'Hair Styling',
        description: 'Professional styling for special occasions or just a fresh look.',
        price: '$30',
        accentColor: 'text-rust-red',
        accentColorHex: '#B7410E',
    },
    {
        icon: <i className="ri-temp-hot-line"></i>,
        name: 'Hot Towel Shave',
        description: 'A luxurious hot towel shave for the closest, smoothest finish.',
        price: '$45',
        accentColor: 'text-forest-green',
        accentColorHex: '#228B22',
    },
    {
        icon: <i className="ri-user-smile-line"></i>,
        name: 'Kids Cut',
        description: 'A patient and stylish haircut for our younger clients (under 12).',
        price: '$20',
        accentColor: 'text-warm-taupe',
        accentColorHex: '#B7A68D',
    },
    {
        icon: <i className="ri-scissors-2-line"></i>,
        name: 'Fade & Taper',
        description: 'A precision fade or taper, expertly blended for a sharp, clean look.',
        price: '$45',
        accentColor: 'text-rich-brown',
        accentColorHex: '#5C4033',
    },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            style={{
                // @ts-ignore
                '--glow-color': service.accentColorHex,
            }}
            className={`
                p-8 h-full rounded-3xl text-center transform transition-all duration-500 flex flex-col group
                bg-off-white/60 dark:bg-charcoal-gray/60 backdrop-blur-sm shadow-lg
                hover:scale-105 hover:shadow-2xl hover:shadow-[var(--glow-color)]/30
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
        >
            <div className="flex-grow flex flex-col items-center">
                <div className={`text-5xl mb-4 ${service.accentColor} transition-transform duration-300 group-hover:scale-110`}>
                    {service.icon}
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-2 text-charcoal-gray dark:text-off-white"><GlowingText text={service.name} /></h3>
                 <div
                    className="h-0.5 w-16 mx-auto my-4"
                    style={{backgroundImage: `linear-gradient(to right, transparent, ${service.accentColorHex}99, transparent)`}}
                ></div>
                <p className="text-medium-gray dark:text-warm-taupe mb-4 flex-grow">{service.description}</p>
            </div>
            <p className={`text-4xl font-poppins font-semibold ${service.accentColor} mt-auto pt-4`}>{service.price}</p>
        </div>
    );
}

const Services: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const updateItemsPerPage = useCallback(() => {
        if (window.innerWidth < 768) {
            setItemsPerPage(1);
        } else if (window.innerWidth < 1024) {
            setItemsPerPage(2);
        } else {
            setItemsPerPage(3);
        }
        setCurrentIndex(0); 
    }, []);

    useEffect(() => {
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, [updateItemsPerPage]);

    const maxIndex = servicesData.length > itemsPerPage ? servicesData.length - itemsPerPage : 0;

    const nextService = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevService = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <section id="services" ref={ref} className="relative py-20 md:py-32 bg-light-gray dark:bg-dark-midnight-blue overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10" style={{backgroundImage: 'radial-gradient(circle at top right, #FFD700, transparent 50%), radial-gradient(circle at bottom left, #FF8C00, transparent 50%)'}}></div>
            <div className="container mx-auto px-6 relative z-10">
                 <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-charcoal-gray dark:text-off-white">
                        <GlowingText text="Our " /><span className="text-deep-orange"><GlowingText text="Services" /></span>
                    </h2>
                    <p className="text-lg text-medium-gray dark:text-warm-taupe mt-4 max-w-2xl mx-auto">
                        From classic cuts to modern styles, we offer a range of services to meet your grooming needs.
                    </p>
                </div>

                <div className={`relative`}>
                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out py-4" 
                            style={{ transform: `translateX(calc(-${currentIndex} * (100% / ${itemsPerPage})))` }}
                        >
                            {servicesData.map((service, index) => (
                                <div key={index} className="flex-shrink-0 px-4" style={{ width: `calc(100% / ${itemsPerPage})` }}>
                                    <ServiceCard service={service} />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {maxIndex > 0 && (
                        <>
                            <button 
                                onClick={prevService} 
                                disabled={currentIndex === 0}
                                aria-label="Previous service"
                                className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 p-3 rounded-full bg-light-gray/70 dark:bg-charcoal-gray/70 backdrop-blur-sm shadow-md hover:bg-polished-silver dark:hover:bg-rich-brown disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10 hover:shadow-lg dark:hover:shadow-[0_0_15px_#F5F5DC40]"
                            >
                                <i className="ri-arrow-left-s-line text-3xl text-charcoal-gray dark:text-off-white"></i>
                            </button>
                            <button 
                                onClick={nextService} 
                                disabled={currentIndex >= maxIndex}
                                aria-label="Next service"
                                className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 p-3 rounded-full bg-light-gray/70 dark:bg-charcoal-gray/70 backdrop-blur-sm shadow-md hover:bg-polished-silver dark:hover:bg-rich-brown disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10 hover:shadow-lg dark:hover:shadow-[0_0_15px_#F5F5DC40]"
                            >
                                <i className="ri-arrow-right-s-line text-3xl text-charcoal-gray dark:text-off-white"></i>
                            </button>
                        </>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Services;