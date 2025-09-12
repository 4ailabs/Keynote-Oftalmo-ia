
import React from 'react';

interface FloatingNavProps {
    sections: string[];
    activeSection: string;
    onNavigate: (id: string) => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ sections, activeSection, onNavigate }) => {
    const sectionLabels: { [key: string]: string } = {
        hero: 'Inicio',
        intro: 'Introducción',
        phases: 'Fases',
        technology: 'Tecnología',
        workflow: 'Flujo de Trabajo',
        'context-engineering': 'Context Engineering',
        features: 'Características',
        stats: 'Resultados',
    };

    return (
        <nav className="hidden lg:block fixed top-1/2 right-10 -translate-y-1/2 z-50 animate-fade-in-right">
            <div className="bg-black/50 border border-zinc-700 rounded-full p-2 backdrop-blur-md hover:bg-black/70 hover:border-zinc-600 transition-all duration-300 group">
                <ul className="flex flex-col gap-2">
                    {sections.map((sectionId, index) => (
                        <li key={sectionId} className="group/item relative flex items-center">
                            <button
                                onClick={() => onNavigate(sectionId)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 group-hover/item:scale-125 ${
                                    activeSection === sectionId 
                                        ? 'bg-blue-500 scale-125 animate-pulse shadow-lg shadow-blue-500/50' 
                                        : 'bg-zinc-600 hover:bg-blue-500/70 hover:scale-110 hover:shadow-md hover:shadow-blue-500/30'
                                }`}
                                aria-label={`Go to ${sectionId} section`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            ></button>
                             <div className={`absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md opacity-0 group-hover/item:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none transform translate-x-2 group-hover/item:translate-x-0 ${
                                 activeSection === sectionId ? 'opacity-100 translate-x-0' : ''
                             }`}>
                                {sectionLabels[sectionId] || sectionId}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
