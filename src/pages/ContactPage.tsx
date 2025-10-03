import React, { useState, useEffect } from 'react';
import { Target, CheckCircle, ArrowRight, HelpCircle, FileText, Shield, BarChart3, Users, Clock } from 'lucide-react';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import PilotSignupModal from '../components/PilotSignupModal';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    "3-month access to full platform",
    "Dedicated onboarding and support", 
    "Direct input on product development",
    "Priority access to new features",
    "Custom integration assistance",
    "Quarterly business reviews"
  ];

  const faqs = [
    {
      icon: FileText,
      question: "What types of construction documents can AI² Site analyze?",
      answer: "AI² Site can process and analyze all standard construction documents including project plans, specifications, safety reports, compliance documents, quotes, contracts, progress reports, and site photos. Our AI understands Australian construction standards and terminology."
    },
    {
      icon: Shield,
      question: "How does AI² Site help with safety compliance on construction sites?",
      answer: "Our platform continuously monitors safety documentation, identifies potential hazards from uploaded reports and images, tracks compliance with Australian safety standards, and provides proactive alerts when safety protocols may be at risk."
    },
    {
      icon: BarChart3,
      question: "What kind of insights and analytics does the platform provide?",
      answer: "AI² Site delivers predictive project analytics, budget variance tracking, timeline optimization recommendations, resource allocation insights, risk assessment reports, and performance benchmarking against industry standards."
    },
    {
      icon: Users,
      question: "How does the role-based system work for different team members?",
      answer: "Each role (Project Manager, Safety Officer, Supervisor) gets a dedicated AI assistant with specialized knowledge and memory. PMs focus on scheduling and budgets, Safety Officers get compliance monitoring, and Supervisors receive site-specific guidance."
    },
    {
      icon: Clock,
      question: "How quickly can we get started with the pilot program?",
      answer: "Once approved for our pilot program, we typically have your AI² Site workspace set up within 1-2 weeks. This includes document upload, team onboarding, and initial AI training on your project data."
    },
    {
      icon: HelpCircle,
      question: "What happens to our data and is it secure?",
      answer: "Your project data remains completely private and secure. We use enterprise-grade encryption, Australian data centers, and strict access controls. Your data is never shared with other companies or used to train public AI models."
    }
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
          <div className={`text-center mb-6 md:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white mb-6 leading-tight text-3xl sm:text-4xl lg:text-5xl font-bold" role="banner">
              Be among the <span className="bg-gradient-to-r from-cyan-primary via-cyan-quaternary to-cyan-tertiary bg-clip-text text-transparent">first</span> in Australia
            </h1>
            <p className="text-silver-secondary text-sm sm:text-base lg:text-lg font-light max-w-2xl mx-auto leading-relaxed px-4 lg:px-0" role="doc-subtitle">
              Join our exclusive pilot program and help shape the future of AI-powered construction oversight.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
            {benefits.map((item, index) => (
              <div key={index} 
                   className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`}`}>
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-cyan-primary flex-shrink-0" />
                  <span className="text-white font-medium text-xs sm:text-sm lg:text-base">{item}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA section */}
          <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3">Ready to transform your projects?</h2>
              <p className="text-silver-secondary mb-4 font-light text-xs sm:text-sm lg:text-base px-2 lg:px-0">
                Applications are reviewed on a rolling basis. Apply today to secure your spot.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <InteractiveHoverButton 
                  text="Apply for pilot program" 
                  variant="primary"
                  className="px-4 sm:px-6 py-3 w-full sm:w-auto text-sm sm:text-base"
                  onClick={() => setIsModalOpen(true)}
                />
                <div className="flex items-center space-x-2 text-silver-tertiary">
                  <div className="w-2 h-2 bg-cyan-primary rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm">Limited spots available</span>
                </div>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mt-8 md:mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center" id="frequently-asked-questions">
                Frequently Asked <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">Questions</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} 
                       className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300 h-full">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-xl flex items-center justify-center flex-shrink-0">
                          <faq.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold text-sm md:text-base mb-3 leading-tight">{faq.question}</h3>
                          <p className="text-silver-secondary text-xs md:text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="mt-4 md:mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 text-center" id="contact-information">Get in touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-center">
                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm md:text-base">Email</h4>
                  <p className="text-silver-secondary text-xs sm:text-sm">info@ai2groundworks.com</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm md:text-base">Phone</h4>
                  <p className="text-silver-secondary text-xs sm:text-sm">+61 433 382 365</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Pilot Program Modal */}
      <PilotSignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        formspreeEndpoint="https://formspree.io/f/mgvnykge"
      />
      
      <Footer />
    </BackgroundGradientAnimation>
  );
}