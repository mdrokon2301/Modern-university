import React from 'react';

const news = [
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "New Research Center Opening",
    date: "March 15, 2024",
    description: "State-of-the-art research facility to advance scientific discoveries."
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "International Conference 2024",
    date: "March 10, 2024",
    description: "Global scholars gather to discuss innovation in education."
  },
  {
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Student Achievement Awards",
    date: "March 5, 2024",
    description: "Celebrating outstanding academic and research accomplishments."
  }
];

export default function News() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <a href="#" className="inline-block mt-4 text-blue-600 hover:text-blue-700">
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}