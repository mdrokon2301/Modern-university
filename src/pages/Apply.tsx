import React, { useState } from 'react';
import { BookOpen, Users, Building, Globe, Upload, Calendar, ChevronDown, MessageCircle } from 'lucide-react';

const programs = [
  { id: 'cse', name: 'Computer Science and Engineering' },
  { id: 'ict', name: 'Information and Communication Technology' },
  { id: 'eng', name: 'English' },
  { id: 'bng', name: 'Bangla' }
];

const faqs = [
  {
    question: 'What documents are required?',
    answer: 'You will need to submit your academic transcripts, standardized test scores (SAT/ACT), letters of recommendation, and a personal statement.'
  },
  {
    question: 'Can I apply for more than one program?',
    answer: 'Yes, you can apply for up to three programs. Each additional program requires a separate application fee.'
  },
  {
    question: 'What are the application fees?',
    answer: 'The application fee is ৳1000 for domestic students and $50 for international students.'
  }
];

export default function Apply() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-blue-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Campus"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Your Future Begins Here</h1>
            <p className="text-xl text-blue-100 mb-8">
              Join our vibrant community of learners and leaders. Take the first step towards your dreams.
            </p>
            <button 
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Application
            </button>
          </div>
        </div>
      </div>

      {/* Why Apply Here */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose RMU?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BookOpen className="h-8 w-8" />, title: 'World-class Faculty', description: 'Learn from industry experts and renowned academics' },
              { icon: <Building className="h-8 w-8" />, title: 'Modern Facilities', description: 'State-of-the-art labs and learning spaces' },
              { icon: <Users className="h-8 w-8" />, title: 'Vibrant Community', description: 'Join a diverse and inclusive student body' },
              { icon: <Globe className="h-8 w-8" />, title: 'Global Opportunities', description: 'International exchange programs and partnerships' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
              {[
                { title: 'Create Account', description: 'Sign up and verify your email' },
                { title: 'Fill Application', description: 'Complete all required information' },
                { title: 'Upload Documents', description: 'Submit transcripts and certificates' },
                { title: 'Pay Fees', description: 'Complete application payment' },
                { title: 'Track Status', description: 'Monitor your application progress' }
              ].map((step, index) => (
                <div key={index} className="relative flex items-center mb-8">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Start Your Application</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8 flex justify-between">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`flex items-center ${currentStep >= step ? 'text-blue-600' : 'text-gray-400'}`}
                >
                  <div className={`w-8 h-8 rounded-full ${currentStep >= step ? 'bg-blue-600' : 'bg-gray-200'} text-white flex items-center justify-center`}>
                    {step}
                  </div>
                  <span className="ml-2 font-medium">
                    {step === 1 ? 'Personal Info' : step === 2 ? 'Academic Details' : 'Documents'}
                  </span>
                </div>
              ))}
            </div>

            <form className="space-y-6">
              {currentStep === 1 && (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">First Name</label>
                      <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Previous Institution</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Program</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                      {programs.map((program) => (
                        <option key={program.id} value={program.id}>{program.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">GPA</label>
                    <input type="number" step="0.01" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-gray-600">
                        Drag and drop your documents here, or click to select files
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Required Documents:</label>
                      <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                        <li>Academic transcripts</li>
                        <li>Standardized test scores</li>
                        <li>Letters of recommendation</li>
                        <li>Personal statement</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Previous
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => currentStep < 3 ? setCurrentStep(currentStep + 1) : alert('Form submitted!')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                >
                  {currentStep === 3 ? 'Submit Application' : 'Next'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Dates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { date: 'March 15, 2024', title: 'Early Application Deadline' },
              { date: 'April 30, 2024', title: 'Regular Application Deadline' },
              { date: 'May 15, 2024', title: 'Financial Aid Deadline' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <Calendar className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-600">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Need Help?</h2>
          <p className="text-gray-600 mb-8">
            Our admissions team is here to help you with your application process
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:admissions@rmu.edu" className="flex items-center text-blue-600 hover:text-blue-700">
              <MessageCircle className="h-5 w-5 mr-2" />
              admissions@rmu.edu
            </a>
            <a href="tel:+8801234567890" className="flex items-center text-blue-600 hover:text-blue-700">
              <Phone className="h-5 w-5 mr-2" />
              +880 1234-567890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}