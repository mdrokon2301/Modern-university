import React from 'react';
import { BookOpen } from 'lucide-react';

export default function AcademicsHero() {
  return (
    <div className="relative bg-blue-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-6">
          <BookOpen className="h-12 w-12" />
          <h1 className="text-4xl md:text-5xl font-bold">Academic Programs</h1>
        </div>
        <p className="text-xl text-blue-100 max-w-2xl">
          Discover our diverse range of academic programs designed to prepare you for success in your chosen field. With 11 established faculties and more on the horizon, we offer comprehensive education that combines theory with practical experience.
        </p>
      </div>
    </div>
  );
}