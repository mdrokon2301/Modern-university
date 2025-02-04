import React from 'react';
import { Clock } from 'lucide-react';
import { upcomingFaculties } from '../../data/faculties';

export default function UpcomingFaculties() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Upcoming Faculties</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingFaculties.map((faculty) => (
            <div key={faculty.id} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold">{faculty.name}</h3>
                  <p className="text-blue-600">Expected: {faculty.expectedDate}</p>
                </div>
              </div>
              <p className="text-gray-600">{faculty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}