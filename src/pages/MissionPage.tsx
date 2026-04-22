import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import missionImage from '../assets/images/217383FB-B6ED-4316-A775-1F6E4F7DE0A1.png';

export default function MissionPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden text-white font-sans antialiased flex flex-col">

      {/* Full-page hero background */}
      <div className="absolute inset-0 z-0">
        <img
          src={missionImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/90 via-dark-primary/65 to-dark-primary/95" />
      </div>

      <Header />

      <main className="relative z-10 flex-1 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">

          {/* Page title */}
          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white mb-4 leading-tight text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">Mission</span>
            </h1>
            <p className="text-silver-secondary text-sm sm:text-base lg:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Building the future of construction through AI-powered oversight
            </p>
          </div>

          {/* Mission Statement Card */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 mb-8 hover:bg-white/8 hover:border-cyan-primary/20 transition-all duration-500">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-6">
                  AI² GroundWorks{' '}
                  <span className="bg-gradient-to-r from-cyan-primary via-cyan-quaternary to-cyan-tertiary bg-clip-text text-transparent">
                    Mission
                  </span>{' '}
                  Statement
                </h2>

                <div className="space-y-4 md:space-y-5 text-sm sm:text-base lg:text-lg leading-relaxed">
                  <p className="text-silver-secondary">
                    At AI² GroundWorks, our mission is to bring{' '}
                    <span className="text-white font-semibold">clarity, care, and capability</span>{' '}
                    to civil construction through AI oversight.
                  </p>

                  <p className="text-silver-secondary">
                    We believe in{' '}
                    <span className="text-cyan-primary font-semibold">working hard, lifting others up</span>
                    , and pushing projects toward what's possible — one job at a time.
                  </p>

                  <p className="text-silver-secondary">
                    By combining practical AI with real human values, we're building a future where construction runs{' '}
                    <span className="text-white font-semibold">leaner, safer, and smarter</span>{' '}
                    — not by replacing people, but by supporting them with tools that make their jobs easier, their teams stronger, and their outcomes better.
                  </p>

                  <div className="bg-gradient-to-r from-cyan-primary/10 to-cyan-tertiary/10 border border-cyan-primary/20 rounded-xl p-4 md:p-6 mt-4">
                    <p className="text-white font-semibold text-base sm:text-lg">
                      Our goal is simple: raise the standard and help everyone grow along the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA — centred */}
          <div className={`text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3">
                Want to follow our progress?
              </h3>
              <p className="text-silver-secondary font-light text-sm sm:text-base mb-6">
                We're building this in the open — reach out if you're curious about what we're working on.
              </p>
              <a
                href="mailto:dale@ai2groundworks.com.au"
                className="inline-block bg-gradient-to-r from-cyan-primary to-cyan-tertiary text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-300 text-sm sm:text-base"
              >
                Get in touch
              </a>
            </div>

            {/* Contact info */}
            <div className="space-y-2">
              <p className="text-silver-tertiary text-xs sm:text-sm">Questions about our mission?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:dale@ai2groundworks.com.au" className="text-cyan-primary hover:text-white transition-colors text-sm">
                  dale@ai2groundworks.com.au
                </a>
                <a href="tel:+61433382365" className="text-cyan-primary hover:text-white transition-colors text-sm">
                  +61 433 382 365
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
