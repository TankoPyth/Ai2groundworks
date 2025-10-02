import React from 'react';
import { ArrowRight, Linkedin, FileText, Users, Shield, BarChart3, Lock } from 'lucide-react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import PilotSignupModal from './PilotSignupModal';
import Header from './Header';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Listen for global modal open events
  React.useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
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
      <section className="pt-20 pb-8 h-screen relative overflow-hidden flex items-center w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-40 w-full">
          
          {/* Pilot Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-primary/20 to-cyan-tertiary/20 border border-cyan-primary/30 rounded-full px-4 py-2 badge-glow">
              <div className="w-2 h-2 bg-cyan-primary rounded-full animate-pulse"></div>
              <span className="text-cyan-primary font-semibold text-sm">Limited Pilot Program</span>
            </div>
          </div>

          {/* Main Content - Header and Logo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            
            {/* Left - Headline and Subtext */}
            <div className="text-center lg:text-left">
              <h1 className="text-white mb-4 leading-[1.1] tracking-tight text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                AI² Site <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">Pilot</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-primary via-cyan-quaternary to-cyan-tertiary bg-clip-text text-transparent">
                  What You Get
                </span>
              </h1>
              
              <p className="text-silver-secondary mb-6 font-light text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Be among the <span className="text-white font-semibold">first in Australia</span> to deploy an AI assistant on a live civil construction project.
              </p>
            </div>

            {/* Right - Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/src/assets/images/Ai2site_nobg.png"
                  alt="Ai²Groundworks"
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain hover:scale-105 transition-transform duration-500"
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
          <div className="max-w-5xl mx-auto mb-6">
            {/* First Row - 3 boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {pilotFeatures.slice(0, 3).map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300 text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{feature.title}</h3>
                  <p className="text-silver-secondary text-xs leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Second Row - 2 boxes centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {pilotFeatures.slice(3, 5).map((feature, index) => (
                <div key={index + 3} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300 text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{feature.title}</h3>
                  <p className="text-silver-secondary text-xs leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section - Compact */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <InteractiveHoverButton 
                text="Apply for pilot program" 
                variant="primary"
                className="px-6 py-3 text-base w-full sm:w-auto"
                onClick={() => setIsModalOpen(true)}
              />
              
              <a 
                href="https://www.linkedin.com/company/ai-%C2%B2-groundworks/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-primary/40 backdrop-blur-sm rounded-lg px-5 py-3 transition-all duration-300 w-full sm:w-auto justify-center"
                title="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-silver-secondary group-hover:text-cyan-primary transition-colors" />
                <span className="text-silver-secondary group-hover:text-white transition-colors font-medium text-sm">Follow us</span>
              </a>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center justify-center space-x-2 text-xs text-silver-tertiary">
              <div className="w-1.5 h-1.5 bg-cyan-primary rounded-full animate-pulse"></div>
              <span>3-month pilot • No cost • Limited spots</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pilot Program Modal */}
      <PilotSignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        formspreeEndpoint="https://formspree.io/f/xdkogqpw"
      />
    </>
  );
}