import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: "Spring Orientation (SOAR)",
    date: "March 25, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Main Campus",
    description: "New student orientation for the spring semester"
  },
  {
    title: "First Day of Spring Classes",
    date: "April 1, 2024",
    time: "All Day",
    location: "All Campuses",
    description: "Spring semester begins"
  },
  {
    title: "Research Symposium",
    date: "April 15, 2024",
    time: "10:00 AM - 5:00 PM",
    location: "Science Building",
    description: "Annual showcase of student research projects"
  }
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-blue-600" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                    {event.location}
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{event.description}</p>
                <a
                  href="#event-details"
                  className="mt-6 inline-block text-blue-600 hover:text-blue-700"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}