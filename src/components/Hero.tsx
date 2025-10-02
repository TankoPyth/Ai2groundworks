import React from 'react';
import { ArrowRight, Linkedin, CheckCircle, Users, Shield, BarChart3, Lock, FileText } from 'lucide-react';
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

  const pilotFeatures = [
    {
      icon: FileText,
      title: "Setup and onboarding",
      desc: "We create your secure AI workspace and load it with your project documents."
    },
    {
      icon: Users,
      title: "Role-based chat",
      desc: "Dedicated spaces for PM, Safety, and Supervisor — each with their own instructions and memory."
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 min-h-screen relative overflow-hidden flex items-center w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-40">
          
          {/* Main Content Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">
              {/* Pilot Badge */}
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-primary/20 to-cyan-tertiary/20 border border-cyan-primary/30 rounded-full px-6 py-3 mb-8 badge-glow">
                <div className="w-2 h-2 bg-cyan-primary rounded-full animate-pulse"></div>
                <span className="text-cyan-primary font-semibold text-sm lg:text-base">Limited Pilot Program</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-white mb-6 leading-[1.1] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
                AI² Site <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">Pilot</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-primary via-cyan-quaternary to-cyan-tertiary bg-clip-text text-transparent">
                  What You Get
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-silver-secondary mb-8 font-light text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Be among the <span className="text-white font-semibold">first in Australia</span> to deploy an AI assistant on a live civil construction project.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12">
                <InteractiveHoverButton 
                  text="Apply for pilot program" 
                  variant="primary"
                  className="px-8 py-4 text-lg w-full sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                />
                
                <a 
                  href="https://www.linkedin.com/company/ai-%C2%B2-groundworks/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-primary/40 backdrop-blur-sm rounded-lg px-6 py-4 transition-all duration-300 w-full sm:w-auto justify-center"
                  title="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-silver-secondary group-hover:text-cyan-primary transition-colors" />
                  <span className="text-silver-secondary group-hover:text-white transition-colors font-medium">Follow us</span>
                </a>
              </div>

              {/* Trust Indicator */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-silver-tertiary">
                <div className="w-1.5 h-1.5 bg-cyan-primary rounded-full animate-pulse"></div>
                <span>3-month pilot • No cost • Limited spots</span>
              </div>
            </div>

            {/* Right Column - Logo and Features */}
            <div className="flex flex-col items-center space-y-8">
              
              {/* Logo */}
              <div className="relative mb-4">
                <img 
                  src="/src/assets/images/Ai2site_nobg.png"
                  alt="Ai²Groundworks"
                  className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain hover:scale-105 transition-transform duration-500"
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

              {/* Feature List - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:block w-full max-w-md">
                <div className="space-y-4">
                  {pilotFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <feature.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                        <p className="text-silver-secondary text-xs leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Feature List - Visible only on mobile */}
          <div className="lg:hidden mt-12">
            <h2 className="text-white text-2xl font-bold text-center mb-8">What's Included:</h2>
            <div className="grid grid-cols-1 gap-4">
              {pilotFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                    <p className="text-silver-secondary text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="text-center mt-8">
              <InteractiveHoverButton 
                text="Apply now - Limited spots" 
                variant="primary"
                className="px-8 py-4 text-lg w-full"
                onClick={() => setIsModalOpen(true)}
              />
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