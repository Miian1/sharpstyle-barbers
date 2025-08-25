import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import GlowingText from './GlowingText';

const Contact: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();
    return (
        <section id="contact" ref={ref} className="py-20 md:py-32 bg-off-white dark:bg-dark-midnight-blue/50">
            <div className={`container mx-auto px-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-charcoal-gray dark:text-off-white">
                        <GlowingText text="Book Your " /><span className="text-deep-orange"><GlowingText text="Appointment" /></span>
                    </h2>
                    <p className="text-lg text-medium-gray dark:text-warm-taupe mt-4 max-w-2xl mx-auto">
                        We're excited to see you. Fill out the form below or give us a call to book your spot.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <form className="space-y-6">
                        <input type="text" placeholder="Your Name" className="w-full p-4 bg-light-gray dark:bg-charcoal-gray border-2 border-transparent rounded-lg focus:outline-none focus:border-deep-orange transition-colors" />
                        <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-light-gray dark:bg-charcoal-gray border-2 border-transparent rounded-lg focus:outline-none focus:border-deep-orange transition-colors" />
                        <select className="w-full p-4 bg-light-gray dark:bg-charcoal-gray border-2 border-transparent rounded-lg focus:outline-none focus:border-deep-orange transition-colors appearance-none">
                            <option>Select Service</option>
                            <option>Classic Haircut</option>
                            <option>Beard Trim</option>
                            <option>SharpStyle Package</option>
                        </select>
                        <input type="datetime-local" className="w-full p-4 bg-light-gray dark:bg-charcoal-gray border-2 border-transparent rounded-lg focus:outline-none focus:border-deep-orange transition-colors" />
                        <textarea placeholder="Your Message (optional)" rows={4} className="w-full p-4 bg-light-gray dark:bg-charcoal-gray border-2 border-transparent rounded-lg focus:outline-none focus:border-deep-orange transition-colors"></textarea>
                        <button type="submit" className="w-full py-4 bg-deep-orange text-black font-bold rounded-lg shadow-lg hover:bg-burnt-sienna transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_#FF8C00]">
                            Send Booking Request
                        </button>
                    </form>

                    {/* Info & Map */}
                    <div className="space-y-8">
                        <div 
                             style={{
                                // @ts-ignore
                                '--glow-color': '#FF8C00',
                            }}
                            className="p-8 rounded-3xl bg-light-gray/60 dark:bg-charcoal-gray/60 backdrop-blur-sm shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[var(--glow-color)]/30"
                        >
                            <h3 className="text-2xl font-poppins font-bold mb-4 text-charcoal-gray dark:text-off-white"><GlowingText text="Contact Info" /></h3>
                            <div className="space-y-4 text-medium-gray dark:text-warm-taupe">
                                <p className="flex items-center space-x-3"><span className="text-deep-orange text-xl"><i className="ri-map-pin-2-fill"></i></span><span>123 Style Street, New York, NY 10001</span></p>
                                <p className="flex items-center space-x-3"><span className="text-deep-orange text-xl"><i className="ri-phone-fill"></i></span><span>(123) 456-7890</span></p>
                                <p className="flex items-center space-x-3"><span className="text-deep-orange text-xl"><i className="ri-mail-fill"></i></span><span>contact@sharpstyle.com</span></p>
                            </div>
                            <h3 className="text-2xl font-poppins font-bold mt-8 mb-4 text-charcoal-gray dark:text-off-white"><GlowingText text="Opening Hours" /></h3>
                            <div className="space-y-2 text-medium-gray dark:text-warm-taupe">
                                <p><strong>Mon - Fri:</strong> 9:00 AM - 7:00 PM</p>
                                <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
                                <p><strong>Sunday:</strong> Closed</p>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-md h-80">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.618693248386!2d-73.9878536845941!3d40.7484409793282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1614905105344!5m2!1sen!2sus" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true}
                                loading="lazy"
                                title="Shop Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;