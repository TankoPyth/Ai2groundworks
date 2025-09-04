import React, { useState, useEffect } from 'react';
import { Target, CheckCircle, ArrowRight } from 'lucide-react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import PilotProgramModal from './ui/PilotProgramModal';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import Header from './Header';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Listen for global modal open events
  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openPilotModal', handleOpenModal);
    return () => window.removeEventListener('openPilotModal', handleOpenModal);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    "Free 3-month access to full platform",
    "Dedicated onboarding and support", 
    "Direct input on product development",
    "Priority access to new features",
    "Custom integration assistance",
    "Quarterly business reviews"
  ];

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(28, 25, 23)"
      gradientBackgroundEnd="rgb(41, 37, 36)"
      firstColor="255, 255, 255"
      secondColor="229, 231, 235"
      thirdColor="209, 213, 219"
      fourthColor="156, 163, 175"
      fifthColor="107, 114, 128"
      pointerColor="255, 255, 255"
      size="80%"
      blendingValue="soft-light"
      interactive={true}
      containerClassName="min-h-screen"
      className="text-white font-sans antialiased"
    >
      <Header />

      {/* Contact Content */}
      <main className="pt-24 pb-8 relative bg-transparent min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header section */}
          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white mb-6 leading-tight text-3xl sm:text-4xl lg:text-5xl font-bold">
              Be among the <span className="bg-gradient-to-r from-cyan-primary via-cyan-quaternary to-cyan-tertiary bg-clip-text text-transparent">first</span> in Australia
            </h1>
            <p className="text-silver-secondary text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Join our exclusive pilot program and help shape the future of AI-powered construction oversight.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {benefits.map((item, index) => (
              <div key={index} 
                   className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`}`}>
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-cyan-primary flex-shrink-0" />
                  <span className="text-white font-medium text-sm">{item}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA section */}
          <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3">Ready to transform your projects?</h2>
              <p className="text-silver-secondary mb-4 font-light text-sm sm:text-base">
                Applications are reviewed on a rolling basis. Apply today to secure your spot.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <InteractiveHoverButton 
                  text="Apply for pilot program" 
                  variant="primary"
                  className="px-6 py-3 w-full sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                />
                <div className="flex items-center space-x-2 text-silver-tertiary">
                  <div className="w-2 h-2 bg-cyan-primary rounded-full animate-pulse"></div>
                  <span className="text-sm">Limited spots available</span>
                </div>
              </div>
            </div>
            
            {/* Contact Information - moved inline */}
            <div className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Get in touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
                <div>
                  <h4 className="text-white font-semibold mb-2">Email</h4>
                  <p className="text-silver-secondary text-sm">info@ai2groundworks.com</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Phone</h4>
                  <p className="text-silver-secondary text-sm">+61 433 382 365</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Pilot Program Modal */}
      <PilotProgramModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </BackgroundGradientAnimation>
  );
}