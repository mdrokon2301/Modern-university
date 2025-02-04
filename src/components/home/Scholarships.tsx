import React from 'react';
import { GraduationCap, DollarSign } from 'lucide-react';

export default function Scholarships() {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">World-Class Education Within Reach</h2>
            <p className="text-xl text-blue-100 mb-8">
              First-year undergraduate students receive scholarships ranging from ₹180,000 to ₹230,000, renewable for four years.
            </p>
            <div className="flex space-x-4">
              <a href="#scholarships" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
                Explore Scholarships
              </a>
              <a href="#apply" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800">
                Apply Now
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <GraduationCap className="h-8 w-8" />, stat: '93%', text: 'Students Receive Aid' },
              { icon: <DollarSign className="h-8 w-8" />, stat: '₹2.3L', text: 'Max Scholarship' },
            ].map((item, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg text-center">
                <div className="inline-block p-3 bg-blue-700 rounded-full mb-4">{item.icon}</div>
                <div className="text-3xl font-bold mb-2">{item.stat}</div>
                <div className="text-blue-200">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}