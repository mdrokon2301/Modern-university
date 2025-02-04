import React from 'react';
import { BookOpen } from 'lucide-react';
import { FooterSection } from './footer/FooterLinks';
import { socialLinks } from './common/SocialLinks';
import { footerLinks } from '../data/footerLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FooterSection title="STUDY" links={footerLinks.study} />
          <FooterSection title="LIFE" links={footerLinks.life} />
          <FooterSection title="RESEARCH" links={footerLinks.research} />
          <FooterSection title="EXPLORE" links={footerLinks.explore} />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-white" />
              <span className="text-white font-bold">RMU</span>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <div className="h-6 w-6">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Rabindra Maitree University. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}