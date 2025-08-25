
import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import GlowingText from './GlowingText';

const AnimatedCounter: React.FC<{ target: number; duration?: number; suffix?: string, text: string }> = ({ target, duration = 2000, suffix = "+", text }) => {
    const [count, setCount] = useState(0);
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const end = target;
            if (start === end) return;

            const incrementTime = (duration / end);
            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isVisible, target, duration]);

    return (
        <div ref={ref} className="text-center">
            <p className="text-4xl md:text-5xl font-poppins font-bold text-deep-orange dark:text-pale-gold">
                {count}{suffix}
            </p>
            <p className="text-sm md:text-base text-medium-gray dark:text-warm-taupe mt-1">{text}</p>
        </div>
    );
};

const About: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <section id="about" className="py-20 md:py-32 bg-off-white dark:bg-dark-midnight-blue/50">
            <div ref={ref} className={`container mx-auto px-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className={`transform transition-transform duration-1000 ${isVisible ? 'translate-x-0' : '-translate-x-10'}`}>
                        <img 
                            src="/assets/img/about-1.png"
                            alt="Professional Barber" 
                            className="rounded-lg shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className={`transform transition-transform duration-1000 delay-200 ${isVisible ? 'translate-x-0' : 'translate-x-10'}`}>
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-charcoal-gray dark:text-off-white">
                            <GlowingText text="Crafting Style " />
                            <span className="text-deep-orange"><GlowingText text="Since 2010" /></span>
                        </h2>
                        <p className="text-lg text-charcoal-gray dark:text-warm-taupe mb-6 leading-relaxed">
                            Welcome to SharpStyle, where we blend traditional barbering with modern techniques to give you the perfect look. Our team of experienced barbers is dedicated to providing top-notch grooming services in a relaxed and friendly atmosphere.
                        </p>
                        <p className="text-lg text-charcoal-gray dark:text-warm-taupe mb-8 leading-relaxed">
                            We believe that a haircut is more than just a routine; it's a form of self-expression. That's why we take the time to consult with each client to create a personalized style that suits their personality and lifestyle.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <AnimatedCounter target={14} text="Years in Business" />
                            <AnimatedCounter target={8000} text="Happy Clients" />
                            <AnimatedCounter target={12000} text="Haircuts Styled" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;