import React from 'react';
import { BookOpen, Users, Globe, Award, Building, Heart, ChevronRight, ExternalLink } from 'lucide-react';

const values = [
  { icon: <BookOpen className="h-8 w-8" />, title: 'Academic Excellence', description: 'Commitment to highest standards of education' },
  { icon: <Users className="h-8 w-8" />, title: 'Community', description: 'Fostering a collaborative environment' },
  { icon: <Globe className="h-8 w-8" />, title: 'Global Perspective', description: 'Embracing diversity and international outlook' },
  { icon: <Heart className="h-8 w-8" />, title: 'Social Responsibility', description: 'Contributing to society and environment' }
];

const milestones = [
  { year: 1971, title: 'Foundation', description: 'Establishment of Rabindra Maitree University' },
  { year: 1980, title: 'First Graduation', description: 'Celebrated our first graduating class' },
  { year: 1995, title: 'Research Center', description: 'Opening of Advanced Research Center' },
  { year: 2010, title: 'International Recognition', description: 'Ranked among top universities in Asia' },
  { year: 2020, title: 'Golden Jubilee', description: 'Celebrating 50 years of excellence' }
];

const leaders = [
  {
    name: 'Dr. Rahman Khan',
    position: 'Vice Chancellor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Leading RMU with over 25 years of academic excellence'
  },
  {
    name: 'Prof. Sarah Ahmed',
    position: 'Pro-Vice Chancellor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Pioneering research initiatives and academic innovations'
  }
];

const stats = [
  { number: '15:1', label: 'Student-to-Faculty Ratio' },
  { number: '50+', label: 'Research Centers' },
  { number: '200+', label: 'International Partners' },
  { number: '95%', label: 'Employment Rate' }
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-blue-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="University Campus"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About RMU</h1>
            <p className="text-xl text-blue-100">
              Shaping minds, building futures, and creating positive change through education and research since 1971.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To cultivate knowledge, foster innovation, and empower individuals to become leaders who make a positive impact on society through excellence in education, research, and service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-blue-600 font-bold">{milestone.year}</span>
                      <h3 className="text-xl font-semibold my-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">University Leadership</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {leaders.map((leader, index) => (
              <div key={index} className="flex gap-6 items-start">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{leader.name}</h3>
                  <p className="text-blue-600 mb-2">{leader.position}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Global Impact</h2>
              <p className="text-gray-600 mb-8">
                Our commitment to global education extends beyond borders. Through international partnerships, research collaborations, and exchange programs, we're creating a worldwide network of knowledge and innovation.
              </p>
              <button className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn about our global initiatives <ExternalLink className="h-4 w-4 ml-2" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">200+</h3>
                <p className="text-sm text-gray-600">International Partners</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">50+</h3>
                <p className="text-sm text-gray-600">Countries Represented</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">1000+</h3>
                <p className="text-sm text-gray-600">Exchange Students</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">100+</h3>
                <p className="text-sm text-gray-600">Research Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Legacy</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of our continuing story of excellence, innovation, and impact.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Schedule a Visit
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}