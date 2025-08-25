import React from 'react';
import type { PricePlan } from '../types';
import useScrollAnimation from '../hooks/useScrollAnimation';
import GlowingText from './GlowingText';

const plans: PricePlan[] = [
    {
        title: 'Basic',
        price: '40',
        priceDetails: 'per cut',
        features: [
            { text: 'Precision Haircut', included: true },
            { text: 'Shampoo & Condition', included: true },
            { text: 'Basic Styling', included: true },
            { text: 'Hot Towel Treatment', included: false },
            { text: 'Detailed Beard Trim', included: false },
        ],
        isPopular: false,
        accentColor: 'text-rust-red',
        accentColorHex: '#B7410E',
        buttonGradient: 'from-rust-red to-burnt-sienna',
    },
    {
        title: 'Standard',
        price: '65',
        priceDetails: 'our most popular',
        features: [
            { text: 'Precision Haircut', included: true },
            { text: 'Shampoo & Condition', included: true },
            { text: 'Premium Styling', included: true },
            { text: 'Hot Towel Treatment', included: true },
            { text: 'Detailed Beard Trim', included: true },
            { text: 'Relaxing Facial', included: false },
        ],
        isPopular: true,
        accentColor: 'text-deep-orange',
        accentColorHex: '#FF8C00',
        buttonGradient: 'from-deep-orange to-pale-gold',
    },
    {
        title: 'Premium',
        price: '90',
        priceDetails: 'the full experience',
        features: [
            { text: 'Precision Haircut', included: true },
            { text: 'Shampoo & Condition', included: true },
            { text: 'Premium Styling', included: true },
            { text: 'Hot Towel Treatment', included: true },
            { text: 'Detailed Beard Trim', included: true },
            { text: 'Relaxing Facial', included: true },
        ],
        isPopular: false,
        accentColor: 'text-forest-green',
        accentColorHex: '#228B22',
        buttonGradient: 'from-forest-green to-warm-taupe',
    }
];

const CheckIcon = () => (
    <i className="ri-check-line text-2xl text-forest-green mr-3 flex-shrink-0"></i>
);
const CrossIcon = () => (
    <i className="ri-close-line text-2xl text-rust-red mr-3 flex-shrink-0"></i>
);

const PricingCard: React.FC<{ plan: PricePlan; index: number }> = ({ plan, index }) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <div 
            ref={ref}
            style={{ 
                transitionDelay: `${index * 100}ms`,
                // @ts-ignore
                '--glow-color': plan.accentColorHex,
            }}
            className={`
                p-8 rounded-3xl text-center transform transition-all duration-300 flex flex-col group
                bg-off-white/60 dark:bg-charcoal-gray/60 backdrop-blur-sm
                ${plan.isPopular ? 'scale-105 animate-glow' : 'shadow-lg hover:scale-105 hover:shadow-2xl'}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
        >
            <h3 className={`text-2xl font-poppins font-bold mb-2 ${plan.accentColor}`}><GlowingText text={plan.title} /></h3>
            
            <div className="h-1 w-20 mx-auto my-4"
                style={{backgroundImage: `linear-gradient(to right, ${plan.accentColorHex}30, ${plan.accentColorHex}, ${plan.accentColorHex}30)`}}>
            </div>

            <p className="text-5xl font-poppins font-extrabold mb-1 text-charcoal-gray dark:text-off-white">
                <span className="text-3xl align-top mr-1">$</span>
                {plan.price}
            </p>
            <p className="text-medium-gray dark:text-warm-taupe mb-8 h-6 font-medium capitalize">
                {plan.priceDetails}
            </p>
            
            <ul className="space-y-4 mb-8 text-left flex-grow">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                        {feature.included ? <CheckIcon /> : <CrossIcon />}
                        <span className={`text-charcoal-gray dark:text-warm-taupe ${!feature.included ? 'line-through opacity-60' : ''}`}>{feature.text}</span>
                    </li>
                ))}
            </ul>

            <button className={`
                w-full py-3 font-bold rounded-full text-off-white shadow-lg 
                transform transition-all duration-300 
                bg-gradient-to-r ${plan.buttonGradient} 
                group-hover:scale-105 group-hover:shadow-[0_0_20px_var(--glow-color)]
                ${plan.isPopular ? 'animate-pulse-glow' : ''}
            `}
            style={{
                // @ts-ignore
                '--glow-color': `${plan.accentColorHex}99`,
            }}
            >
                Get This Plan
            </button>
        </div>
    );
};

const Pricing: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();
    return (
        <section id="pricing" ref={ref} className="relative py-20 md:py-32 bg-light-gray dark:bg-dark-midnight-blue overflow-hidden">
             <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20" style={{backgroundImage: 'radial-gradient(circle at top left, #B7A68D, transparent 40%), radial-gradient(circle at bottom right, #D9D9D9, transparent 40%)'}}></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-charcoal-gray dark:text-off-white">
                        <GlowingText text="Pricing & " /><span className="text-deep-orange"><GlowingText text="Packages" /></span>
                    </h2>
                    <p className="text-lg text-medium-gray dark:text-warm-taupe mt-4 max-w-2xl mx-auto">
                        Choose the perfect grooming package that fits your style and needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;