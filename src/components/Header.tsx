import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Target, Users, MessageSquare, Building2, Menu, X } from 'lucide-react';
import logoSpin from '../assets/images/logo_spin.gif';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { cn } from '../lib/utils';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/80 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 touch-manipulation z-50"
              aria-label="Toggle navigation menu"
              type="button"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 active:opacity-70 transition-opacity flex-1 md:flex-initial justify-center md:justify-start touch-manipulation">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                <img 
                  src={logoSpin}
                  alt="Ai²Groundworks Logo" 
                  className="w-full h-full object-contain" 
                  onError={(e) => {
                    console.log('Logo failed to load, falling back to icon');
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentNode) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-lg flex items-center justify-center';
                      fallback.innerHTML = '<svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>';
                      target.parentNode.appendChild(fallback);
                    }
                  }}
                  onLoad={() => {
                    console.log('Logo loaded successfully');
                  }}
                />
              </div>
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white tracking-tight">Ai²Groundworks</span>
               <div className="bg-stone-900 border-2 border-stone-700 rounded-xl shadow-2xl max-w-xs ml-auto mr-4">
            
            {/* Navigation and Contact grouped together */}
                 <div className="flex items-center justify-between p-3 border-b-2 border-stone-700">
                   <span className="text-base font-bold text-white">Menu</span>
              <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-lg py-0.5 px-0.5 rounded-full shadow-lg">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.name;

                  return (
                    <Link
                      key={item.name}
                      to={item.url}
                      className={cn(
                        "relative cursor-pointer text-sm font-semibold px-4 lg:px-5 py-1.5 rounded-full transition-all duration-300 ease-out",
                        "text-white/80 hover:text-white hover:bg-white/10",
                        isActive && "bg-white/10 text-white"
                      )}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <div className="absolute inset-0 w-full bg-white/5 rounded-full -z-10 animate-pulse">
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                            <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2 animate-pulse" />
                            <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1 animate-pulse" />
                            <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2 animate-pulse" />
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
                className="px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 text-xs sm:text-sm whitespace-nowrap"
                onClick={() => {
                  // Dispatch custom event to open modal from any page
                  window.dispatchEvent(new CustomEvent('openPilotModal'));
                }}
              />
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-40 md:hidden mt-2 px-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            onClick={closeMobileMenu}
          />
          
          {/* Compact Dropdown - Right below header */}
          <div className="bg-dark-primary border border-white/20 rounded-xl shadow-xl max-w-xs ml-auto mr-4">
            
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-white/10">
              <span className="text-base font-semibold text-white">Menu</span>
              <button
                onClick={closeMobileMenu}
                className="w-7 h-7 bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 touch-manipulation"
                aria-label="Close navigation menu"
                type="button"
              >
                <X className="w-3 h-3 text-white" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-3">
              <div className="space-y-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.url;

                  return (
                    <Link
                      key={item.name}
                      to={item.url}
                      onClick={closeMobileMenu}
                               ? "bg-cyan-primary text-white shadow-lg" 
                               : "text-white hover:bg-stone-700 hover:shadow-md"
                        isActive
                          ? "bg-cyan-primary/30 text-cyan-primary font-medium" 
                          : "text-white hover:bg-white/10"
                      )}
                    >
                     <X className="w-4 h-4 text-white font-bold" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
                 <div className="p-3 border-t-2 border-stone-700">

            {/* CTA Section */}
            <div className="p-3 border-t border-white/10">
              <button
                onClick={() => {
                     className="w-full bg-gradient-to-r from-cyan-primary to-cyan-tertiary text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-xl active:scale-95 touch-manipulation text-sm shadow-lg"
                  closeMobileMenu();
                             "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-300 touch-manipulation active:scale-95 font-medium",
                className="w-full bg-gradient-to-r from-cyan-primary to-cyan-tertiary text-white font-medium py-2.5 px-3 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 touch-manipulation text-sm"
                type="button"
              >
                   <div className="flex items-center justify-center space-x-2 text-stone-400 mt-2.5">
              </button>
              
              <div className="flex items-center justify-center space-x-2 text-silver-tertiary mt-2.5">
                <div className="w-1.5 h-1.5 bg-cyan-primary rounded-full animate-pulse"></div>
                <span className="text-xs">3-month pilot</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}