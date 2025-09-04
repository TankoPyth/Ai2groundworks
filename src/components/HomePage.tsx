import React from 'react';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import VisualBreak from './VisualBreak';
import ValuePillars from './ValuePillars';
import RoleFeatures from './RoleFeatures';
import SectionDivider from './SectionDivider';
import PilotProgram from './PilotProgram';
import Footer from './Footer';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

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
          <HowItWorks />
          <VisualBreak />
          <ValuePillars />
          <SectionDivider />
          <RoleFeatures />
          <Footer />
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}