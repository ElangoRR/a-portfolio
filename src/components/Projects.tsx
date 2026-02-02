import React from 'react';
import { ExternalLink, BrainCircuit, ShieldAlert, Cpu, Database } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: "Smartboard AI Project",
    description: "An AI-powered smart board system designed to enhance interactive learning using intelligent input processing, automation, and real-time assistance. It bridges the gap between traditional teaching and digital efficiency.",
    impact: "Streamlined classroom automation and increased student engagement by 40% through real-time feedback loops.",
    tech: ["Python", "AI/ML", "Real-time Processing"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmN0aXRlY3R1cmUlMjBmdXR1cmUlMjB0ZWNofGVufDF8fHwxNzY5OTU0NTU5fDA&ixlib=rb-4.1.0&q=80&w=800",
    link: "https://drive.google.com/file/d/1MmJk32HN-OVZNUiR0sXjQHXyTvxeILFW/view?usp=drive_link",
    icon: BrainCircuit
  },
  {
    title: "Crime Rate Prediction Project",
    description: "A data-driven machine learning project that analyzes historical crime data to predict crime rates and identify high-risk areas. It leverages advanced regression models to provide actionable insights for law enforcement.",
    impact: "Provided a predictive accuracy of 85% on regional datasets, helping identify key socio-economic factors influencing crime trends.",
    tech: ["Machine Learning", "Data Analysis", "Python", "Scikit-Learn"],
    image: "https://images.unsplash.com/photo-1453723490680-79a17ed91bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZ3JhcGh8ZW58MXx8fHwxNzY5OTU0NTU5fDA&ixlib=rb-4.1.0&q=80&w=800",
    link: "https://drive.google.com/file/d/1mf58OuWV0hzLImbXkJou_gx3bz5S_Bqj/view?usp=drive_link",
    icon: ShieldAlert
  }
];

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group overflow-hidden"
        >
          <div className="relative h-72 overflow-hidden">
            <ImageWithFallback 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-8 right-8">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-[1.5rem] shadow-xl border border-white/20">
                <project.icon className="w-7 h-7 text-indigo-600" />
              </div>
            </div>
          </div>
          
          <div className="p-10 flex-1 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[11px] font-bold uppercase tracking-wider rounded-full border border-indigo-100/50">
                  {t}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
              {project.title}
            </h3>
            
            <div className="space-y-4 mb-8 flex-1">
              <p className="text-slate-600 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="pt-4 border-t border-slate-50">
                <p className="text-slate-500 text-xs italic">
                  <span className="font-bold text-slate-700 not-italic uppercase tracking-tighter mr-2">Impact:</span>
                  {project.impact}
                </p>
              </div>
            </div>
            
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all group/btn shadow-lg shadow-slate-200"
            >
              View Project Details
              <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
