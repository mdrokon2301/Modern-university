import React from 'react';
import { Calendar } from 'lucide-react';

const dates = [
  {
    event: 'Application Start',
    date: 'March 1, 2024',
    description: 'Online application portal opens'
  },
  {
    event: 'Application Deadline',
    date: 'April 30, 2024',
    description: 'Last date to submit applications'
  },
  {
    event: 'Entrance Exam',
    date: 'May 15, 2024',
    description: 'University admission test'
  },
  {
    event: 'Results',
    date: 'June 1, 2024',
    description: 'Admission results announcement'
  },
  {
    event: 'Final Admission',
    date: 'June 15, 2024',
    description: 'Deadline for admission confirmation'
  }
];

export default function KeyDates() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Important Dates for Admission</h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {dates.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-blue-600">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}