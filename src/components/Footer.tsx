import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center gap-2 text-slate-600 mb-6">
          <span>Designed & Developed with</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          <span>by <span className="font-bold text-slate-900">ELANGO R R</span></span>
        </div>
        
        <div className="flex justify-center gap-8 mb-8 text-sm font-medium text-slate-400 uppercase tracking-widest">
          <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        
        <p className="text-slate-400 text-sm">
          &copy; {currentYear} ELANGO R R. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
