import React from 'react';
import { Building2, Mail, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="md:col-span-3 text-center md:text-left">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="w-6 h-6 text-cyan-primary" />
              <span className="text-lg md:text-xl font-semibold text-white">Ai²Groundworks</span>
            </div>
            <p className="text-silver-secondary mb-4 md:mb-6 font-light text-sm md:text-base max-w-sm md:max-w-none mx-auto md:mx-0" style={{maxWidth: '350px'}}>
              AI-powered oversight for safer, smarter construction projects across Australia.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-4 h-4 text-cyan-primary" />
                <a href="mailto:info@ai2groundworks.com.au" className="text-silver-secondary hover:text-white transition-colors text-xs md:text-sm">
                  info@ai2groundworks.com.au
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-4 h-4 text-cyan-primary" />
                <a href="tel:+61433382365" className="text-silver-secondary hover:text-white transition-colors text-xs md:text-sm">
                  +61 433 382 365
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Linkedin className="w-4 h-4 text-cyan-primary" />
                <a href="https://www.linkedin.com/company/ai-%C2%B2-groundworks/" target="_blank" rel="noopener noreferrer" className="text-silver-secondary hover:text-white transition-colors text-xs md:text-sm">
                  Follow us on LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Platform</h4>
            <ul className="space-y-2 md:space-y-3 text-silver-secondary">
              <li><a href="#" className="hover:text-white transition-colors text-xs md:text-sm">Document Intelligence</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-xs md:text-sm">Real-time Oversight</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-xs md:text-sm">Insights Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-xs md:text-sm">Safety Monitoring</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-center md:text-right text-sm md:text-base">Company</h4>
            <ul className="space-y-2 md:space-y-3 text-silver-secondary text-center md:text-right">
              <li><Link to="/mission" className="hover:text-white transition-colors text-xs md:text-sm">Our Mission</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors text-xs md:text-sm">The Team</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors text-xs md:text-sm">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors text-xs md:text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors text-xs md:text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="gradient-divider pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-center md:justify-end space-y-4 md:space-y-0">
          <p className="text-silver-tertiary text-xs md:text-sm text-center">
            © 2025 Ai²Groundworks. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 md:space-x-6 md:ml-8">
            <Link to="/terms" className="text-silver-tertiary hover:text-white transition-colors text-xs md:text-sm">Terms</Link>
            <Link to="/privacy" className="text-silver-tertiary hover:text-white transition-colors text-xs md:text-sm">Privacy</Link>
            <span className="text-silver-tertiary text-xs md:text-sm">Made in Australia 🇦🇺</span>
          </div>
        </div>
      </div>
    </footer>
  );
}