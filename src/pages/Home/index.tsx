import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const featuredProjects = [
    {
      id: 1,
      title: "Moderner Wohnkomplex",
      description: "Eine nachhaltige Wohnanlage mit modernen Designelementen und umweltfreundlichen Materialien",
      image: "PictureDummy 1.jpeg",
      year: 2024
    },
    {
      id: 2,
      title: "Städtisches Kulturzentrum",
      description: "Ein markantes Gebäude, das Tradition und modernes Design verbindet",
      image: "PictureDummy 2.jpeg",
      year: 2023
    },
    {
      id: 3,
      title: "Grüner Büroturm",
      description: "Nachhaltige Geschäftsarchitektur mit biophilen Designelementen",
      image: "PictureDummy 1.jpeg",
      year: 2025
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-50 mb-6 leading-tight">
              Räume erschaffen,<br />die inspirieren
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 mb-12 max-w-2xl mx-auto">
              Moderne architektonische Lösungen, die Form, Funktion und Nachhaltigkeit vereinen
            </p>
            <button
              onClick={() => navigate('/projekte')}
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-600 transition-colors duration-300"
              aria-label="Zu den Projekten navigieren"
            >
              Projekte ansehen
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            Ausgewählte Projekte
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-neutral-200 text-sm mb-2">{project.year}</p>
                    <h3 className="text-xl font-semibold text-neutral-50 mb-2">{project.title}</h3>
                    <p className="text-neutral-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-neutral-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-8">
              Designphilosophie
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-primary-700 text-lg leading-relaxed">
              Wir glauben an die Schaffung nachhaltiger, menschenzentrierter Architektur, 
              die harmonisch mit ihrer Umgebung verschmilzt und dabei die Grenzen modernen 
              Designs erweitert. Jedes Projekt wird mit besonderer Berücksichtigung 
              ästhetischer Exzellenz und funktionaler Effizienz angegangen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home