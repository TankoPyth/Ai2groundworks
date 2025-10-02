import React, { useState, useEffect } from 'react';
import { Upload, Eye, BarChart3 } from 'lucide-react';

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'how-it-works') {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    const section = document.getElementById('how-it-works');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const steps = [
    { 
      icon: Upload, 
      title: "Document Intelligence", 
      desc: "Upload project documents and specifications. Our AI extracts key information and identifies potential issues before they become problems.",
      features: ["Automated document parsing", "Risk identification", "Compliance checking"]
    },
    { 
      icon: Eye, 
      title: "Real-time Oversight", 
      desc: "Continuous monitoring of project progress with intelligent alerts and recommendations based on industry best practices.",
      features: ["Progress tracking", "Predictive analytics", "Smart notifications"]
    },
    { 
      icon: BarChart3, 
      title: "Actionable Insights", 
      desc: "Transform raw data into strategic insights that help you make better decisions and optimize project outcomes.",
      features: ["Performance dashboards", "Trend analysis", "ROI optimization"]
    }
  ];

  return (
    <section id="how-it-works" className="py-8 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold" id="construction-oversight-platform">
            A <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">complete</span> platform for construction <span className="underline decoration-cyan-tertiary decoration-4 underline-offset-8">oversight</span>
          </h2>
          <p className="text-silver-secondary mx-auto font-light max-w-2xl text-sm lg:text-base px-2 md:px-4" role="doc-subtitle">
            From document analysis to real-time insights, everything you need to run smarter construction projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {steps.map((item, index) => (
            <div key={index} 
                 className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300 h-full">
                
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="text-center space-y-2 md:space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-silver-secondary text-sm leading-relaxed">{item.desc}</p>
                    
                  <div className="space-y-1 md:space-y-2">
                      {item.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-primary rounded-full"></div>
                          <span className="text-silver-secondary text-xs">{feature}</span>
                        </div>
                      ))}
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