import React from 'react';
import { Link } from 'react-router-dom';

const communityLinks = [
  {
    title: 'Research Innovation',
    href: '/research-innovation'
  },
  {
    title: 'Arts Centre',
    href: '/arts-centre'
  },
  {
    title: 'Conferences and Events',
    href: '/conferences'
  },
  {
    title: 'Language Centre',
    href: '/language-centre'
  },
  {
    title: 'Lifelong Learning',
    href: '/lifelong-learning'
  },
  {
    title: 'Music Centre',
    href: '/music-centre'
  },
  {
    title: 'Heritage Building',
    href: '/heritage'
  },
  {
    title: 'Sports Centre',
    href: '/sports'
  }
];

export default function Community() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
          }}
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-8 border-b border-white/20 pb-4">Community</h2>
            <div className="grid grid-cols-2 gap-6">
              {communityLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="group relative text-lg text-white/90 hover:text-white transition-colors"
                >
                  <span>{link.title}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="Campus Community"
                className="object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}