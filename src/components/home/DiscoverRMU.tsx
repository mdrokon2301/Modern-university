import React from 'react';
import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'Life on campus',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    link: '/campus-life'
  },
  {
    title: 'Student Life',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    link: '/student-life'
  },
  {
    title: 'Our location',
    image: 'https://images.unsplash.com/photo-1596465227657-5a82514a1970?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    link: '/location'
  },
  {
    title: 'Virtual Tour',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    link: '/virtual-tour'
  },
  {
    title: 'Information for international students',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    link: '/international'
  }
];

export default function DiscoverRMU() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Discover Rabindra Maitree</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-4xl">
          Rabindra Maitree University is located in the heart of Kushtia, Bangladesh, nestled in a vibrant cultural hub. 
          Our campus combines modern educational facilities with rich cultural heritage, offering a unique blend of 
          traditional values and contemporary learning environments. With our diverse academic programs and dynamic 
          student life, you'll find endless opportunities for growth and discovery.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link 
              key={index}
              to={card.link}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="relative">
                  <div className="h-1 w-8 bg-yellow-400 mb-3"></div>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}