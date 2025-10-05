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
      title: "For Site Supervisors", 
      desc: "Strategic oversight with portfolio-wide analytics and performance insights.",
      features: ["Portfolio overview", "ROI analysis", "Strategic insights", "Performance metrics"],
      roleText: "Strategic oversight"
    }
  ];

  return (
    <section id="role-features" className="py-8 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-white mb-4 leading-tight text-2xl sm:text-3xl lg:text-4xl font-bold">
            Built for <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">every</span> role
          </h2>
          <p className="text-silver-secondary text-sm lg:text-base font-light max-w-2xl mx-auto leading-relaxed px-4 lg:px-0">
            Tailored insights and tools for project managers, safety officers, and executives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((item, index) => (
            <div key={index} 
                 className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300 h-full">
                
                {/* Icon and Role Text */}
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-medium text-cyan-primary">
                    {item.roleText}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-silver-secondary text-sm leading-relaxed">{item.desc}</p>
                    
                  <div className="grid grid-cols-2 gap-2">
                      {item.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-2 bg-white/5 rounded-lg p-2 border border-white/10">
                          <CheckCircle className="w-3 h-3 text-cyan-primary flex-shrink-0" />
                          <span className="text-silver-secondary font-medium text-xs">{feature}</span>
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