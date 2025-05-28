import { FileQuestion, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import './SeiteNichtGefunden.css'

const SeiteNichtGefunden = () => {
  const navigate = useNavigate();

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center justify-center p-6 mb-6 rounded-full bg-accent/10">
          <FileQuestion size={48} className="text-accent" />
        </div>
        
        <h1 className='text-4xl font-bold text-primary-900 mb-4'>404 - Seite nicht gefunden</h1>
        
        <p className='text-lg text-primary-700 max-w-2xl mx-auto mb-8'>
          Entschuldigung, die von Ihnen gesuchte Seite konnte nicht gefunden werden. 
          Möglicherweise wurde sie verschoben oder gelöscht.
        </p>

        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-600 text-white font-medium rounded-lg transition-colors duration-300"
          aria-label="Zur Startseite zurückkehren"
        >
          <Home size={20} />
          Zur Startseite
        </button>
      </div>
    </div>
  )
}

export default SeiteNichtGefunden
