import React, { useState } from 'react';
import { Calendar, Users, Home, Trophy, Globe, Play, ChevronRight } from 'lucide-react';

const clubs = [
  { name: 'Photography Club', category: 'cultural', members: 120 },
  { name: 'Debate Society', category: 'academic', members: 85 },
  { name: 'Sports Club', category: 'recreational', members: 200 },
  { name: 'Music Club', category: 'cultural', members: 150 },
  { name: 'Robotics Club', category: 'academic', members: 75 },
  { name: 'Environmental Club', category: 'social', members: 90 }
];

const events = [
  {
    title: 'Annual Cultural Festival',
    date: 'April 15-17, 2024',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94'
  },
  {
    title: 'Sports Week',
    date: 'May 1-7, 2024',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211'
  }
];

const residenceHalls = [
  {
    name: 'Tagore Hall',
    type: 'Male',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5'
  },
  {
    name: 'Nazrul Hall',
    type: 'Female',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5'
  }
];

export default function CampusLife() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-blue-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            alt="Campus Life"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Campus Life at RMU</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Experience a vibrant community where learning meets life, and friendships last forever.
            </p>
          </div>
        </div>
      </div>

      {/* Clubs and Organizations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Clubs & Organizations</h2>
          
          <div className="flex gap-4 mb-8">
            {['all', 'academic', 'cultural', 'social', 'recreational'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs
              .filter((club) => activeFilter === 'all' || club.category === activeFilter)
              .map((club, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{club.name}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {club.category}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{club.members} members</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Events and Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Events & Activities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Housing and Dining */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Housing & Dining</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {residenceHalls.map((hall, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={hall.image}
                  alt={hall.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{hall.name}</h3>
                  <p className="text-gray-600">{hall.type} Residence Hall</p>
                  <button className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Athletics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Athletics & Recreation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Indoor Stadium', 'Swimming Pool', 'Fitness Center'].map((facility, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <Trophy className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{facility}</h3>
                <p className="text-gray-600">
                  State-of-the-art facilities for students to maintain an active lifestyle.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Campus Life Virtually</h2>
          <p className="text-xl text-blue-100 mb-8">
            Take a virtual tour of our campus and discover what makes RMU special.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
            Start Virtual Tour <Play className="h-5 w-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}