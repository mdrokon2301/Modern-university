import React from 'react';
import { Trophy, Heart, Briefcase, Users } from 'lucide-react';

const metrics = [
  { icon: <Briefcase />, percentage: "95%", text: "Alumni feel prepared for career" },
  { icon: <Trophy />, percentage: "100%", text: "NCLEX first-time pass rate" },
  { icon: <Users />, percentage: "100%", text: "Internship placement rate" },
  { icon: <Heart />, percentage: "93%", text: "Students receive financial aid" }
];

export default function AlumniSuccess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Alumni Success</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                {metric.icon}
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">{metric.percentage}</div>
              <p className="text-gray-600">{metric.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}