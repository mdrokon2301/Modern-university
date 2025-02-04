import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const events = [
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Annual Cultural Festival",
    date: "April 20, 2024",
    time: "10:00 AM - 8:00 PM",
    location: "Main Campus",
    category: "Cultural"
  },
  {
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "International Conference on Innovation",
    date: "May 5, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Conference Center",
    category: "Academic"
  },
  {
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Tech Symposium 2024",
    date: "May 15, 2024",
    time: "10:00 AM - 5:00 PM",
    location: "Engineering Building",
    category: "Technology"
  }
];

export default function Events() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Events</h2>
          <a href="#all-events" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
            View all events <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {event.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    {event.location}
                  </div>
                </div>
                
                <a
                  href="#event-details"
                  className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700 gap-2"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}