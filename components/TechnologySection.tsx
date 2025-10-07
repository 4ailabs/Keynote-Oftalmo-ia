
import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { Dna, Search, Zap, BarChart3 } from 'lucide-react';

interface TechItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    specs: string[];
}

const TechItem: React.FC<TechItemProps> = ({ icon, title, description, specs }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={ref}
            className={`text-center transform transition-all duration-1000 h-full flex flex-col ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            <div className="group w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:rotate-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
            </div>
            <h3 className="text-2xl font-semibold text-zinc-100 mb-3 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
            <p className="text-zinc-400 mb-6 flex-grow">{description}</p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-left hover:border-blue-500/50 transition-all duration-300 hover:bg-zinc-900/70">
                <ul className="space-y-2">
                    {specs.map((spec, index) => (
                        <li key={index} className="flex group/item">
                            <span className="text-blue-500 mr-2 group-hover/item:animate-pulse">◆</span>
                            <span className="text-sm text-zinc-400 group-hover/item:text-zinc-300 transition-colors duration-200">{spec}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const TechnologySection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="technology" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-gradient-to-br from-zinc-900 via-blue-950/20 to-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-16">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Arquitectura del Sistema</h2>
                        <p className="text-xl text-zinc-400">Componentes técnicos especializados para razonamiento clínico oftalmológico avanzado</p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <TechItem
                            icon={<Dna size={28} />}
                            title="Motor de Razonamiento Bayesiano"
                            description="Sistema que actualiza probabilidades diagnósticas considerando nueva evidencia y correlaciones clínicas específicas de oftalmología."
                            specs={[
                                "Algoritmos de inferencia probabilística",
                                "Base de conocimiento con 2,000+ correlaciones",
                                "Actualización dinámica de probabilidades",
                                "Integración de likelihood ratios específicos"
                            ]}
                        />
                        <TechItem
                            icon={<Zap size={28} />}
                            title="Detección de Signos de Alarma"
                            description="Algoritmos que identifican automáticamente red flags oftalmológicos que requieren evaluación y tratamiento inmediatos."
                            specs={[
                                "Base de datos con 200+ signos de alarma",
                                "Clasificación por urgencia y gravedad",
                                "Alertas automáticas tiempo-dependientes",
                                "Integración con protocolos de emergencia"
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
});
