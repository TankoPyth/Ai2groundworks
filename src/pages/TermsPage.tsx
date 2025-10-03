import React, { useState, useEffect } from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle, Shield, Users, Building2 } from 'lucide-react';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

      <main className="pt-24 pb-12 relative bg-transparent">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-white mb-4 leading-tight text-4xl lg:text-5xl font-bold">
              Terms of <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">Use</span>
            </h1>
            <p className="text-silver-secondary text-lg font-light">
              Terms and conditions for using Ai²Groundworks services
            </p>
            <p className="text-silver-tertiary text-sm mt-2">
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10">
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                
                {/* Introduction */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-cyan-primary" />
                    <h2 className="text-2xl font-bold text-white">Introduction</h2>
                  </div>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      Welcome to Ai²Groundworks. These Terms of Use ("Terms") govern your access to and use of our 
                      artificial intelligence-powered construction oversight platform and related services (collectively, the "Service").
                    </p>
                    <p>
                      By accessing or using our Service, you agree to be bound by these Terms. If you disagree with 
                      any part of these terms, then you may not access the Service.
                    </p>
                  </div>
                </section>

                {/* Service Description */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Building2 className="w-6 h-6 text-cyan-primary" />
                    <h2 className="text-2xl font-bold text-white">Service Description</h2>
                  </div>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      Ai²Groundworks provides an AI-powered platform designed to enhance construction project oversight through:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Document intelligence and analysis</li>
                      <li>Real-time project monitoring and insights</li>
                      <li>Safety compliance tracking</li>
                      <li>Predictive analytics for project management</li>
                      <li>Risk identification and mitigation recommendations</li>
                    </ul>
                  </div>
                </section>

                {/* User Responsibilities */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-cyan-primary" />
                    <h2 className="text-2xl font-bold text-white">User Responsibilities</h2>
                  </div>
                  <div className="space-y-4 text-silver-secondary">
                    <p>As a user of our Service, you agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate and complete information when registering and using the Service</li>
                      <li>Maintain the security and confidentiality of your account credentials</li>
                      <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
                      <li>Comply with all applicable laws, regulations, and industry standards</li>
                      <li>Not attempt to reverse engineer, modify, or create derivative works of our AI technology</li>
                      <li>Not use the Service to store, transmit, or distribute harmful, illegal, or inappropriate content</li>
                    </ul>
                  </div>
                </section>

                {/* Data and Privacy */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-6 h-6 text-cyan-primary" />
                    <h2 className="text-2xl font-bold text-white">Data and Privacy</h2>
                  </div>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      Your project data and information remain your property. We collect and process data as described 
                      in our Privacy Policy to provide and improve our services.
                    </p>
                    <p>Key data principles:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Data is encrypted in transit and at rest</li>
                      <li>Access is limited to authorized personnel only</li>
                      <li>Data is stored in secure Australian data centers</li>
                      <li>We comply with Australian Privacy Principles</li>
                      <li>You retain ownership of your project data</li>
                    </ul>
                  </div>
                </section>

                {/* AI Technology Disclaimer */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-500" />
                    <h2 className="text-2xl font-bold text-white">AI Technology Disclaimer</h2>
                  </div>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      <strong className="text-white">Important:</strong> Our AI-powered insights and recommendations are tools 
                      to assist your decision-making process, not replace professional judgment or expertise.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>AI recommendations should be validated by qualified professionals</li>
                      <li>Users remain fully responsible for all construction decisions and safety protocols</li>
                      <li>Our Service does not guarantee project outcomes or compliance with regulations</li>
                      <li>Always consult with licensed professionals for critical decisions</li>
                    </ul>
                  </div>
                </section>

                {/* Pilot Program Terms */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="w-6 h-6 text-cyan-primary" />
                    <h2 className="text-2xl font-bold text-white">Pilot Program Terms</h2>
                  </div>
                  <div className="space-y-4 text-silver-secondary">
                    <p>Our pilot program provides qualified participants with:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>3-month complimentary access to the Ai²Groundworks platform</li>
                      <li>Dedicated onboarding and technical support</li>
                      <li>Direct input on product development and feature requests</li>
                      <li>Priority access to new features and updates</li>
                    </ul>
                    <p>Pilot program conditions:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Participation is subject to application approval</li>
                      <li>Access may be terminated at any time with reasonable notice</li>
                      <li>Participants agree to provide feedback and usage data</li>
                      <li>Case study participation may be requested (with your consent)</li>
                      <li>No service level agreements apply during the pilot period</li>
                    </ul>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      The Ai²Groundworks platform, including our AI models, algorithms, software, and documentation, 
                      is protected by intellectual property laws and remains our exclusive property.
                    </p>
                    <p>You receive a limited, non-exclusive license to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access and use the Service for your construction projects</li>
                      <li>Generate reports and insights for your internal use</li>
                    </ul>
                    <p>You may not:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Copy, modify, or create derivative works of our technology</li>
                      <li>Reverse engineer or attempt to extract our AI models</li>
                      <li>Resell or redistribute our Service to third parties</li>
                    </ul>
                  </div>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-500" />
                    <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
                  </div>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      <strong className="text-white">Critical Notice:</strong> Ai²Groundworks provides AI-powered insights 
                      and recommendations as decision-support tools only.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Users retain full responsibility for all construction decisions, safety protocols, and regulatory compliance</li>
                      <li>Our Service does not replace professional engineering, safety, or project management expertise</li>
                      <li>We are not liable for project delays, cost overruns, safety incidents, or regulatory violations</li>
                      <li>Our total liability is limited to the fees paid for the Service (if any)</li>
                      <li>We provide the Service "as is" without warranties of any kind</li>
                    </ul>
                  </div>
                </section>

                {/* Service Availability */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      We strive to maintain high service availability but cannot guarantee uninterrupted access. 
                      The Service may be temporarily unavailable due to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Scheduled maintenance and updates</li>
                      <li>Technical issues or system failures</li>
                      <li>Third-party service dependencies</li>
                      <li>Force majeure events</li>
                    </ul>
                  </div>
                </section>

                {/* Termination */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      Either party may terminate access to the Service at any time with reasonable notice. 
                      Upon termination:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Your access to the platform will cease immediately</li>
                      <li>We will securely delete your data according to our retention policies</li>
                      <li>You may request a final export of your data within 30 days</li>
                      <li>All licenses granted under these Terms will terminate</li>
                    </ul>
                  </div>
                </section>

                {/* Updates to Terms */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Updates to Terms</h2>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      We may update these Terms from time to time. We will notify users of material changes via:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Email notification to registered users</li>
                      <li>In-platform notifications</li>
                      <li>Updates to this page with revision dates</li>
                    </ul>
                    <p>
                      Continued use of the Service after changes constitutes acceptance of the updated Terms.
                    </p>
                  </div>
                </section>

                {/* Australian Law */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      These Terms are governed by Australian law. Any disputes arising from these Terms or 
                      your use of the Service will be resolved in Australian courts.
                    </p>
                    <p>
                      We comply with Australian Consumer Law and the Competition and Consumer Act 2010. 
                      Nothing in these Terms excludes, restricts, or modifies any consumer guarantees or 
                      rights that cannot be excluded under Australian law.
                    </p>
                  </div>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                  <div className="space-y-4 text-silver-secondary">
                    <p>For questions about these Terms or our Service, contact us:</p>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p><strong className="text-white">Email:</strong> legal@ai2groundworks.com.au</p>
                          <p><strong className="text-white">General Inquiries:</strong> info@ai2groundworks.com.au</p>
                        </div>
                        <div>
                          <p><strong className="text-white">Phone:</strong> +61 433 382 365</p>
                          <p><strong className="text-white">Business Hours:</strong> 9 AM - 5 PM AEST</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Acknowledgment */}
                <section className="border-t border-white/10 pt-8">
                  <div className="bg-cyan-primary/10 border border-cyan-primary/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Acknowledgment</h3>
                    <p className="text-silver-secondary">
                      By using Ai²Groundworks, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. 
                      You also acknowledge that you have read and understood our Privacy Policy.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </BackgroundGradientAnimation>
  );
}