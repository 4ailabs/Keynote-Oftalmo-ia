
import React, { forwardRef } from 'react';

interface TechItemProps {
    icon: string;
    title: string;
    description: string;
    specs: string[];
}

const TechItem: React.FC<TechItemProps> = ({ icon, title, description, specs }) => (
    <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-4xl">
            {icon}
        </div>
        <h3 className="text-2xl font-semibold text-zinc-100 mb-3">{title}</h3>
        <p className="text-zinc-400 mb-6">{description}</p>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-left">
            <ul className="space-y-2">
                {specs.map((spec, index) => (
                    <li key={index} className="flex">
                        <span className="text-blue-500 mr-2">◆</span>
                        <span className="text-sm text-zinc-400">{spec}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export const TechnologySection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="technology" className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-gradient-to-br from-zinc-900 via-blue-950/20 to-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-16">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Tecnología Médica Avanzada</h2>
                        <p className="text-xl text-zinc-400">Arquitectura especializada diseñada específicamente para el razonamiento clínico oftalmológico</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <TechItem 
                            icon="🧬"
                            title="Motor de Razonamiento Bayesiano"
                            description="Sistema avanzado que actualiza probabilidades diagnósticas en tiempo real, considerando nueva evidencia y correlaciones clínicas específicas de oftalmología."
                            specs={[
                                "Algoritmos de inferencia probabilística especializada",
                                "Base de conocimiento con 2,000+ correlaciones",
                                "Actualización dinámica de probabilidades",
                                "Integración de likelihood ratios específicos"
                            ]}
                        />
                        <TechItem 
                            icon="🔍"
                            title="Sistema de Validación de Fuentes"
                            description="Evaluación automática de autoridad médica que garantiza que solo evidencia de la más alta calidad sea considerada en el proceso de análisis."
                            specs={[
                                "Scoring automático basado en 15+ criterios",
                                "Verificación de factor de impacto y autoridad",
                                "Detección de sesgos y conflictos de interés",
                                "Filtrado por fecha y relevancia"
                            ]}
                        />
                        <TechItem 
                            icon="⚡"
                            title="Detección de Signos de Alarma"
                            description="Algoritmos especializados que identifican automáticamente red flags oftalmológicos que requieren evaluación y tratamiento inmediatos."
                            specs={[
                                "Base de datos con 200+ signos de alarma",
                                "Clasificación por urgencia y gravedad",
                                "Alertas automáticas para condiciones tiempo-dependientes",
                                "Integración con protocolos de emergencia"
                            ]}
                        />
                        <TechItem 
                            icon="📊"
                            title="Análisis Diferencial Inteligente"
                            description="Evaluación sistemática de diagnósticos diferenciales con cálculo automatizado de probabilidades y análisis de evidencia a favor y en contra."
                            specs={[
                                "Matriz de diagnósticos por síntoma",
                                "Cálculo de sensitivity y specificity",
                                "Análisis de cost-effectiveness",
                                "Recomendaciones de secuencia diagnóstica"
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
});
