import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PersonalInfo } from './components/PersonalInfo';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Links } from './components/Links';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Handle scroll to update active tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'personal-info', 'certifications', 'projects', 'resume', 'links', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-700 overflow-x-hidden">
      <Navbar activeTab={activeTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <section id="home" className="min-h-[calc(100vh-80px)] flex items-center">
          <Hero />
        </section>

        <section id="personal-info" className="py-24 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Personal Information</h2>
            <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <PersonalInfo />
        </section>

        <section id="certifications" className="py-24 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Certifications</h2>
            <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              A collection of my professional achievements and technical certifications.
            </p>
          </div>
          <Certifications />
        </section>

        <section id="projects" className="py-24 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Selected Projects</h2>
            <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Showcasing key technical projects focusing on AI, Machine Learning, and data-driven solutions.
            </p>
          </div>
          <Projects />
        </section>

        <section id="resume" className="py-24 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Resume</h2>
            <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <Resume />
        </section>

        <section id="links" className="py-24 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Professional Profiles</h2>
            <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Connect with me on various professional and technical platforms.
            </p>
          </div>
          <Links />
        </section>

        <section id="contact" className="py-24 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get In Touch</h2>
            <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
