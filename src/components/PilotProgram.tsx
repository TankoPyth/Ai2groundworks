import React, { useState, useEffect } from 'react';
import { Target, CheckCircle, ArrowRight } from 'lucide-react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import PilotSignupModal from './PilotSignupModal';

export default function PilotProgram() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Listen for global modal open events
  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openPilotModal', handleOpenModal);
    return () => window.removeEventListener('openPilotModal', handleOpenModal);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'pilot-program') {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    const section = document.getElementById('pilot-program');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    "3-month access to full platform",
    "Dedicated onboarding and support", 
    "Direct input on product development",
    "Priority access to new features",
    "Custom integration assistance",
    "Quarterly business reviews"
  ];

  return (
    <section id="pilot-program" className="py-12 relative overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Header section */}
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-primary/10 to-cyan-tertiary/10 border border-cyan-primary/20 rounded-full px-8 py-4 mb-8 badge-glow">
              <Target className="w-6 h-6 text-cyan-primary" />
              <span className="text-cyan-primary font-semibold text-lg">Limited pilot program</span>
            </div>

            <h2 className="text-white mb-8 leading-tight text-3xl sm:text-4xl lg:text-5xl font-bold">
              Be among the first in Australia
            </h2>
            <p className="text-silver-secondary text-sm sm:text-base lg:text-lg xl:text-xl font-light max-w-3xl mx-auto leading-relaxed px-4 lg:px-0">
              Join our exclusive pilot program and help shape the future of AI-powered construction oversight.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {benefits.map((item, index) => (
              <div key={index} 
                   className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`}`}>
                <div className="flex items-center space-x-3 md:space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-cyan-primary flex-shrink-0" />
                  <span className="text-white font-medium text-sm md:text-base">{item}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA section */}
          <div className={`text-center mt-6 md:mt-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">Ready to transform your projects?</h3>
              <p className="text-silver-secondary mb-6 font-light text-xs sm:text-sm lg:text-base px-2 lg:px-0">
                Applications are reviewed on a rolling basis. Apply today to secure your spot.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <InteractiveHoverButton 
                  text="Apply for pilot program" 
                  variant="primary"
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                />
                <div className="flex items-center space-x-2 text-silver-tertiary">
                  <div className="w-2 h-2 bg-cyan-primary rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm">Limited spots available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pilot Program Modal */}
      <PilotSignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        formspreeEndpoint="https://formspree.io/f/xdkogqpw"
      />
    </section>
  );
}