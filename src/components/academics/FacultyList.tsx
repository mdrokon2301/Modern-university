import React from 'react';
import { ArrowRight } from 'lucide-react';
import { faculties } from '../../data/faculties';
import FacultyCard from './FacultyCard';

export default function FacultyList() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Our Faculties</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculties.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </div>
    </section>
  );
}