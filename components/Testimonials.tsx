import React, { useState, useEffect, useCallback } from 'react';
import type { Testimonial } from '../types';
import GlowingText from './GlowingText';

const testimonialsData: Testimonial[] = [
    { photo: 'https://picsum.photos/seed/client1/100/100', name: 'Michael B.', feedback: "The best haircut I've ever had. The attention to detail is unmatched. I've found my permanent barber shop!", rating: 5 },
    { photo: 'https://picsum.photos/seed/client2/100/100', name: 'David L.', feedback: "Amazing atmosphere and incredibly talented barbers. Carlos gave me the perfect fade. Highly recommend!", rating: 5 },
    { photo: 'https://picsum.photos/seed/client3/100/100', name: 'John S.', feedback: "Great service from start to finish. The hot towel shave was a fantastic experience. I'll definitely be back.", rating: 4 },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex justify-center text-pale-gold">
        {[...Array(5)].map((_, i) => (
            <i key={i} className={`ri-star-fill text-xl ${i < rating ? 'text-pale-gold' : 'text-polished-silver dark:text-charcoal-gray'}`}></i>
        ))}
    </div>
);

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, []);
    
    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000);
        return () => clearInterval(timer);
    }, [nextTestimonial]);

    return (
        <section id="testimonials" className="relative py-20 md:py-32 bg-off-white dark:bg-dark-midnight-blue/50">
            <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
                 <img src="https://picsum.photos/seed/barbershop/1920/1080" alt="Barbershop interior" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-off-white dark:bg-dark-midnight-blue bg-opacity-80 dark:bg-opacity-80"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-charcoal-gray dark:text-off-white">
                        <GlowingText text="What Our " /><span className="text-deep-orange"><GlowingText text="Clients Say" /></span>
                    </h2>
                </div>
                <div className="relative max-w-3xl mx-auto">
                    <div className="overflow-hidden relative h-96">
                         {testimonialsData.map((testimonial, index) => (
                            <div 
                                key={index}
                                className="absolute inset-0 transition-opacity duration-700 ease-in-out p-4"
                                style={{ opacity: index === currentIndex ? 1 : 0 }}
                            >
                                <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-3xl bg-light-gray/60 dark:bg-charcoal-gray/60 backdrop-blur-sm shadow-xl">
                                    <img src={testimonial.photo} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-4 border-pale-gold shadow-lg"/>
                                    <StarRating rating={testimonial.rating} />
                                    <p className="text-lg text-charcoal-gray dark:text-warm-taupe italic my-4">"{testimonial.feedback}"</p>
                                    <h4 className="text-xl font-poppins font-bold text-charcoal-gray dark:text-off-white">{testimonial.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={prevTestimonial} aria-label="Previous testimonial" className="absolute top-1/2 left-0 md:-left-16 transform -translate-y-1/2 p-2 rounded-full bg-light-gray/50 dark:bg-charcoal-gray/50 hover:bg-polished-silver dark:hover:bg-rich-brown shadow-md transition">
                        <i className="ri-arrow-left-s-line text-2xl text-charcoal-gray dark:text-off-white"></i>
                    </button>
                    <button onClick={nextTestimonial} aria-label="Next testimonial" className="absolute top-1/2 right-0 md:-right-16 transform -translate-y-1/2 p-2 rounded-full bg-light-gray/50 dark:bg-charcoal-gray/50 hover:bg-polished-silver dark:hover:bg-rich-brown shadow-md transition">
                        <i className="ri-arrow-right-s-line text-2xl text-charcoal-gray dark:text-off-white"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;