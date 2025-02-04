import React from 'react';
import { GraduationCap, Calendar, Users, BookOpen } from 'lucide-react';

const links = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Programs",
    description: "Explore our degree programs",
    link: "#programs"
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Visit",
    description: "Schedule a campus tour",
    link: "#visit"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Apply",
    description: "Start your journey",
    link: "#apply"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Request Info",
    description: "Learn more about RMU",
    link: "#info"
  }
];

export default function QuickLinks() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mr-4">{link.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}