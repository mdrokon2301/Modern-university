import React from 'react';

const programs = [
  {
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Undergraduate",
    description: "Choose from over 50 majors and minors"
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Graduate",
    description: "Advance your career with our graduate programs"
  },
  {
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Professional",
    description: "Professional development and certification programs"
  }
];

export default function Programs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Academic Programs</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover your path to success with our diverse range of academic programs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-white/90">{program.description}</p>
                <a
                  href={`#${program.title.toLowerCase()}`}
                  className="mt-4 text-blue-300 hover:text-blue-200 inline-flex items-center"
                >
                  Learn more
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}