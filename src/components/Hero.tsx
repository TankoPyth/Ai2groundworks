import React, { useEffect, useState } from 'react';
import { Gift, Calendar, Brain, MessageSquare, ClipboardList, Users } from 'lucide-react';
import Header from './Header';
import WaitlistModal from './WaitlistModal';
import heroBg from '../assets/images/john-kakuk-HvvPceHYLOg-unsplash-web.jpg';

const WAITLIST_TARGET = new Date('2026-09-23T00:00:00');

function getTimeLeft() {
  const remaining = Math.max(WAITLIST_TARGET.getTime() - Date.now(), 0);
  return {
    days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((remaining / (1000 * 60)) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  };
}

const features = [
  {
    icon: Brain,
    title: 'Real project memory',
    desc: 'Capture what happens. Nothing gets lost.'
  },
  {
    icon: MessageSquare,
    title: 'Ask. Find. Know.',
    desc: 'Ask questions in plain language. Get answers from your site.'
  },
  {
    icon: ClipboardList,
    title: 'Plan. Do. Report.',
    desc: 'Plan work, track progress and create reports instantly.'
  },
  {
    icon: Users,
    title: 'Built for site teams',
    desc: 'Practical AI tools that make your job easier, every day.'
  }
];

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <>
      <Header />

      <section className="relative overflow-hidden min-h-screen flex flex-col pt-16">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover object-[80%_50%]"
          />
          <div className="absolute inset-0 bg-dark-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/85 to-dark-primary/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/20 via-transparent to-dark-primary" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-14">
            <div className="max-w-xl">
              <h1 className="font-extrabold uppercase leading-[0.95] tracking-tight text-white">
                <span className="block text-4xl sm:text-5xl lg:text-6xl">
                  AI<sup className="text-cyan-primary text-[0.5em] top-[-0.5em]">2</sup>Site
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl mt-1 sm:mt-2">
                  Beta <span className="text-cyan-primary">is coming.</span>
                </span>
              </h1>

              <div className="w-16 h-1 bg-cyan-primary rounded-full my-4 sm:my-6" />

              <p className="text-silver-secondary text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Be one of the first to use the intelligence layer for civil construction.
              </p>

              <div className="flex items-start gap-3 border border-white/15 bg-white/5 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-4 mb-6 sm:mb-8">
                <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-cyan-primary/10 border border-cyan-primary/30 flex items-center justify-center">
                  <Gift className="w-4 h-4 text-cyan-primary" />
                </div>
                <p className="text-silver-secondary text-sm sm:text-base pt-1">
                  Join the waitlist for the opportunity to receive{' '}
                  <span className="text-cyan-primary font-semibold">30 days free access</span> to AI²Site Beta.
                </p>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                {timeUnits.map((unit, i) => (
                  <React.Fragment key={unit.label}>
                    <div className="text-center min-w-[3rem] sm:min-w-[3.5rem]">
                      <div className="text-4xl sm:text-5xl font-bold text-white tabular-nums">
                        {String(unit.value).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] sm:text-xs tracking-widest text-silver-tertiary uppercase mt-1">
                        {unit.label}
                      </div>
                    </div>
                    {i < timeUnits.length - 1 && (
                      <div className="text-3xl sm:text-4xl font-bold text-cyan-primary/50 pt-1">:</div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="flex items-center gap-2 text-silver-secondary mb-6 sm:mb-8">
                <Calendar className="w-4 h-4 text-cyan-primary flex-shrink-0" />
                <span className="tracking-[0.15em] text-sm font-medium uppercase">23 September 2026</span>
              </div>

              <button
                type="button"
                onClick={() => setIsWaitlistOpen(true)}
                className="w-full sm:w-auto bg-cyan-primary hover:bg-cyan-quaternary text-dark-primary font-bold uppercase tracking-wide text-sm sm:text-base px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg"
              >
                Join the waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Bottom feature strip */}
        <div className="relative z-10 border-t border-white/10 bg-dark-primary/70 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-primary flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wide mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-silver-tertiary text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
}
