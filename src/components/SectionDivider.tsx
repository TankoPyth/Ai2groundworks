import React, { useState, useEffect } from 'react';
import { Zap, Building2, Target, TrendingUp } from 'lucide-react';

export default function SectionDivider() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'section-divider') {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    const section = document.getElementById('section-divider');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="section-divider" className="py-8 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Main content container */}
          <div className="text-center">
            <div className="relative">
              {/* Main content container */}
              <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6 relative overflow-hidden max-w-4xl mx-auto">
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon row */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="h-4 w-px bg-white/20"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-tertiary to-cyan-quaternary rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div className="h-4 w-px bg-white/20"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-quaternary to-cyan-primary rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div className="h-4 w-px bg-white/20"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-primary to-cyan-secondary rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  {/* Main heading */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    <span className="underline decoration-cyan-primary decoration-2 underline-offset-4">Transforming</span> Australian Construction
                  </h3>
                  
                  {/* Description */}
                  <p className="text-silver-secondary font-light max-w-2xl mx-auto leading-relaxed text-base">
                    AI-powered oversight that delivers measurable results across every aspect of your projects
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-2 right-4 w-1.5 h-1.5 bg-cyan-primary rounded-full animate-ping"></div>
                <div className="absolute bottom-2 left-4 w-1 h-1 bg-cyan-tertiary rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-3 -left-6 w-8 h-8 bg-cyan-primary/15 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -bottom-3 -right-6 w-6 h-6 bg-cyan-tertiary/20 rounded-full blur-md animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>

          {/* Gradient line */}
          <div className="mt-6 mb-3">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-primary/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}