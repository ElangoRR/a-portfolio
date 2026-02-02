import React from 'react';
import { Linkedin, Github, Code, Globe, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    description: 'Professional networking & career history',
    icon: Linkedin,
    color: 'hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50',
    iconColor: 'text-blue-600',
    link: 'https://www.linkedin.com/in/elango-ramesh-b00257290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'GitHub',
    description: 'Open source projects & code repositories',
    icon: Github,
    color: 'hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50/50',
    iconColor: 'text-slate-900',
    link: 'https://github.com/ElangoRR'
  },
  {
    name: 'LeetCode',
    description: 'Data structures & algorithms practice',
    icon: Code,
    color: 'hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50/50',
    iconColor: 'text-amber-600',
    link: 'https://leetcode.com/u/elango_student/'
  },
  {
    name: 'HackerRank',
    description: 'Competitive programming & skill assessments',
    icon: Globe,
    color: 'hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50/50',
    iconColor: 'text-emerald-600',
    link: 'https://www.hackerrank.com/profile/elango_student21'
  }
];

export function Links() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm transition-all duration-300 ${link.color}`}
          >
            <div className={`p-5 rounded-2xl bg-slate-50 group-hover:bg-white transition-colors mr-6 border border-transparent group-hover:border-slate-100`}>
              <link.icon className={`w-8 h-8 ${link.iconColor}`} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-inherit mb-1">
                {link.name}
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                Visit Profile
              </p>
            </div>
            <div className="ml-auto transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <ArrowUpRight className="w-6 h-6 text-slate-400" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
