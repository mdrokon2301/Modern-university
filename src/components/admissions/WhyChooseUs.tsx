import React from 'react';
import { Users, Building, Briefcase, Globe } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Experienced Faculty',
    description: 'Learn from industry experts and renowned academics with years of experience.'
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: 'Modern Campus',
    description: 'State-of-the-art facilities equipped with the latest technology and resources.'
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Industry Connections',
    description: 'Strong partnerships with leading companies for internships and placements.'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Global Opportunities',
    description: 'International exchange programs and global internship opportunities.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Why RMU?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}