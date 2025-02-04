import React from 'react';
import { Link } from 'react-router-dom';

interface FooterSection {
  title: string;
  links: Array<{ name: string; href: string; }>;
}

export function FooterSection({ title, links }: FooterSection) {
  return (
    <div>
      <h2 className="text-white text-lg font-bold mb-6">{title}</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}