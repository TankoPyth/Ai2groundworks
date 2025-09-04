import React, { useState, useEffect } from 'react';
import { Shield, Eye, Lock, FileText, Users, Database, Mail, Phone } from 'lucide-react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import Header from './Header';

export default function PrivacyPage() {
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-white mb-4 leading-tight text-4xl lg:text-5xl font-bold">
              Privacy <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">Policy</span>
            </h1>
            <p className="text-silver-secondary text-lg font-light">
              How we protect and handle your information
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
                    <FileText className="w-6 h-6 text-cyan-primary" />
                    <h2 className="text-2xl font-bold text-white">Introduction</h2>
                  </div>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      At Ai²Groundworks, we are committed to protecting your privacy and ensuring the security of your personal information. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                      AI-powered construction oversight platform and related services.
                    </p>
                    <p>
                      By using our services, you consent to the data practices described in this policy. If you do not agree with 
                      the practices described in this policy, please do not use our services.
                    </p>
                  </div>
                </section>

                {/* Information We Collect */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="w-6 h-6 text-cyan-primary" />
                    <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
                  </div>
                  <div className="space-y-4 text-silver-secondary">
                    <h3 className="text-xl font-semibold text-white">Personal Information</h3>
                    <p>We may collect the following types of personal information:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, company name, job title</li>
                      <li><strong className="text-white">Account Information:</strong> Username, password, and other account credentials</li>
                      <li><strong className="text-white">Professional Information:</strong> Company details, project information, industry role</li>
                      <li><strong className="text-white">Communication Data:</strong> Messages, feedback, and correspondence with our team</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6">Project Data</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Construction project documents and specifications</li>
                      <li>Project timelines, budgets, and progress reports</li>
                      <li>Safety reports and compliance documentation</li>
                      <li>Photos, videos, and other project-related media</li>
                      <li>AI-generated insights and recommendations</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6">Technical Information</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>IP address, browser type, and device information</li>
                      <li>Usage patterns and platform interaction data</li>
                      <li>Log files and system performance data</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </section>

                {/* How We Use Information */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Database className="w-6 h-6 text-cyan-primary" />
                    <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
                  </div>
                  <div className="space-y-4 text-silver-secondary">
                    <p>We use your information for the following purposes:</p>
                    
                    <h3 className="text-xl font-semibold text-white">Service Provision</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide and maintain our AI-powered construction oversight platform</li>
                      <li>Process and analyze your project documents</li>
                      <li>Generate insights, recommendations, and reports</li>
                      <li>Facilitate communication and collaboration features</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6">Account Management</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Create and manage your user account</li>
                      <li>Authenticate your identity and authorize access</li>
                      <li>Process pilot program applications</li>
                      <li>Provide customer support and technical assistance</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6">Communication</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Send important service updates and notifications</li>
                      <li>Respond to your inquiries and support requests</li>
                      <li>Share relevant industry insights and platform updates</li>
                      <li>Conduct user research and gather feedback</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6">Improvement and Development</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Improve our AI algorithms and platform functionality</li>
                      <li>Develop new features and services</li>
                      <li>Conduct analytics to understand usage patterns</li>
                      <li>Ensure platform security and prevent fraud</li>
                    </ul>
                  </div>
                </section>

                {/* Information Sharing */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-cyan-primary" />
                    <h2 className="text-2xl font-bold text-white">Information Sharing and Disclosure</h2>
                  </div>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      <strong className="text-white">We do not sell, trade, or rent your personal information to third parties.</strong> 
                      We may share your information only in the following circumstances:
                    </p>
                    
                    <h3 className="text-xl font-semibold text-white">With Your Consent</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>When you explicitly authorize us to share specific information</li>
                      <li>For case studies or testimonials (with your written permission)</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6">Service Providers</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Trusted third-party vendors who assist in platform operations</li>
                      <li>Cloud hosting and data storage providers</li>
                      <li>Email and communication service providers</li>
                      <li>Analytics and performance monitoring services</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6">Legal Requirements</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>To comply with applicable laws, regulations, or legal processes</li>
                      <li>To respond to lawful requests from public authorities</li>
                      <li>To protect our rights, property, or safety, or that of our users</li>
                      <li>In connection with business transfers or acquisitions</li>
                    </ul>
                  </div>
                </section>

                {/* Data Security */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Lock className="w-6 h-6 text-cyan-primary" />
                    <h2 className="text-2xl font-bold text-white">Data Security</h2>
                  </div>
                  <div className="space-y-4 text-silver-secondary">
                    <p>We implement comprehensive security measures to protect your information:</p>
                    
                    <h3 className="text-xl font-semibold text-white">Technical Safeguards</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>End-to-end encryption for data in transit and at rest</li>
                      <li>Multi-factor authentication for account access</li>
                      <li>Regular security audits and vulnerability assessments</li>
                      <li>Secure cloud infrastructure with industry-standard protections</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6">Administrative Safeguards</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access controls limiting data access to authorized personnel only</li>
                      <li>Regular security training for all team members</li>
                      <li>Incident response procedures for potential security breaches</li>
                      <li>Data retention policies to minimize unnecessary data storage</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6">Physical Safeguards</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Secure data centers with restricted physical access</li>
                      <li>Environmental controls and monitoring systems</li>
                      <li>Backup and disaster recovery procedures</li>
                    </ul>
                  </div>
                </section>

                {/* Data Retention */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
                  <div className="space-y-4 text-silver-secondary">
                    <p>We retain your information for as long as necessary to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide our services and maintain your account</li>
                      <li>Comply with legal obligations and regulatory requirements</li>
                      <li>Resolve disputes and enforce our agreements</li>
                      <li>Improve our services and develop new features</li>
                    </ul>
                    
                    <p className="mt-4">
                      <strong className="text-white">Project Data:</strong> Retained for the duration of your account plus 12 months, 
                      unless you request earlier deletion or legal requirements mandate longer retention.
                    </p>
                    
                    <p>
                      <strong className="text-white">Account Information:</strong> Retained for 7 years after account closure 
                      for legal and business purposes, then securely deleted.
                    </p>
                  </div>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h2>
                  <div className="space-y-4 text-silver-secondary">
                    <p>Under Australian privacy law and our commitment to transparency, you have the following rights:</p>
                    
                    <h3 className="text-xl font-semibold text-white">Access and Portability</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Request access to your personal information we hold</li>
                      <li>Receive a copy of your data in a portable format</li>
                      <li>Understand how your information is being used</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6">Correction and Updates</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Correct inaccurate or incomplete information</li>
                      <li>Update your account and profile information</li>
                      <li>Request verification of data accuracy</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6">Deletion and Restriction</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Request deletion of your personal information</li>
                      <li>Restrict processing of your data in certain circumstances</li>
                      <li>Withdraw consent for specific data uses</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6">Communication Preferences</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Opt out of marketing communications</li>
                      <li>Choose your notification preferences</li>
                      <li>Manage cookie and tracking preferences</li>
                    </ul>
                  </div>
                </section>

                {/* International Transfers */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      Your data is primarily stored and processed in Australia using secure, Australian-based data centers. 
                      In some cases, we may transfer data internationally for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Cloud service operations and backup systems</li>
                      <li>Technical support and platform maintenance</li>
                      <li>AI model training and improvement (anonymized data only)</li>
                    </ul>
                    <p>
                      When international transfers occur, we ensure appropriate safeguards are in place, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Adequacy decisions or standard contractual clauses</li>
                      <li>Encryption and security measures during transfer</li>
                      <li>Compliance with Australian Privacy Principles</li>
                    </ul>
                  </div>
                </section>

                {/* Cookies and Tracking */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
                  <div className="space-y-4 text-silver-secondary">
                    <p>We use cookies and similar technologies to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Remember your preferences and settings</li>
                      <li>Analyze platform usage and performance</li>
                      <li>Provide personalized experiences</li>
                      <li>Ensure platform security and prevent fraud</li>
                    </ul>
                    
                    <p>
                      You can control cookie settings through your browser preferences. However, disabling certain cookies 
                      may limit platform functionality.
                    </p>
                  </div>
                </section>

                {/* Children's Privacy */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      Our services are designed for business and professional use and are not intended for individuals under 18 years of age. 
                      We do not knowingly collect personal information from children under 18.
                    </p>
                    <p>
                      If we become aware that we have collected personal information from a child under 18, we will take steps to 
                      delete such information promptly.
                    </p>
                  </div>
                </section>

                {/* Changes to Privacy Policy */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
                      legal requirements, or other factors.
                    </p>
                    <p>We will notify you of material changes through:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Email notification to your registered email address</li>
                      <li>Prominent notices on our platform</li>
                      <li>Updates to this page with revision dates</li>
                    </ul>
                    <p>
                      Your continued use of our services after changes become effective constitutes acceptance of the updated Privacy Policy.
                    </p>
                  </div>
                </section>

                {/* Australian Privacy Compliance */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Australian Privacy Compliance</h2>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      As an Australian company, we comply with the Privacy Act 1988 and the Australian Privacy Principles (APPs). 
                      This includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Transparent handling of personal information</li>
                      <li>Ensuring data quality and security</li>
                      <li>Providing access and correction rights</li>
                      <li>Limiting use and disclosure of personal information</li>
                      <li>Maintaining records of our privacy practices</li>
                    </ul>
                    
                    <p>
                      If you have concerns about our privacy practices, you may lodge a complaint with the 
                      Office of the Australian Information Commissioner (OAIC).
                    </p>
                  </div>
                </section>

                {/* Contact Information */}
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="w-6 h-6 text-cyan-primary" />
                    <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                  </div>
                  <div className="space-y-4 text-silver-secondary">
                    <p>
                      If you have questions about this Privacy Policy, want to exercise your privacy rights, 
                      or have concerns about how we handle your information, please contact us:
                    </p>
                    
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                          </h4>
                          <p><strong className="text-white">Privacy Officer:</strong> privacy@ai2groundworks.com.au</p>
                          <p><strong className="text-white">General Inquiries:</strong> info@ai2groundworks.com.au</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            Phone & Address
                          </h4>
                          <p><strong className="text-white">Phone:</strong> +61 433 382 365</p>
                          <p><strong className="text-white">Business Hours:</strong> 9 AM - 5 PM AEST</p>
                          <p><strong className="text-white">Address:</strong> Australia</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-cyan-primary/10 border border-cyan-primary/20 rounded-xl p-6 mt-6">
                      <h4 className="text-white font-semibold mb-3">Privacy Request Response Times</h4>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Access requests: Within 30 days</li>
                        <li>Correction requests: Within 30 days</li>
                        <li>Deletion requests: Within 30 days (subject to legal requirements)</li>
                        <li>General inquiries: Within 5 business days</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Acknowledgment */}
                <section className="border-t border-white/10 pt-8">
                  <div className="bg-cyan-primary/10 border border-cyan-primary/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Acknowledgment</h3>
                    <p className="text-silver-secondary">
                      By using Ai²Groundworks, you acknowledge that you have read, understood, and agree to the collection, 
                      use, and disclosure of your information as described in this Privacy Policy. You also acknowledge your 
                      rights regarding your personal information and how to exercise them.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </BackgroundGradientAnimation>
  );
}