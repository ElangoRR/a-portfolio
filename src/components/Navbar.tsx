import React from 'react';

interface NavbarProps {
  activeTab: string;
}

export function Navbar({ activeTab }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'personal-info', label: 'Info' },
    { id: 'certifications', label: 'Certs' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'links', label: 'Links' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-black tracking-tighter text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              ELANGO.
            </button>
          </div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-[13px] font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
              Active: {activeTab.replace('-', ' ')}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
