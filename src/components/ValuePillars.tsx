import React, { useState, useEffect } from 'react';
import { Users, Shield, TrendingUp, Briefcase } from 'lucide-react';

export default function ValuePillars() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'value-pillars') {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    const section = document.getElementById('value-pillars');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const pillars = [
    { 
      icon: Shield, 
      title: "Safety First", 
      desc: "Proactive hazard identification and compliance monitoring to prevent incidents before they happen.",
      highlight: "85% reduction in safety incidents",
      imageUrl: "src/assets/images/safety_first.png"
    },
    { 
      icon: TrendingUp, 
      title: "Predictive Intelligence", 
      desc: "AI-powered insights that anticipate project challenges and optimize resource allocation.",
      highlight: "70% fewer project delays",
      imageUrl: "" // Add image URL here when available
    },
    { 
      icon: Users, 
      title: "Team Collaboration", 
      desc: "Unified platform that connects all stakeholders with real-time project visibility.",
      highlight: "95% compliance accuracy",
      imageUrl: "" // Add image URL here when available
    },
    { 
      icon: Briefcase, 
      title: "Industry Expertise", 
      desc: "Built specifically for Australian construction with deep understanding of local regulations.",
      highlight: "50+ projects monitored",
      imageUrl: "" // Add image URL here when available
    }
  ];

  return (
    <section id="value-pillars" className="py-12 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-3xl">
            <h2 className="text-white mb-6 leading-tight text-4xl lg:text-5xl font-bold">
              Why construction <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">leaders</span> choose us
            </h2>
            <p className="text-silver-secondary font-light text-xl">
              Purpose-built for the unique challenges of Australian civil construction projects.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {pillars.map((pillar, index) => (
            <div key={index} 
                 className={`transition-all duration-1000 delay-${index * 150} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-xl flex items-center justify-center">
                      <pillar.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-cyan-primary font-semibold text-sm tracking-wide uppercase">
                      {pillar.highlight}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white">{pillar.title}</h3>
                  <p className="text-silver-secondary text-lg leading-relaxed mb-4">{pillar.desc}</p>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="w-72 h-48 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cyan-primary/30 transition-all duration-500 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        {pillar.imageUrl ? (
                          <img 
                            src={pillar.imageUrl}
                            alt={pillar.title}
                            className="w-full h-full object-contain rounded-2xl"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-cyan-primary/10 to-cyan-tertiary/10 rounded-xl flex items-center justify-center">
                            <pillar.icon className="w-16 h-16 text-cyan-primary/50" />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-primary rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-tertiary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}