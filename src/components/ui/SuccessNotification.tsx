import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SuccessNotificationProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  autoCloseDelay?: number;
}

export default function SuccessNotification({ 
  isVisible, 
  onClose, 
  title = "Message Sent!",
  message = "Thanks for reaching out. We'll be in touch soon.",
  autoCloseDelay = 5000 
}: SuccessNotificationProps) {
  
  // Auto close after delay
  useEffect(() => {
    if (isVisible && autoCloseDelay > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, autoCloseDelay, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-[200] max-w-md">
      <div className={cn(
        "bg-dark-primary/95 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl",
        "transform transition-all duration-500 ease-out",
        isVisible ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95"
      )}>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg flex items-center justify-center transition-all duration-300"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        {/* Content */}
        <div className="flex items-start space-x-4">
          {/* Success icon */}
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          
          {/* Text content */}
          <div className="flex-1 pt-1">
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-silver-secondary text-sm leading-relaxed mb-4">{message}</p>
            
            {/* Progress indicator */}
            <div className="flex items-center space-x-2 text-cyan-primary">
              <div className="w-2 h-2 bg-cyan-primary rounded-full animate-pulse"></div>
              <span className="text-xs">We typically respond within 24-48 hours</span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-2 right-12 w-1.5 h-1.5 bg-cyan-primary/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-2 left-4 w-1 h-1 bg-green-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
}