import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-10 lg:p-16 bg-slate-900 text-white">
          <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
          <p className="text-slate-400 mb-12 text-lg">
            Feel free to reach out for collaborations, project inquiries, or just to say hello!
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-2xl bg-white/10 group-hover:bg-indigo-600 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Email</p>
                <p className="text-xl font-medium">elangorameshofficial@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-2xl bg-white/10 group-hover:bg-indigo-600 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Phone</p>
                <p className="text-xl font-medium">8248046339</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-2xl bg-white/10 group-hover:bg-indigo-600 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Location</p>
                <p className="text-xl font-medium">Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10">
            <div className="flex gap-4">
              {['IN', 'GH', 'TW', 'DR'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold hover:bg-white hover:text-slate-900 transition-colors cursor-pointer">
                  {social}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-10 lg:p-16">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
              <input 
                type="text" 
                placeholder="Project Inquiry"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
              <textarea 
                rows={5}
                placeholder="How can I help you?"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
