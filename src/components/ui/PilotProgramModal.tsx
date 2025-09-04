import React, { useState, useEffect } from 'react';
import { X, Building2, User, Mail, Phone, FileText, Send, CheckCircle, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface PilotProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
  hearAbout: string;
}

export default function PilotProgramModal({ isOpen, onClose }: PilotProgramModalProps) {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    hearAbout: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          projectType: '',
          description: '',
          hearAbout: ''
        });
        setErrors({});
      }, 300);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
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

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.projectType.trim()) newErrors.projectType = 'Project type is required';
    if (!formData.description.trim()) newErrors.description = 'Project description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-pilot-application`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={cn(
        "relative w-full max-w-2xl max-h-[90vh] overflow-y-auto",
        "bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl",
        "shadow-2xl transform transition-all duration-500",
        isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-8"
      )}>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute top-4 right-8 w-2 h-2 bg-cyan-primary/40 rounded-full animate-ping" />
          <div className="absolute top-12 left-12 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-8 right-16 w-1.5 h-1.5 bg-cyan-tertiary/30 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full flex items-center justify-center transition-all duration-300 z-10"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Content */}
        <div className="p-8 pt-12">
          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-primary to-cyan-tertiary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Apply for Pilot Program</h2>
                <p className="text-silver-secondary">Join the future of construction oversight</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Name */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    <Building2 className="w-4 h-4 inline mr-2" />
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className={cn(
                      "w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-silver-tertiary",
                      "backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-primary/50",
                      errors.companyName ? "border-red-400" : "border-white/20 focus:border-cyan-primary/50"
                    )}
                    placeholder="Your company name"
                  />
                  {errors.companyName && <p className="text-red-400 text-sm mt-1">{errors.companyName}</p>}
                </div>

                {/* Contact Name */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                    className={cn(
                      "w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-silver-tertiary",
                      "backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-primary/50",
                      errors.contactName ? "border-red-400" : "border-white/20 focus:border-cyan-primary/50"
                    )}
                    placeholder="Your full name"
                  />
                  {errors.contactName && <p className="text-red-400 text-sm mt-1">{errors.contactName}</p>}
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={cn(
                        "w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-silver-tertiary",
                        "backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-primary/50",
                        errors.email ? "border-red-400" : "border-white/20 focus:border-cyan-primary/50"
                      )}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={cn(
                        "w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-silver-tertiary",
                        "backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-primary/50",
                        errors.phone ? "border-red-400" : "border-white/20 focus:border-cyan-primary/50"
                      )}
                      placeholder="+61 xxx xxx xxx"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Project Type *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => handleInputChange('projectType', e.target.value)}
                    className={cn(
                      "w-full px-4 py-3 bg-white/10 border rounded-xl text-white",
                      "backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-primary/50",
                      errors.projectType ? "border-red-400" : "border-white/20 focus:border-cyan-primary/50"
                    )}
                  >
                    <option value="" className="bg-dark-primary text-white">Select project type</option>
                    <option value="residential" className="bg-dark-primary text-white">Residential Development</option>
                    <option value="commercial" className="bg-dark-primary text-white">Commercial Construction</option>
                    <option value="infrastructure" className="bg-dark-primary text-white">Infrastructure</option>
                    <option value="industrial" className="bg-dark-primary text-white">Industrial</option>
                    <option value="other" className="bg-dark-primary text-white">Other</option>
                  </select>
                  {errors.projectType && <p className="text-red-400 text-sm mt-1">{errors.projectType}</p>}
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Project Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className={cn(
                      "w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-silver-tertiary resize-none",
                      "backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-primary/50",
                      errors.description ? "border-red-400" : "border-white/20 focus:border-cyan-primary/50"
                    )}
                    placeholder="Tell us about your project, timeline, and specific challenges you're facing..."
                  />
                  {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}
                </div>

                {/* How did you hear about us */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    value={formData.hearAbout}
                    onChange={(e) => handleInputChange('hearAbout', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-primary/50 focus:border-cyan-primary/50"
                  >
                    <option value="" className="bg-dark-primary text-white">Select an option</option>
                    <option value="linkedin" className="bg-dark-primary text-white">LinkedIn</option>
                    <option value="referral" className="bg-dark-primary text-white">Referral</option>
                    <option value="search" className="bg-dark-primary text-white">Google Search</option>
                    <option value="industry-event" className="bg-dark-primary text-white">Industry Event</option>
                    <option value="other" className="bg-dark-primary text-white">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full bg-gradient-to-r from-cyan-primary to-cyan-tertiary text-white font-semibold py-4 px-6 rounded-xl",
                      "transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl",
                      "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
                      "flex items-center justify-center space-x-2"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Estimated response time */}
                <div className="text-center pt-2">
                  <p className="text-silver-tertiary text-sm">
                    We typically respond within 24-48 hours
                  </p>
                </div>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Application Submitted!</h3>
              <p className="text-silver-secondary mb-6">
                Thank you for your interest in our pilot program. We've sent you a confirmation email and will be in touch soon.
              </p>
              <div className="flex items-center justify-center space-x-2 text-cyan-primary">
                <div className="w-2 h-2 bg-cyan-primary rounded-full animate-pulse"></div>
                <span className="text-sm">Closing automatically...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}