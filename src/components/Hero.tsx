import React from 'react';
import { ArrowRight, Linkedin } from 'lucide-react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import PilotProgramModal from './ui/PilotProgramModal';
import Header from './Header';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Listen for global modal open events
  React.useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openPilotModal', handleOpenModal);
    return () => window.removeEventListener('openPilotModal', handleOpenModal);
  }, []);

  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 min-h-screen relative overflow-hidden flex items-center w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-40">
          <div className="max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-6">
              {/* Main headline with professional typography */}
              <div className="flex-1">
                <h1 className="text-white mb-6 leading-[1.1] tracking-tight max-w-4xl relative z-50 text-6xl lg:text-7xl font-bold">
                  AI <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">oversight</span> for<br />
                  <span className="bg-gradient-to-r from-cyan-primary via-cyan-quaternary to-cyan-tertiary bg-clip-text text-transparent">
                    civil <span className="underline decoration-cyan-tertiary decoration-4 underline-offset-8">construction</span>
                  </span>
                </h1>
              </div>
              
              {/* Hero Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img 
                    src="/src/assets/images/Ai2site_nobg.png"
                    alt="Ai²Groundworks"
                    className="w-64 h-64 lg:w-80 lg:h-80 object-contain hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      console.log('Hero image failed to load');
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-primary/20 rounded-full blur-lg animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-tertiary/30 rounded-full blur-md animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>
            
            {/* Professional subtext */}
            <p className="text-silver-secondary mb-8 font-light text-xl leading-relaxed max-w-3xl relative z-50">
              Transform project documents into actionable insights that drive safer, more efficient construction outcomes across Australia.
            </p>

            {/* Enhanced CTA section */}
            <div className="flex flex-col items-start gap-6 mb-12 relative z-50">
              <div className="flex items-center gap-4">
              <InteractiveHoverButton 
                text="Apply for pilot program" 
                variant="primary"
                className="px-8 py-4"
                onClick={() => setIsModalOpen(true)}
              />
                
                <a 
                  href="https://www.linkedin.com/company/ai-%C2%B2-groundworks/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-primary/40 backdrop-blur-sm rounded-lg px-6 py-4 transition-all duration-300"
                  title="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-silver-secondary group-hover:text-cyan-primary transition-colors" />
                  <span className="text-silver-secondary group-hover:text-white transition-colors font-medium">Follow us</span>
                </a>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-silver-tertiary">
                <div className="w-1.5 h-1.5 bg-cyan-primary rounded-full"></div>
                <span>3-month pilot</span>
              </div>
            </div>

            {/* Professional trust indicators */}
            <div className="border-t border-white/8 pt-8 relative z-50 -mx-6 px-6">
              <p className="text-silver-tertiary text-sm mb-6 font-medium tracking-wide uppercase">
                Trusted by construction leaders
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pilot Program Modal */}
      <PilotProgramModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}