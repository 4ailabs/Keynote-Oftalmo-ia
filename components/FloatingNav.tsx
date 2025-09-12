
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
        <nav className="hidden lg:block fixed top-1/2 right-10 -translate-y-1/2 z-50">
            <div className="bg-black/50 border border-zinc-700 rounded-full p-2 backdrop-blur-md">
                <ul className="flex flex-col gap-2">
                    {sections.map((sectionId) => (
                        <li key={sectionId} className="group relative flex items-center">
                            <button
                                onClick={() => onNavigate(sectionId)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    activeSection === sectionId ? 'bg-blue-500 scale-125' : 'bg-zinc-600 hover:bg-blue-500/70'
                                }`}
                                aria-label={`Go to ${sectionId} section`}
                            ></button>
                             <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                {sectionLabels[sectionId] || sectionId}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
