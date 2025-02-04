import React from 'react';
import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <div className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="hidden md:flex space-x-6 text-sm">
            <Link to="/current-students" className="hover:text-blue-200">Current Students</Link>
            <Link to="/faculty-staff" className="hover:text-blue-200">Faculty & Staff</Link>
            <Link to="/alumni" className="hover:text-blue-200">Alumni</Link>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/apply" className="font-semibold hover:text-blue-200">Apply</Link>
            <Link to="/visit" className="font-semibold hover:text-blue-200">Visit</Link>
            <Link to="/give" className="font-semibold hover:text-blue-200">Give</Link>
          </div>
        </div>
      </div>
    </div>
  );
}