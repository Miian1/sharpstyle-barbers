import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import GlowingText from './GlowingText';

const galleryImages = [
    { src: '/assets/img/sg-4.png', span: 'row-span-2' },
    { src: '/assets/img/sg-2.png', span: '' },
    { src: '/assets/img/sg-7.png', span: '' },
    { src: '/assets/img/sg-8.png', span: 'row-span-2' },
    { src: '/assets/img/sg-5.png', span: '' },
    { src: '/assets/img/sg-6.png', span: '' },
];

const Lightbox: React.FC<{ src: string, onClose: () => void }> = ({ src, onClose }) => (
    <div 
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fade-in"
        onClick={onClose}
    >
        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-off-white text-4xl hover:text-pale-gold"
        >
            <i className="ri-close-line"></i>
        </button>
        <img 
            src={src} 
            alt="Expanded haircut" 
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()} 
        />
    </div>
);

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { ref: headerRef, isVisible: isHeaderVisible } = useScrollAnimation<HTMLDivElement>();

    const openLightbox = (src: string) => setSelectedImage(src);
    const closeLightbox = () => setSelectedImage(null);

    return (
        <section id="gallery" className="py-20 md:py-32 bg-light-gray dark:bg-dark-midnight-blue">
            <div className="container mx-auto px-6">
                <div ref={headerRef} className={`text-center mb-16 transition-opacity duration-1000 ${isHeaderVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-charcoal-gray dark:text-off-white">
                        <GlowingText text="Style " /><span className="text-deep-orange"><GlowingText text="Gallery" /></span>
                    </h2>
                    <p className="text-lg text-medium-gray dark:text-warm-taupe mt-4 max-w-2xl mx-auto">
                        Check out some of our best work and get inspired for your next visit.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => {
                        const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
                        return (
                            <div
                                key={index}
                                ref={ref}
                                className={`overflow-hidden rounded-lg shadow-md cursor-pointer group ${image.span} ${ isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90' }`}
                                style={{ transition: 'opacity 0.5s ease-out, transform 0.5s ease-out', transitionDelay: `${index * 100}ms` }}
                                onClick={() => openLightbox(image.src)}
                            >
                                <img src={image.src} alt={`Haircut example ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
                            </div>
                        );
                    })}
                </div>
            </div>
            {selectedImage && <Lightbox src={selectedImage} onClose={closeLightbox} />}
        </section>
    );
};

export default Gallery;