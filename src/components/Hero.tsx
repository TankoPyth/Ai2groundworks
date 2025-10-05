import React from 'react';
import { ArrowRight, Linkedin, FileText, Users, Shield, BarChart3, Lock } from 'lucide-react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import PilotSignupModal from './PilotSignupModal';
import Header from './Header';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Debug logging
  React.useEffect(() => {
    console.log('Hero modal state:', isModalOpen);
  }, [isModalOpen]);

  // Listen for global modal open events
  React.useEffect(() => {
    const handleOpenModal = () => {
      console.log('Global modal event received');
      setIsModalOpen(true);
    };
    window.addEventListener('openPilotModal', handleOpenModal);
    return () => window.removeEventListener('openPilotModal', handleOpenModal);
  }, []);

  const pilotFeatures = [
    {
      icon: FileText,
      title: "Setup and onboarding",
      desc: "We create your secure AI workspace and load it with your project documents."
    },
    {
      icon: Users,
      title: "Role-based chat",
      desc: "Dedicated spaces for PM, Safety, and Supervisor each with their own instructions and memory."
    },
    {
      icon: ArrowRight,
      title: "Instant answers",
      desc: "Ask in plain language and get instant, sourced answers from your project memory."
    },
    {
      icon: BarChart3,
      title: "Monthly insights",
      desc: "Simple, actionable reports to help your team improve every month."
    },
    {
      icon: Lock,
      title: "Privacy guaranteed",
      desc: "All data is handled securely and stays yours."
    }
  ];

  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Hero Section - Compact to fit viewport */}
      <section className="pt-20 pb-6 sm:pb-8 min-h-screen relative overflow-hidden flex items-center w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40 w-full">
          
          {/* Pilot Badge */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-cyan-primary/20 to-cyan-tertiary/20 border border-cyan-primary/30 rounded-full px-3 sm:px-4 py-2 badge-glow">
              <div className="w-2 h-2 bg-cyan-primary rounded-full animate-pulse"></div>
              <span className="text-cyan-primary font-semibold text-xs sm:text-sm">Limited Pilot Program</span>
            </div>
          </div>

          {/* Main Content - Header and Logo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-6 sm:mb-8">
            
            {/* Left - Headline and Subtext */}
            <div className="text-center lg:text-left">
              <h1 className="text-white mb-3 sm:mb-4 leading-[1.1] tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold" role="banner">
                AI² Site <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">Pilot</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-primary via-cyan-quaternary to-cyan-tertiary bg-clip-text text-transparent">
                  What You Get
                </span>
              </h1>
              
              <p className="text-silver-secondary mb-4 sm:mb-6 font-light text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0" role="contentinfo">
                Be among the <span className="text-white font-semibold">first in Australia</span> to deploy an AI assistant on a live civil construction project.
              </p>
            </div>

            {/* Right - Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/src/assets/images/Ai2site_nobg.png"
                  alt="Ai²Groundworks"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    console.log('Hero image failed to load');
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-primary/20 rounded-full blur-lg animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-tertiary/30 rounded-full blur-md animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>

          {/* Feature Boxes - Compact 3-2 Grid Layout */}
          <div className="max-w-5xl mx-auto mb-4 sm:mb-6">
            {/* First Row - 3 boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
              {pilotFeatures.slice(0, 3).map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300 text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-silver-secondary text-xs leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Second Row - 2 boxes centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {pilotFeatures.slice(3, 5).map((feature, index) => (
                <div key={index + 3} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300 text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-silver-secondary text-xs leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section - Compact */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3 sm:mb-4 px-4 sm:px-0">
              <InteractiveHoverButton 
                text="Apply for pilot program" 
                variant="primary"
                className="px-4 sm:px-6 py-3 text-sm sm:text-base w-full sm:w-auto"
                onClick={() => setIsModalOpen(true)}
              />
              
              <a 
                href="https://www.linkedin.com/company/ai-%C2%B2-groundworks/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 hover:border-cyan-primary/40 backdrop-blur-sm rounded-lg px-4 sm:px-5 py-3 transition-all duration-300 w-full sm:w-auto justify-center touch-manipulation"
                title="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-silver-secondary group-hover:text-cyan-primary transition-colors" />
                <span className="text-silver-secondary group-hover:text-white transition-colors font-medium text-sm">Follow us</span>
              </a>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center justify-center space-x-2 text-xs text-silver-tertiary">
              <div className="w-1.5 h-1.5 bg-cyan-primary rounded-full animate-pulse"></div>
              <span>3-month pilot  • Limited spots</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pilot Program Modal */}
      <PilotSignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        formspreeEndpoint="https://formspree.io/f/mgvnykge"
      />
    </>
  );
}