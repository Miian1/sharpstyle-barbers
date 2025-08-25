import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-charcoal-gray text-warm-taupe">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & Brand */}
                    <div className="md:col-span-1">
                         <a href="#" className="flex items-center space-x-2 text-2xl font-poppins font-bold text-off-white mb-4 transition-all duration-300 hover:drop-shadow-[0_0_6px_#FFD700]">
                            <i className="ri-scissors-2-line h-6 w-6 text-deep-orange"></i>
                            <span>SharpStyle</span>
                        </a>
                        <p className="text-warm-taupe">Crafting confidence, one haircut at a time.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold font-poppins text-off-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="hover:text-pale-gold transition-all duration-300 hover:drop-shadow-[0_0_6px_#FFD700]">About</a></li>
                            <li><a href="#services" className="hover:text-pale-gold transition-all duration-300 hover:drop-shadow-[0_0_6px_#FFD700]">Services</a></li>
                            <li><a href="#team" className="hover:text-pale-gold transition-all duration-300 hover:drop-shadow-[0_0_6px_#FFD700]">Barbers</a></li>
                            <li><a href="#contact" className="hover:text-pale-gold transition-all duration-300 hover:drop-shadow-[0_0_6px_#FFD700]">Book Now</a></li>
                        </ul>
                    </div>

                     {/* Contact Info */}
                     <div>
                        <h4 className="font-bold font-poppins text-off-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-warm-taupe">
                            <li>123 Style Street, NYC</li>
                            <li>(123) 456-7890</li>
                            <li>contact@sharpstyle.com</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="font-bold font-poppins text-off-white mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-warm-taupe hover:text-pale-gold transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_6px_#FFD700]"><i className="ri-instagram-line text-2xl"></i></a>
                            <a href="#" className="text-warm-taupe hover:text-pale-gold transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_6px_#FFD700]"><i className="ri-facebook-box-fill text-2xl"></i></a>
                            <a href="#" className="text-warm-taupe hover:text-pale-gold transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_6px_#FFD700]"><i className="ri-twitter-x-fill text-2xl"></i></a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-rich-brown pt-8 text-center text-warm-taupe/70">
                    <p>&copy; {new Date().getFullYear()} SharpStyle Barbers. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;