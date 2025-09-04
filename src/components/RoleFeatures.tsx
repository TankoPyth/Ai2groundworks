import React, { useState, useEffect } from 'react';
import { Briefcase, Shield, TrendingUp, CheckCircle, Target } from 'lucide-react';

export default function RoleFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'role-features') {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    const section = document.getElementById('role-features');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const roles = [
    { 
      icon: Briefcase, 
      title: "For Project Managers", 
      desc: "Stay ahead of deadlines with predictive insights and automated progress tracking.",
      features: ["Timeline optimization", "Resource allocation", "Risk mitigation", "Progress tracking"],
      roleText: "Project optimization"
    },
    { 
      icon: Shield, 
      title: "For Safety Officers", 
      desc: "Proactive safety management with AI-powered hazard identification and compliance monitoring.",
      features: ["Hazard detection", "Compliance tracking", "Incident prediction", "Safety protocols"],
      roleText: "Safety intelligence"
    },
    { 
      icon: TrendingUp, 
      title: "For Executives", 
      desc: "Strategic oversight with portfolio-wide analytics and performance insights.",
      features: ["Portfolio overview", "ROI analysis", "Strategic insights", "Performance metrics"],
      roleText: "Strategic oversight"
    }
  ];

  return (
    <section id="role-features" className="py-12 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-white mb-8 leading-tight text-3xl sm:text-4xl lg:text-5xl font-bold">
            Built for <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">every</span> role
          </h2>
          <p className="text-silver-secondary text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Tailored insights and tools for project managers, safety officers, and executives
          </p>
        </div>

        <div className="space-y-12">
          {roles.map((item, index) => (
            <div key={index} 
                 className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Content Side */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-2xl flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-medium text-cyan-primary">
                      {item.roleText}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                    <p className="text-silver-secondary text-base sm:text-lg leading-relaxed mb-4">{item.desc}</p>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {item.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-3 bg-white/5 rounded-lg p-4 border border-white/10">
                          <CheckCircle className="w-5 h-5 text-cyan-primary flex-shrink-0" />
                          <span className="text-silver-secondary font-medium text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 flex justify-center hidden lg:flex">
                  <div className="relative">
                    <div className="w-80 h-52 sm:w-96 sm:h-64 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-cyan-primary/30 transition-all duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-cyan-primary/20 to-cyan-tertiary/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <item.icon className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-primary/60" />
                        
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-primary rounded-full animate-ping"></div>
                          <div className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-tertiary rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                          <div className="absolute top-1/2 left-4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating accent elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-cyan-primary/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-cyan-tertiary/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '1.5s'}}></div>
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