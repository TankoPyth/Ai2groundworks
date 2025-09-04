import React, { useState, useEffect } from 'react';
import { Building2, Zap, Target } from 'lucide-react';

export default function VisualBreak() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'visual-break') {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    const section = document.getElementById('visual-break');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="visual-break" className="py-12 relative overflow-hidden bg-transparent">
      {/* Animated background elements */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Central banner */}
          <div className="text-center">
            <div className="relative inline-block">
              {/* Main banner container */}
              <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl px-20 py-8 relative overflow-hidden w-full max-w-5xl">
                
                {/* Animated border glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-primary/20 via-transparent to-cyan-tertiary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center space-x-6 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="h-6 w-px bg-white/20"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-tertiary to-cyan-quaternary rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="h-6 w-px bg-white/20"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-quaternary to-cyan-primary rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    Transforming Australian Construction
                  </h3>
                  <p className="text-silver-secondary font-light max-w-3xl mx-auto leading-relaxed">
                    AI-powered oversight that delivers measurable results across every aspect of your projects
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-3 right-6 w-2 h-2 bg-cyan-primary rounded-full animate-ping"></div>
                <div className="absolute bottom-3 left-6 w-1.5 h-1.5 bg-cyan-tertiary rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -left-8 w-12 h-12 bg-cyan-primary/15 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-8 w-10 h-10 bg-cyan-tertiary/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>

          {/* Gradient divider */}
          <div className="mt-12 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-primary/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}