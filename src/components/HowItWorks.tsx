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
    <section id="how-it-works" className="py-12 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-white mb-6 text-4xl lg:text-5xl font-bold">
            A <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">complete</span> platform for construction <span className="underline decoration-cyan-tertiary decoration-4 underline-offset-8">oversight</span>
          </h2>
          <p className="text-silver-secondary mx-auto font-light max-w-2xl">
            From document analysis to real-time insights, everything you need to run smarter construction projects.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((item, index) => (
            <div key={index} 
                 className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                    <p className="text-silver-secondary text-lg leading-relaxed mb-4">{item.desc}</p>
                    
                    <div className="space-y-3">
                      {item.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-cyan-primary rounded-full"></div>
                          <span className="text-silver-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-primary/30 transition-all duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-cyan-primary/20 to-cyan-tertiary/20 rounded-2xl flex items-center justify-center">
                        <item.icon className="w-24 h-24 text-cyan-primary/60" />
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-primary/30 rounded-full blur-sm animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-tertiary/40 rounded-full blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
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