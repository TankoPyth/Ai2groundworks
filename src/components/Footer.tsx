import React from 'react';
import { Building2, Mail, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-3">
              <Building2 className="w-5 h-5 text-cyan-primary" />
              <span className="text-lg font-semibold text-white">Ai²Groundworks</span>
            </div>
            <p className="text-silver-secondary text-sm mb-3 max-w-sm">
              AI-powered oversight for safer, smarter construction projects across Australia.
            </p>
            
            {/* Contact Info - Horizontal Layout */}
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="mailto:info@ai2groundworks.com.au" className="flex items-center space-x-2 text-silver-secondary hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-cyan-primary" />
                <span>dale@ai2groundworks.com.au</span>
              </a>
              <a href="tel:+61433382365" className="flex items-center space-x-2 text-silver-secondary hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-cyan-primary" />
                <span>+61 433 382 365</span>
              </a>
              <a href="https://www.linkedin.com/company/ai-%C2%B2-groundworks/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-silver-secondary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4 text-cyan-primary" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Platform</h4>
            <ul className="space-y-2 text-silver-secondary text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Document Intelligence</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Real-time Oversight</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insights Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Monitoring</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-silver-secondary text-sm">
              <li><Link to="/mission" className="hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">The Team</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <p className="text-silver-tertiary text-xs">
            © 2025 Ai²Groundworks. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-xs">
            <Link to="/terms" className="text-silver-tertiary hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-silver-tertiary hover:text-white transition-colors">Privacy</Link>
            <span className="text-silver-tertiary">Made in Australia 🇦🇺</span>
          </div>
        </div>
      </div>
    </footer>
  );
}