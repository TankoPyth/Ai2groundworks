import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Target, Users, MessageSquare, Building2 } from 'lucide-react';
import logoSpin from '../assets/images/logo_spin.gif';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { cn } from '../lib/utils';

export default function Header() {
  const location = useLocation();
  
  // Determine active tab based on current route
  const getActiveTab = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/mission':
        return 'Our mission';
      case '/team':
        return 'The Team';
      case '/contact':
        return 'Contact';
      default:
        return 'Home';
    }
  };
  
  const activeTab = getActiveTab();

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Our mission', url: '/mission', icon: Target },
    { name: 'The Team', url: '/team', icon: Users },
    { name: 'Contact', url: '/contact', icon: MessageSquare }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/80 backdrop-blur-xl border-b border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src={logoSpin}
                alt="Ai²Groundworks Logo" 
                className="w-full h-full object-contain" 
                onError={(e) => {
                  console.log('Logo failed to load, falling back to icon');
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.innerHTML = '<svg class="w-6 h-6 text-cyan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>';
                  target.parentNode?.appendChild(fallback);
                }}
                onLoad={() => {
                  console.log('Logo loaded successfully');
                }}
              />
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">Ai²Groundworks</span>
          </Link>
          
          {/* Navigation and Contact grouped together */}
          <div className="flex items-center space-x-3">
            {/* Tubelight Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-background/5 border border-border backdrop-blur-lg py-0.5 px-0.5 rounded-full shadow-lg">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;

                return (
                  <Link
                    key={item.name}
                    to={item.url}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-5 py-1.5 rounded-full transition-all duration-300 ease-out",
                      "text-foreground/80 hover:text-primary hover:bg-muted/50",
                      isActive && "bg-muted text-primary"
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10 animate-pulse">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                          <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2 animate-pulse" />
                          <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1 animate-pulse" />
                          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2 animate-pulse" />
                        </div>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
            
            {/* Contact Button */}
            <InteractiveHoverButton 
              text="Contact sales" 
              variant="primary"
              className="px-5 py-1.5 text-sm"
              onClick={() => {
                // Dispatch custom event to open modal from any page
                window.dispatchEvent(new CustomEvent('openPilotModal'));
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}