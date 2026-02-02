import React from 'react';
import { FileText, Download, Eye, ArrowRight } from 'lucide-react';

export function Resume() {
  const resumeLink = "https://drive.google.com/file/d/1HO9mz2jwVpH0cfTmc4Dn7yUrkGnLU1Zz/view?usp=sharing";

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="relative overflow-hidden bg-indigo-600 rounded-[3rem] p-10 lg:p-16 shadow-2xl shadow-indigo-200 group">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/20 transition-colors"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500 rounded-full -ml-20 -mb-20 blur-2xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-105 transition-transform duration-500">
              <FileText className="w-16 h-16 md:w-20 md:h-20 text-white" />
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Access My Resume
            </h3>
            <p className="text-indigo-100 text-lg leading-relaxed mb-8 max-w-xl">
              Get a detailed overview of my technical expertise, academic background, and professional certifications in a clean, recruiter-friendly format.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl shadow-lg hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View Resume
              </a>
              <a 
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-indigo-500/50 backdrop-blur-sm text-white border border-indigo-400/50 font-bold rounded-2xl hover:bg-indigo-500 transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
