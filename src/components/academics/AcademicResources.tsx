import React from 'react';
import { BookOpen, Library, Users, GraduationCap } from 'lucide-react';

const resources = [
  {
    icon: <Library className="h-8 w-8" />,
    title: 'Digital Library',
    description: 'Access to over 50,000 digital resources and research papers'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Research Groups',
    description: 'Join faculty-led research groups in your area of interest'
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Study Materials',
    description: 'Comprehensive course materials and learning resources'
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: 'Academic Support',
    description: 'One-on-one tutoring and academic counseling services'
  }
];

export default function AcademicResources() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Academic Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}