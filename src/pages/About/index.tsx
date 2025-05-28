import React from 'react';
import { Award, BookOpen, Building2, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Über mich</h1>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
      </div>

      {/* Profile Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden">
              <img
                src="profil.png"
                alt="Levke Oelke"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-lg">
              <p className="font-medium">Master der Architektur</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Levke Oelke</h2>
            <p className="text-primary-700 text-lg mb-8 leading-relaxed">
              Als engagierte Architektin mit über 15 Jahren Erfahrung spezialisiere ich mich auf 
              nachhaltige und innovative Architekturlösungen, die Form, Funktion und 
              Umweltverantwortung harmonisch verbinden.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-neutral-100">
                <Building2 className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Nachhaltiges Design</h3>
                <p className="text-primary-600 text-sm">Umweltfreundliche Lösungen für moderne Architektur</p>
              </div>
              <div className="p-4 rounded-lg bg-neutral-100">
                <Users className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Kundenfokus</h3>
                <p className="text-primary-600 text-sm">Kollaborativer Ansatz zur Erfüllung von Kundenwünschen</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold text-primary-900">Erfahrung</h2>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-neutral-100">
              <p className="text-accent font-medium">2020 - Heute</p>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Leitende Architektin</h3>
              <p className="text-primary-700">Leitung nachhaltiger Architekturprojekte in ganz Deutschland</p>
            </div>
            <div className="p-6 rounded-lg bg-neutral-100">
              <p className="text-accent font-medium">2015 - 2020</p>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Senior Architektin</h3>
              <p className="text-primary-700">Spezialisierung auf Wohn- und Gewerbeprojekte</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold text-primary-900">Ausbildung</h2>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-neutral-100">
              <p className="text-accent font-medium">2010</p>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Master of Architecture</h3>
              <p className="text-primary-700">Technische Universität München</p>
            </div>
            <div className="p-6 rounded-lg bg-neutral-100">
              <p className="text-accent font-medium">2008</p>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Bachelor of Architecture</h3>
              <p className="text-primary-700">Technische Universität Berlin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-primary-900 mb-6">Designphilosophie</h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
        <p className="text-primary-700 text-lg leading-relaxed">
          Meine architektonische Philosophie konzentriert sich auf die Schaffung nachhaltiger, 
          menschenzentrierter Räume, die Gemeinschaften positiv beeinflussen. Jedes Projekt 
          wird mit tiefem Verständnis für Umweltverantwortung, kulturellen Kontext und 
          innovative Designlösungen angegangen. Ich glaube, dass großartige Architektur 
          nicht nur ästhetisch ansprechend sein sollte, sondern auch zum Wohlbefinden 
          ihrer Nutzer und der Umwelt beitragen muss.
        </p>
      </div>
    </div>
  );
};

export default About;
