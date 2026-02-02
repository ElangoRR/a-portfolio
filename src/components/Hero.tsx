import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import myPhoto from "figma:asset/54a63394ade71c9107f640c6c8e6bc0e2319d482.png";

export function Hero() {
  const resumeLink = "https://drive.google.com/file/d/1HO9mz2jwVpH0cfTmc4Dn7yUrkGnLU1Zz/view?usp=sharing";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full py-12 lg:py-0">
      <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Portfolio 2026</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] mb-6">
            ELANGO <br /><span className="text-indigo-600">RAMESH.</span>
          </h1>
          <p className="text-xl lg:text-2xl font-bold text-slate-400 max-w-lg leading-tight">
            UI & UX Designer / Developer / Student
          </p>
        </div>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
          Transforming complex data into intuitive digital experiences. Specializing in AI-driven interfaces and data science applications.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-[1.5rem] shadow-2xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all flex items-center group"
          >
            View Projects
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a 
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 font-bold rounded-[1.5rem] hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center group"
          >
            Resume
            <FileText className="ml-3 w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
          </a>
        </div>
      </div>

      <div className="relative animate-in fade-in zoom-in duration-1000">
        <div className="absolute -inset-10 bg-indigo-100/40 rounded-full blur-3xl -z-10"></div>
        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
          <ImageWithFallback 
            src={myPhoto} 
            alt="Elango Ramesh" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <p className="text-white text-sm font-bold tracking-widest uppercase opacity-80 mb-1">Based In</p>
            <p className="text-white text-xl font-black">Tamil Nadu, IN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
