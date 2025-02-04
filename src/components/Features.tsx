import React from 'react';
import { BookOpen, Users, Trophy, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "World-Class Education",
    description: "Offering diverse programs taught by distinguished faculty members."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Vibrant Community",
    description: "Join a diverse community of scholars from around the world."
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "Research Excellence",
    description: "Leading breakthrough research in multiple disciplines."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Perspective",
    description: "International partnerships and exchange programs."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RMU?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes Rabindra Maitree University a leading institution for higher education.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link to="/apply" className="text-blue-600 hover:text-blue-700 font-medium">
                Apply Now →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}