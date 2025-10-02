import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhatItDoes from '../components/WhatItDoes';
import VisualBreak from '../components/VisualBreak';
import RoleFeatures from '../components/RoleFeatures';
import SectionDivider from '../components/SectionDivider';
import PilotProgram from '../components/PilotProgram';
import Footer from '../components/Footer';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-primary">
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
        <div className="relative z-10">
          <Hero />
          <WhatItDoes />
          <HowItWorks />
          <VisualBreak />
          <RoleFeatures />
          <Footer />
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}