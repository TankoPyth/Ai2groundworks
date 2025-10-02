import React from 'react';

// Reusable animation configurations for consistent effects across components

export const fadeInUp = {
  initial: { opacity: 0, transform: 'translateY(20px)' },
  animate: { opacity: 1, transform: 'translateY(0px)' },
  transition: 'all 0.6s ease-out'
};

export const fadeInLeft = {
  initial: { opacity: 0, transform: 'translateX(-20px)' },
  animate: { opacity: 1, transform: 'translateX(0px)' },
  transition: 'all 0.6s ease-out'
};

export const fadeInRight = {
  initial: { opacity: 0, transform: 'translateX(20px)' },
  animate: { opacity: 1, transform: 'translateX(0px)' },
  transition: 'all 0.6s ease-out'
};

export const staggerDelay = (index: number) => ({
  transitionDelay: `${index * 100}ms` // Stripe's 100ms stagger timing
});

export const hoverLift = {
  transform: 'translateY(-4px)',
  transition: 'all 0.3s ease-out'
};

export const glowEffect = {
  boxShadow: '0 0 20px rgba(103, 207, 206, 0.3)',
  borderColor: 'rgba(103, 207, 206, 0.5)', // Vibrant CTA on neutral background
  transition: 'all 0.3s ease-out'
};

// Intersection Observer hook for scroll animations
export const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = React.useState<Set<string>>(new Set());

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id])); // Fade and slide up animations
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return visibleElements;
};