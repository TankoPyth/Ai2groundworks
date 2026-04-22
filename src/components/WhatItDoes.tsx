import React, { useState, useEffect } from 'react';
import screenshot1 from '../assets/images/ai2site-screenshot-1.png';
import screenshot2 from '../assets/images/ai2site-screenshot-2.png';
import underlayBg from '../assets/images/64E90382-99BF-4635-964E-EFB8DF0D7836.png';

export default function WhatItDoes() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === 'what-it-does') {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );
    const section = document.getElementById('what-it-does');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="what-it-does" className="relative overflow-hidden bg-transparent">

      {/* ── Screenshots zone ── */}
      <div className={`relative z-10 pt-12 pb-10 max-w-5xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-white mb-4 leading-tight text-2xl sm:text-3xl lg:text-4xl font-bold">
            See it in{' '}
            <span className="bg-gradient-to-r from-cyan-primary via-cyan-quaternary to-cyan-tertiary bg-clip-text text-transparent">
              action
            </span>
          </h2>
          <p className="text-silver-secondary font-light max-w-xl mx-auto text-sm lg:text-base">
            AI² Site running on live civil jobs — ask anything, get answers from your project documents instantly.
          </p>
        </div>

        {/* Screenshots side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl hover:border-cyan-primary/40 hover:scale-[1.01] transition-all duration-300">
            <img src={screenshot1} alt="AI² Site — dashboard" className="w-full h-auto object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl hover:border-cyan-primary/40 hover:scale-[1.01] transition-all duration-300">
            <img src={screenshot2} alt="AI² Site — site brain chat" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* ── Underlay tagline zone: 64E90382 flows behind ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={underlayBg}
            alt=""
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-transparent to-dark-primary" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/70 to-dark-primary/70" />
        </div>

        <div className="relative z-10 py-14 px-6 text-center max-w-2xl mx-auto">
          <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed">
            Ask anything about your project.
            <br />
            <span className="text-cyan-primary">Get answers in seconds.</span>
          </p>
          <p className="text-silver-secondary text-sm mt-4 font-light">
            No folders. No chasing paperwork. Just your project knowledge, always on hand.
          </p>
        </div>
      </div>

    </section>
  );
}
