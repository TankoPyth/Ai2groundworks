import React, { useState, useEffect } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import Header from './Header';

interface TeamMember {
  name: string;
  title: string;
  email: string;
  linkedinUrl: string;
  photoUrl: string;
  bio: string;
}

export default function TeamPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Placeholder team members - replace with actual data
  const teamMembers: TeamMember[] = [
    {
      name: "Dale Gaffey",
      title: "Founder & CEO",
      email: "dale@ai2groundworks.com.au",
      linkedinUrl: "https://www.linkedin.com/in/dale-gaffey/",
      photoUrl: "https://media.licdn.com/dms/image/v2/D4E03AQEbda0AKs335g/profile-displayphoto-shrink_800_800/B4EZSAtQjyHAAc-/0/1737326136698?e=1759968000&v=beta&t=GcBYWZgvE7RQlrkvPG1R_TjrawSQprQT-Yb_doP_Pb4",
      bio: "18+ years in civil construction technology and project management"
    },
    {
      name: "Mark mullan",
      title: "Co-Founder- Resources and Relationships",
      email: "mark@ai2groundworks.com.au",
      linkedinUrl: "https://www.linkedin.com/in/mark-mullan-6845a2199/",
      photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQHWrtSnrljzgg/profile-displayphoto-crop_800_800/B56Zfkn7yLH8AI-/0/1751887364478?e=1759968000&v=beta&t=b2RxGI__vKcoHgC8mKhaFIocyJl7r_Tl0ypBfTzWDx8",
      bio: "AI/ML expert with deep experience in construction safety systems"
    },
    {
      name: "Jarrod Tanko",
      title: "Head of Product",
      email: "jarrod@ai2groundworks.com.au",
      linkedinUrl: "https://www.linkedin.com/in/jarrod-tanko-104943267/",
      photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQHz_ZTZIVJKpg/profile-displayphoto-shrink_800_800/B56ZV2m4g5HsAc-/0/1741451660772?e=1759968000&v=beta&t=IBMvVSsZftKTgJio7OMSxHd9bM1jjrPHa6wnfG9zRto",
      bio: "Product strategy leader focused on user-centered construction solutions"
    }
  ];

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(28, 25, 23)"
      gradientBackgroundEnd="rgb(41, 37, 36)"
      firstColor="103, 207, 206"
      secondColor="107, 180, 187"
      thirdColor="101, 196, 196"
      fourthColor="75, 159, 170"
      fifthColor="103, 207, 206"
      pointerColor="103, 207, 206"
      size="90%"
      blendingValue="overlay"
      interactive={true}
      containerClassName="min-h-screen"
      className="text-white font-sans antialiased"
    >
      <Header />

      {/* Team Content */}
      <main className="pt-24 pb-8 relative bg-transparent min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header Section */}
          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white mb-4 leading-tight text-3xl sm:text-4xl lg:text-5xl font-bold">
              Meet the <span className="underline decoration-cyan-primary decoration-4 underline-offset-8">founding</span> team
            </h1>
            <p className="text-silver-secondary text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Experienced leaders bringing AI innovation to Australian construction
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-primary/30 transition-all duration-300 h-full">
                  
                  {/* Photo */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-primary/20 to-cyan-tertiary/20">
                      <img 
                        src={member.photoUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.src = `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`;
                        }}
                      />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-2xl border-2 border-cyan-primary/20"></div>
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-cyan-primary font-semibold text-sm">{member.title}</p>
                    <p className="text-silver-secondary text-sm leading-relaxed">{member.bio}</p>
                    
                    {/* Contact Links */}
                    <div className="flex items-center justify-center space-x-4 pt-4">
                      <a 
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-white/10 hover:bg-cyan-primary/20 border border-white/20 hover:border-cyan-primary/40 rounded-lg flex items-center justify-center transition-all duration-300 group"
                        title={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4 text-silver-secondary group-hover:text-cyan-primary transition-colors" />
                      </a>
                      <a 
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 hover:bg-cyan-primary/20 border border-white/20 hover:border-cyan-primary/40 rounded-lg flex items-center justify-center transition-all duration-300 group"
                        title={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4 text-silver-secondary group-hover:text-cyan-primary transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <p className="text-silver-secondary text-sm mb-4">
                Ready to work with our team?
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center space-x-2 text-cyan-primary hover:text-white transition-colors font-medium"
              >
                <span>Get in touch</span>
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </BackgroundGradientAnimation>
  );
}