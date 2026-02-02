import React from 'react';
import { User, Phone, Mail, Calendar, Languages } from 'lucide-react';

export function PersonalInfo() {
  const infoFields = [
    { 
      label: 'Full Name', 
      value: 'ELANGO R R', 
      icon: User, 
      color: 'bg-blue-50 text-blue-600' 
    },
    { 
      label: 'Phone Number', 
      value: '8248046339', 
      icon: Phone, 
      color: 'bg-emerald-50 text-emerald-600' 
    },
    { 
      label: 'Email Address', 
      value: 'elangorameshofficial@gmail.com', 
      icon: Mail, 
      color: 'bg-indigo-50 text-indigo-600' 
    },
    { 
      label: 'Date of Birth', 
      value: '10.01.2006', 
      icon: Calendar, 
      color: 'bg-rose-50 text-rose-600' 
    },
    { 
      label: 'Languages Known', 
      value: 'Tamil, English', 
      icon: Languages, 
      color: 'bg-amber-50 text-amber-600' 
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {infoFields.map((field, index) => (
        <div 
          key={index} 
          className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-6 group"
        >
          <div className={`p-4 rounded-2xl ${field.color} transition-transform group-hover:scale-110`}>
            <field.icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">
              {field.label}
            </h3>
            <p className="text-xl font-bold text-slate-900 break-words">
              {field.value}
            </p>
          </div>
        </div>
      ))}
      
      {/* Decorative card to fill grid if needed or add extra bio */}
      <div className="bg-indigo-600 p-8 rounded-3xl shadow-xl shadow-indigo-100 flex flex-col justify-center text-white md:col-span-2 lg:col-span-1">
        <h3 className="text-xl font-bold mb-2">Professional Profile</h3>
        <p className="opacity-90 leading-relaxed">
          Driven by curiosity and a passion for technology, I aim to create impactful digital products that bridge the gap between human needs and technological possibilities.
        </p>
      </div>
    </div>
  );
}
