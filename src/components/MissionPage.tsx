import React, { useState, useEffect } from 'react';
import { Target } from 'lucide-react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import PilotProgramModal from './ui/PilotProgramModal';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import BackgroundPaperShaders from './ui/background-paper-shaders';
import Header from './Header';

export default function MissionPage() {
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

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(28, 25, 23)"
      gradientBackgroundEnd="rgb(41, 37, 36)"
      firstColor="103, 207, 206"
      secondColor="107, 180, 187"
      thirdColor="101, 196, 196"
      fourthColor="75, 159, 170"
      fifthColor="103, 207, 206"
      pointerColor="103, 207, 206"
      size="90%"
      blendingValue="overlay"
      interactive={true}
      containerClassName="min-h-screen"
      className="text-white font-sans antialiased"
    >
      
      <Header />

      {/* Mission Content */}
      <main className="pt-24 pb-8 relative bg-transparent min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header Section */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white mb-6 leading-tight max-w-3xl mx-auto text-4xl lg:text-5xl font-bold">
              Our <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">Mission</span>
            </h1>
            <p className="text-silver-secondary text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Building the future of construction through AI-powered oversight
            </p>
          </div>

          {/* Mission Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Mission Statement Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 mb-8 hover:bg-white/8 hover:border-cyan-primary/20 transition-all duration-500">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-8">
                  AI² GroundWorks <span className="bg-gradient-to-r from-cyan-primary via-cyan-quaternary to-cyan-tertiary bg-clip-text text-transparent">Mission</span> Statement
                </h2>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-silver-secondary">
                    At AI² GroundWorks, our mission is to bring <span className="text-white font-semibold">clarity, care, and capability</span> to civil construction through AI oversight.
                  </p>
                  
                  <p className="text-silver-secondary">
                    We believe in <span className="text-cyan-primary font-semibold">working hard, lifting others up</span>, and pushing projects toward what's possible — one job at a time.
                  </p>
                  
                  <p className="text-silver-secondary">
                    By combining practical AI with real human values, we're building a future where construction runs <span className="text-white font-semibold">leaner, safer, and smarter</span> — not by replacing people, but by supporting them with tools that make their jobs easier, their teams stronger, and their outcomes better.
                  </p>
                  
                  <div className="bg-gradient-to-r from-cyan-primary/10 to-cyan-tertiary/10 border border-cyan-primary/20 rounded-2xl p-6 mt-8">
                    <p className="text-white font-semibold text-xl">
                      Our goal is simple: raise the standard and help everyone grow along the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image and CTA Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Image Section */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-primary/30 transition-all duration-500">
                    {/* Placeholder for your image */}
                    <div className="w-full h-full bg-gradient-to-br from-cyan-primary/10 to-cyan-tertiary/10 flex items-center justify-center relative">
                      {/* Replace this div with your image */}
                      <img 
                        src="/src/assets/images/Groundworks_image.jpeg"
                        alt="AI²Groundworks Mission"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full bg-gradient-to-br from-cyan-primary/20 to-cyan-tertiary/20 flex items-center justify-center';
                          fallback.innerHTML = '<div class="text-center"><div class="w-16 h-16 bg-cyan-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-cyan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div><p class="text-cyan-primary font-medium">Mission Image</p></div>';
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-primary/20 rounded-full blur-lg animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-tertiary/30 rounded-full blur-md animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to get started?</h3>
                  <p className="text-silver-secondary mb-6 font-light">
                    Join our pilot program and be part of the construction revolution
                  </p>
                  
                  <InteractiveHoverButton 
                    text="Apply for pilot program" 
                    variant="primary"
                    className="px-8 py-4 text-lg"
                    onClick={() => setIsModalOpen(true)}
                  />
                  
                  <div className="flex items-center justify-center space-x-2 text-silver-tertiary mt-4">
                    <div className="w-2 h-2 bg-cyan-primary rounded-full animate-pulse"></div>
                    <span className="text-sm">3-month pilot program</span>
                  </div>
                </div>
                
                {/* Contact info */}
                <div className="text-center space-y-3">
                  <p className="text-silver-tertiary text-sm">Questions about our mission?</p>
                  <div className="flex items-center justify-center space-x-6">
                    <a href="mailto:info@ai2groundworks.com.au" className="text-cyan-primary hover:text-white transition-colors text-sm">
                      info@ai2groundworks.com.au
                    </a>
                    <a href="tel:+61433382365" className="text-cyan-primary hover:text-white transition-colors text-sm">
                      +61 433 382 365
                    </a>
                  </div>
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