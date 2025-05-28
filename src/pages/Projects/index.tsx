import React, { useState } from 'react';
import { IProject } from '../../lib/types';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Alle');
  
  const projects: IProject[] = [
    {
      id: "1",
      title: "Moderner Wohnkomplex",
      description: "Ein nachhaltiger Wohnkomplex mit modernen Designelementen und umweltfreundlichen Materialien.",
      images: ["PictureDummy 1.jpeg", "PictureDummy 2.jpeg"],
      year: 2024,
      location: "Hamburg, Deutschland",
      category: "Wohnbau"
    },
    {
      id: "2",
      title: "Urbaner Büroraum",
      description: "Ein zeitgenössisches Bürogebäude, das Zusammenarbeit und Wohlbefinden fördert.",
      images: ["PictureDummy 1.jpeg", "PictureDummy 2.jpeg"],
      year: 2023,
      location: "Berlin, Deutschland",
      category: "Gewerbebau"
    },
    {
      id: "3",
      title: "Kulturzentrum",
      description: "Ein lebendiger Gemeinschaftsraum, der lokale Kultur und künstlerischen Ausdruck zelebriert.",
      images: ["PictureDummy 1.jpeg", "PictureDummy 2.jpeg"],
      year: 2025,
      location: "München, Deutschland",
      category: "Kultur"
    },
    {
      id: "4",
      title: "Kulturzentrum",
      description: "Ein lebendiger Gemeinschaftsraum, der lokale Kultur und künstlerischen Ausdruck zelebriert.",
      images: ["PictureDummy 2.jpeg", "PictureDummy 1.jpeg"],
      year: 2025,
      location: "München, Deutschland",
      category: "Wohnbau"
    }
  ];

  const categories = ['Alle', ...new Set(projects.map(project => project.category))];
  const filteredProjects = activeCategory === 'Alle' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Meine Projekte</h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        <p className="text-primary-700 max-w-2xl mx-auto">
          Entdecken Sie mein Portfolio innovativer Architekturprojekte, jedes einzelne 
          mit einer einzigartigen Vision und nachhaltigem Ansatz gestaltet.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center mb-12">
        <div className='bg-primary bg-opacity-75 p-4 rounded-full flex gap-4 shadow-md mb-6'>
        {categories.map((category) => (
          <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
            ${activeCategory === category 
              ? 'bg-accent text-white' 
              : 'bg-neutral-100 text-primary-600 hover:bg-neutral-200'}`}
              >
            {category}
          </button>
        ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-neutral-200 text-sm">{project.year}</span>
                    <span className="text-accent text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-50 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                  <p className="text-accent-200 text-sm mt-2">
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
