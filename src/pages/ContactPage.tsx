import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import Header from '../components/Header';
import Footer from '../components/Footer';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '' });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      const response = await fetch('https://formspree.io/f/mgvnykge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formState, _subject: 'Waitlist signup — AI² GroundWorks' }),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(28, 25, 23)"
      gradientBackgroundEnd="rgb(41, 37, 36)"
      firstColor="255, 255, 255"
      secondColor="229, 231, 235"
      thirdColor="209, 213, 219"
      fourthColor="156, 163, 175"
      fifthColor="107, 114, 128"
      pointerColor="255, 255, 255"
      size="80%"
      blendingValue="soft-light"
      interactive={true}
      containerClassName="min-h-screen"
      className="text-white font-sans antialiased"
    >
      <Header />

      <main className="pt-24 pb-12 relative bg-transparent min-h-screen flex flex-col justify-center">
        <div className="max-w-2xl mx-auto px-6 w-full">

          {/* Heading */}
          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white mb-5 leading-tight text-3xl sm:text-4xl lg:text-5xl font-bold">
              Interested in what{' '}
              <span className="bg-gradient-to-r from-cyan-primary via-cyan-quaternary to-cyan-tertiary bg-clip-text text-transparent">
                we're building?
              </span>
            </h1>
            <p className="text-silver-secondary text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              We're currently running AI on live civil jobs and using AI² Site day to day on site as we refine it in real time.
              <br className="hidden sm:block" />
              <span className="mt-2 block">It's still early — but if you want to follow along or be one of the first to try it, reach out.</span>
            </p>
          </div>

          {/* Quick contact CTA */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="mailto:dale@ai2groundworks.com.au"
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-primary to-cyan-tertiary text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" />
              <span>Get in touch</span>
            </a>
            <a
              href="#waitlist"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-primary/40 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Join the waitlist</span>
            </a>
          </div>

          {/* Waitlist form */}
          <div
            id="waitlist"
            className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-white font-bold text-xl mb-2">Join the waitlist</h2>
            <p className="text-silver-secondary text-sm mb-6">Be one of the first to get access when we open up.</p>

            {submitStatus === 'success' ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-cyan-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-cyan-primary" />
                </div>
                <p className="text-white font-semibold text-lg mb-1">You're on the list!</p>
                <p className="text-silver-secondary text-sm">We'll be in touch. Thanks for your interest in AI² Site.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-silver-secondary text-sm mb-1.5">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-silver-tertiary text-sm focus:outline-none focus:border-cyan-primary/60 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-silver-secondary text-sm mb-1.5">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="you@company.com"
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-silver-tertiary text-sm focus:outline-none focus:border-cyan-primary/60 transition-colors"
                  />
                </div>

                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm">Something went wrong — please try again or email us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-gradient-to-r from-cyan-primary to-cyan-tertiary text-white font-semibold py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-300 disabled:opacity-60"
                >
                  {submitStatus === 'loading' ? 'Submitting…' : 'Join the waitlist'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-white font-semibold mb-4 text-base">Or reach out directly</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:dale@ai2groundworks.com.au"
                className="flex items-center space-x-3 text-silver-secondary hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 bg-white/10 group-hover:bg-cyan-primary/20 rounded-lg flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-cyan-primary" />
                </div>
                <span className="text-sm">dale@ai2groundworks.com.au</span>
              </a>
              <a
                href="tel:+61433382365"
                className="flex items-center space-x-3 text-silver-secondary hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 bg-white/10 group-hover:bg-cyan-primary/20 rounded-lg flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 text-cyan-primary" />
                </div>
                <span className="text-sm">+61 433 382 365</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </BackgroundGradientAnimation>
  );
}
