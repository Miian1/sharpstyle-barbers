import React, { useState, useEffect } from 'react';

interface HeaderProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#team', label: 'Barbers' },
        { href: '#gallery', label: 'Gallery' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-gray/80 dark:bg-dark-midnight-blue/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center space-x-2 text-2xl font-poppins font-bold text-charcoal-gray dark:text-off-white transition-all duration-300 hover:drop-shadow-[0_0_4px_#FF8C00] dark:hover:drop-shadow-[0_0_6px_#FFD700]">
                    <i className="ri-scissors-2-line text-deep-orange"></i>
                    <span>SharpStyle</span>
                </a>

                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-charcoal-gray dark:text-warm-taupe hover:text-deep-orange dark:hover:text-pale-gold font-medium transition-all duration-300 hover:drop-shadow-[0_0_4px_#FF8C00] dark:hover:drop-shadow-[0_0_6px_#FFD700]">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <button onClick={toggleDarkMode} className="p-2 rounded-full text-charcoal-gray dark:text-warm-taupe hover:bg-polished-silver dark:hover:bg-charcoal-gray transition-all duration-300 w-10 h-10 flex items-center justify-center hover:shadow-[0_0_15px_#808080] dark:hover:shadow-[0_0_15px_#FF8C00]">
                        {isDarkMode ? <i className="ri-sun-line text-2xl text-pale-gold" /> : <i className="ri-moon-line text-2xl text-charcoal-gray" />}
                    </button>
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className={`text-2xl text-charcoal-gray dark:text-off-white ri-${isMenuOpen ? 'close-line' : 'menu-line'}`}></i>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-light-gray dark:bg-dark-midnight-blue`}>
                <nav className="flex flex-col items-center space-y-4 py-4">
                     {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-charcoal-gray dark:text-warm-taupe hover:text-deep-orange dark:hover:text-pale-gold font-medium transition-all duration-300 hover:drop-shadow-[0_0_4px_#FF8C00] dark:hover:drop-shadow-[0_0_6px_#FFD700]">
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;