import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Faculty } from '../../data/faculties';

interface FacultyCardProps {
  faculty: Faculty;
}

export default function FacultyCard({ faculty }: FacultyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {faculty.shortName}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{faculty.name}</h3>
        <p className="text-gray-600 mb-4">{faculty.description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Programs Offered:</h4>
          <ul className="text-gray-600 space-y-1">
            {faculty.programs.map((program, index) => (
              <li key={index}>{program}</li>
            ))}
          </ul>
        </div>
        
        <a
          href={`/academics/${faculty.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 gap-2"
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}