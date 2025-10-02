import React, { useState, useEffect } from 'react';
import { UploadCloud, MessageSquare, FolderX } from 'lucide-react'; // Icons for the points

export default function WhatItDoes() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'what-it-does') {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    const section = document.getElementById('what-it-does');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: UploadCloud,
      text: "Upload your plans, safety reports, or quotes."
    },
    {
      icon: MessageSquare,
      text: "Ask a question in plain language and get an instant, sourced answer from secure project memory."
    },
    {
      icon: FolderX, // Using FolderX to represent "no more digging"
      text: "No more digging through folders or chasing paperwork."
    }
  ];

  return (
    <section id="what-it-does" className="py-8 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Header */}
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-white mb-4 leading-tight text-2xl sm:text-3xl lg:text-4xl font-bold" id="ai-site-features">
              What <span className="bg-gradient-to-r from-cyan-primary via-cyan-quaternary to-cyan-tertiary bg-clip-text text-transparent">AI² Site</span> Does
            </h2>
            <p className="text-silver-secondary mx-auto font-light max-w-2xl text-sm lg:text-base px-2 md:px-4" role="doc-subtitle">
              AI² Site turns your project documents into a smart, searchable system.
            </p>
          </div>

          {/* Feature List */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 lg:p-8">
            <ul className="space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-silver-secondary text-sm md:text-base lg:text-lg leading-relaxed">
                    {feature.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}