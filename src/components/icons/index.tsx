import React from 'react';
import * as LucideIcons from 'lucide-react';

// Create a type-safe icon component
export function Icon({ name, ...props }: { name: keyof typeof LucideIcons } & LucideIcons.LucideProps) {
  const LucideIcon = LucideIcons[name];
  return <LucideIcon {...props} />;
}