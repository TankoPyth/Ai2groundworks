import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, Home, Target, Users, MessageSquare, Building2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const location = useLocation();

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Our mission', url: '/mission', icon: Target },
    { name: 'The Team', url: '/team', icon: Users },
    { name: 'Contact', url: '/contact', icon: MessageSquare }
  ];

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close sidebar when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={handleBackdropClick}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-dark-primary/95 backdrop-blur-xl border-r border-white/10 z-50 transform transition-transform duration-300 ease-out md:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <Building2 className="w-6 h-6 text-cyan-primary" />
            <span className="text-xl font-semibold text-white">Ai²Groundworks</span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 touch-manipulation"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-6">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.url;

              return (
                <Link
                  key={item.name}
                  to={item.url}
                  onClick={onClose}
                  className={cn(
                    "flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 touch-manipulation active:scale-95",
                    isActive 
                      ? "bg-cyan-primary/20 border border-cyan-primary/30 text-cyan-primary" 
                      : "text-silver-secondary hover:text-white hover:bg-white/10"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* CTA Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('openPilotModal'));
              onClose();
            }}
            className="w-full bg-gradient-to-r from-cyan-primary to-cyan-tertiary text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg active:scale-95 touch-manipulation"
          >
            Apply for pilot program
          </button>
          
          <div className="flex items-center justify-center space-x-2 text-silver-tertiary mt-3">
            <div className="w-1.5 h-1.5 bg-cyan-primary rounded-full animate-pulse"></div>
            <span className="text-xs">3-month pilot</span>
          </div>
        </div>
      </div>
    </>
  );
}