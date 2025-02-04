import React from 'react';
import { BookOpen, Clock, DollarSign, ArrowRight } from 'lucide-react';

const programs = [
  {
    category: 'Undergraduate',
    items: [
      { name: 'Bachelor of Science', duration: '4 years', fee: '৳50,000/semester' },
      { name: 'Bachelor of Arts', duration: '4 years', fee: '৳45,000/semester' },
      { name: 'Bachelor of Business', duration: '4 years', fee: '৳55,000/semester' }
    ]
  },
  {
    category: 'Postgraduate',
    items: [
      { name: 'Master of Science', duration: '2 years', fee: '৳60,000/semester' },
      { name: 'Master of Arts', duration: '2 years', fee: '৳55,000/semester' },
      { name: 'MBA', duration: '2 years', fee: '৳65,000/semester' }
    ]
  },
  {
    category: 'Diploma',
    items: [
      { name: 'Diploma in IT', duration: '1 year', fee: '৳35,000/semester' },
      { name: 'Diploma in Business', duration: '1 year', fee: '৳30,000/semester' }
    ]
  }
];

export default function ProgramsOffered() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Explore Our Programs</h2>
        
        <div className="grid gap-8">
          {programs.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold mb-6">{category.category} Programs</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((program, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                      <h4 className="text-lg font-semibold">{program.name}</h4>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-5 w-5" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="h-5 w-5" />
                        <span>{program.fee}</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}