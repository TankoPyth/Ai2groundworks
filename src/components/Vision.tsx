import React, { useState, useEffect } from 'react';
import { Building2, Zap } from 'lucide-react';

export default function Vision() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'vision') {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    const section = document.getElementById('vision');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" className="py-12 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Main vision statement */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-primary/10 to-cyan-tertiary/10 border border-cyan-primary/20 rounded-full px-6 py-3 mb-12">
              <Zap className="w-5 h-5 text-cyan-primary" />
              <span className="text-cyan-primary font-medium">Our Vision</span>
            </div>
            
            <h2 className="text-white leading-tight mb-8 max-w-4xl mx-auto" style={{fontSize: '48px', fontWeight: '700'}}>
              Building the smarter, safer future of{' '}
              <span className="bg-gradient-to-r from-cyan-primary via-cyan-quaternary to-cyan-tertiary bg-clip-text text-transparent">
                Australian construction
              </span>
            </h2>
            
            <p className="text-silver-secondary text-lg font-light max-w-3xl mx-auto leading-relaxed">
              We envision a construction industry where AI oversight eliminates preventable delays, 
              reduces safety incidents, and empowers teams to build with unprecedented efficiency.
            </p>
          </div>

          {/* Vision pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Zero Preventable Incidents",
                desc: "AI-powered safety monitoring that identifies and prevents hazards before they occur"
              },
              {
                title: "Predictive Project Management", 
                desc: "Intelligent forecasting that keeps projects on time and within budget"
              },
              {
                title: "Industry Transformation",
                desc: "Leading Australia's construction evolution through responsible AI adoption"
              }
            ].map((pillar, index) => (
              <div key={index} 
                   className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300 h-full text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-silver-secondary leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}