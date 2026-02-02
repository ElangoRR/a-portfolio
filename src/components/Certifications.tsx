import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const certificates = [
  {
    title: "AI For Everyone",
    description: "Fundamental concepts of artificial intelligence, machine learning, and their real-world applications.",
    link: "https://drive.google.com/file/d/1S35oL6hExj2Zh2nRCInkHUKJDD-cWq8E/view?usp=drive_link"
  },
  {
    title: "Python Programming",
    description: "Mastery of Python syntax, data structures, and algorithmic problem-solving techniques.",
    link: "https://drive.google.com/file/d/1GiVX2_5xUDNoWVA0j6UfZhmXDVJOf6Ap/view?usp=drive_link"
  },
  {
    title: "UI/UX Design Specialist",
    description: "Comprehensive study of user-centered design, prototyping, and visual interface principles.",
    link: "https://drive.google.com/file/d/12Ne6bl3nTpuc5qkOJ7ymjCTEI4qDyIUg/view?usp=drive_link"
  },
  {
    title: "Introduction to Cyber Security",
    description: "Essential knowledge of network security, cryptography, and digital protection strategies.",
    link: "https://drive.google.com/file/d/1kixnG6Q6sy3Rrtc3WFZQpZeigw_21r0X/view?usp=drive_link"
  },
  {
    title: "Developing Soft Skills and Personality",
    description: "Enhancing communication, leadership, and professional etiquette for career growth.",
    link: "https://drive.google.com/file/d/1gR6uxee06H8IvwgtjKQlihLPUBTWH4gi/view?usp=drive_link"
  },
  {
    title: "Problem Solving through Programming in C",
    description: "In-depth understanding of C programming, logic building, and computational thinking.",
    link: "https://drive.google.com/file/d/1R0sI6724Hmbam7o3uhtOmOoyXvUmjQTg/view?usp=drive_link"
  },
  {
    title: "Programming in Java",
    description: "Advanced object-oriented programming concepts using the Java ecosystem.",
    link: "https://drive.google.com/file/d/1B3ZgKSFXpF0ytTrRbC106j0nctXyY2ZC/view?usp=drive_link"
  },
  {
    title: "Database Management System",
    description: "Principles of relational databases, SQL optimization, and efficient data storage.",
    link: "https://drive.google.com/file/d/1qoK1BdRFjqQNsT4RZG5fO5jCnWAQ21_g/view?usp=drive_link"
  },
  {
    title: "Design and Analysis of Algorithms",
    description: "Theoretical and practical approaches to efficient algorithm design and complexity analysis.",
    link: "https://drive.google.com/file/d/1DVpcy0qYP5BoBKGZWHWJH5Vu_jps72TW/view?usp=drive_link"
  },
  {
    title: "Cloud Computing",
    description: "Fundamentals of cloud infrastructure, virtualization, and distributed computing models.",
    link: "https://drive.google.com/file/d/1C0Tw9FoH1XB6Np3vkm_98He8wO09uW2Z/view?usp=drive_link"
  },
  {
    title: "Introduction to Machine Learning",
    description: "Core algorithms, statistical modeling, and predictive analytics implementation.",
    link: "https://drive.google.com/file/d/15fhitU0JkFHY9x_2iE6yBLiXp0vlmGK9/view?usp=drive_link"
  },
  {
    title: "Python for Data Science",
    description: "Leveraging Python libraries for data manipulation, visualization, and exploratory analysis.",
    link: "https://drive.google.com/file/d/1X3dfZXyjzOhtm9cAMeoYEkxd8QQwrXKu/view?usp=drive_link"
  }
];

export function Certifications() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((cert, index) => (
        <div 
          key={index} 
          className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
        >
          <div className="aspect-video relative overflow-hidden bg-slate-100">
            <ImageWithFallback 
              src={`https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGFjaGlldmVtZW50JTIwYmFkZ2V8ZW58MXx8fHwxNzY5OTIzNjU4fDA&ixlib=rb-4.1.0&q=80&w=600&sig=${index}`} 
              alt={cert.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <div className="bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>
          
          <div className="p-8 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
              {cert.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
              {cert.description}
            </p>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-indigo-600 transition-colors group/btn"
            >
              View Certificate
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
