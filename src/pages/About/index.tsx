import React from 'react';
import { Award, BookOpen, Building2, Users, Languages, Lightbulb, Wallpaper, Circle } from 'lucide-react';

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
                src="profil.jpeg"
                alt="Levke Oelke"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 right-6 lg:-right-6 bg-accent text-white p-4 rounded-lg">
              <p className="font-medium">Master of Arts ~ Architektur</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Levke Oelke</h2>
            <p className="text-primary-700 text-lg mb-8 leading-relaxed">
              Ich freue mich darauf im Beruf, sich mit den Herausforderungen unserer gebauten Umwelt auseinanderzusetzen. In meiner Freizeit bin ich gerne in Bewegung - beim Wandern, Klettern oder beim kreativen Arbeiten.
            </p>

            {/* <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-neutral-200">
                <Building2 className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Nachhaltiges Design</h3>
                <p className="text-primary-600 text-sm">Umweltfreundliche Lösungen für moderne Architektur</p>
              </div>
              <div className="p-4 rounded-lg bg-neutral-200">
                <Users className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Kundenfokus</h3>
                <p className="text-primary-600 text-sm">Kollaborativer Ansatz zur Erfüllung von Kundenwünschen</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Experience & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold text-primary-900">Erfahrung</h2>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-neutral-200">
              <p className="text-accent font-medium">2020 - Heute</p>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Leitende Architektin</h3>
              <p className="text-primary-700">Leitung nachhaltiger Architekturprojekte in ganz Deutschland</p>
            </div>
            <div className="p-6 rounded-lg bg-neutral-200">
              <p className="text-accent font-medium">2015 - 2020</p>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Senior Architektin</h3>
              <p className="text-primary-700">Spezialisierung auf Wohn- und Gewerbeprojekte</p>
            </div>
          </div>
        </div> */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold text-primary-900">Kenntnisse</h2>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-neutral-200">
              <div className='flex items-center gap-3 mb-3'>
                <Languages className="w-6 h-6 text-accent mb-3" />
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Sprachen</h3>
              </div>
              <div className='grid grid-cols-2 gap-x-12 gap-y-4'>
                <p className="text-xl font-semibold text-primary-900 mb-2">Deutsch</p>
                <p className="text-primary-700">Muttersprache</p>
                <p className="text-xl font-semibold text-primary-900 mb-2">Englisch</p>
                <p className="text-primary-700">Fließend</p>
                <p className="text-xl font-semibold text-primary-900 mb-2">Spanisch</p>
                <p className="text-primary-700">Grundlegend</p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-neutral-200">
              <div className='flex items-center gap-3 mb-3'>
                <Wallpaper className="w-6 h-6 text-accent mb-3" />
                <h3 className="text-xl font-semibold text-primary-900 mb-2">EDV-Kenntnisse</h3>
              </div>
              <div className='grid grid-cols-2 gap-x-12 gap-y-4'>
                {/* MS-Office */}
                <p className="text-xl font-semibold text-primary-900 mb-2">MS Office</p>
                <div className='flex items-center gap-2'>
                  {[...Array(4)].map((_, i) => (
                    <Circle
                      key={i}
                      className="w-6 h-6 text-accent fill-accent"
                    />
                  ))}
                  {[...Array(1)].map((_, i) => (
                    <Circle
                      key={i}
                      className="w-6 h-6 text-accent"
                    />
                  ))}
                </div>
                {/* MS-Office */}
                <p className="text-xl font-semibold text-primary-900 mb-2">CAD - Vectorworks</p>
                <div className='flex items-center gap-2'>
                  {[...Array(5)].map((_, i) => (
                    <Circle
                      key={i}
                      className="w-6 h-6 text-accent fill-accent"
                    />
                  ))}
                  {[...Array(0)].map((_, i) => (
                    <Circle
                      key={i}
                      className="w-6 h-6 text-accent"
                    />
                  ))}
                </div>
                {/* MS-Office */}
                <p className="text-xl font-semibold text-primary-900 mb-2">Adobe Indesign</p>
                <div className='flex items-center gap-2'>
                  {[...Array(5)].map((_, i) => (
                    <Circle
                      key={i}
                      className="w-6 h-6 text-accent fill-accent"
                    />
                  ))}
                  {[...Array(0)].map((_, i) => (
                    <Circle
                      key={i}
                      className="w-6 h-6 text-accent"
                    />
                  ))}
                </div>
                {/* MS-Office */}
                <p className="text-xl font-semibold text-primary-900 mb-2">Adobe Illustrator</p>
                <div className='flex items-center gap-2'>
                  {[...Array(4)].map((_, i) => (
                    <Circle
                      key={i}
                      className="w-6 h-6 text-accent fill-accent"
                    />
                  ))}
                  {[...Array(1)].map((_, i) => (
                    <Circle
                      key={i}
                      className="w-6 h-6 text-accent"
                    />
                  ))}
                </div>
                {/* MS-Office */}
                <p className="text-xl font-semibold text-primary-900 mb-2">Adobe Photoshop</p>
                <div className='flex items-center gap-2'>
                  {[...Array(4)].map((_, i) => (
                    <Circle
                      key={i}
                      className="w-6 h-6 text-accent fill-accent"
                    />
                  ))}
                  {[...Array(1)].map((_, i) => (
                    <Circle
                      key={i}
                      className="w-6 h-6 text-accent"
                    />
                  ))}
                </div>
                {/* MS-Office */}
                <p className="text-xl font-semibold text-primary-900 mb-2">Sketch Up</p>
                <div className='flex items-center gap-2'>
                  {[...Array(2)].map((_, i) => (
                    <Circle
                      key={i}
                      className="w-6 h-6 text-accent fill-accent"
                    />
                  ))}
                  {[...Array(3)].map((_, i) => (
                    <Circle
                      key={i}
                      className="w-6 h-6 text-accent"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold text-primary-900">Ausbildung</h2>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-neutral-200 relative">
              <p className="text-accent font-bold">2025</p>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Master of Arts ~ Architektur</h3>
              <p className="text-primary-700">Technische Hochschule Lübeck</p>
              <p className="font-medium absolute top-7 -translate-y-1/2 right-2 sm:top-1/2 sm:right-10 lg:right-5 bg-accent text-white p-2 sm:p-4 rounded-full">1,3</p>
            </div>
            <div className="p-6 rounded-lg bg-neutral-200 relative">
              <p className="text-accent font-bold">2023</p>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Bachelor of Arts ~ Architektur</h3>
              <p className="text-primary-700">Technische Hochschule Lübeck</p>
              <p className="font-medium absolute top-7 -translate-y-1/2 right-2 sm:top-1/2 sm:right-10 lg:right-5 bg-accent text-white p-2 sm:p-4 rounded-full">1,6</p>
            </div>
            <div className="p-6 rounded-lg bg-neutral-200 relative">
              <p className="text-accent font-bold">2019</p>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Allgemeine Hochschulreife</h3>
              <p className="text-primary-700">Regionales Berufsbildungszentrum Wirtschaft Kiel</p>
              <p className="font-medium absolute top-7 -translate-y-1/2 right-2 sm:top-1/2 sm:right-10 lg:right-5 bg-accent text-white p-2 sm:p-4 rounded-full">1,9</p>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      {/* <div className="max-w-3xl mx-auto text-center">
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
      </div> */}
    </div>
  );
};

export default About;
