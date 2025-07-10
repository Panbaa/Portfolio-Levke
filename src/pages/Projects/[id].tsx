import { useParams, useNavigate } from 'react-router-dom';
import allProjects from '../../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-primary-900 mb-4">Projekt nicht gefunden</h1>
        <button
          onClick={() => navigate('/projekte')}
          className="mt-8 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-600 transition-colors duration-300"
        >
          Zurück zu den Projekten
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <button
        onClick={() => navigate('/projekte')}
        className="mb-8 px-4 py-2 bg-primary-100 text-primary-900 rounded hover:bg-primary-200 transition-colors duration-200"
      >
        ← Zurück zu allen Projekten
      </button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-4 mb-6 text-primary-700 text-sm">
          <span>Jahr: {project.year}</span>
          <span>Ort: {project.location}</span>
          <span>Kategorie: {project.category}</span>
        </div>
        <p className="text-lg text-primary-700 mb-8">{project.aufgabe}</p>
        <p className="text-lg text-primary-700 mb-8">{project.rahmenbedingungen}</p>
        <p className="text-lg text-primary-700 mb-8">{project.herausforderung}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.images.map((img, idx) => (
            <div key={idx} className="aspect-w-4 aspect-h-3 w-full">
              <img
                src={img}
                alt={`${project.title} Bild ${idx + 1}`}
                className="rounded-xl shadow-md object-cover w-full h-full"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
