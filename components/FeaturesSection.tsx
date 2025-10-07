
import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { Microscope, Brain, Zap, BarChart3, Hospital, FileText } from 'lucide-react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, details }) => {
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
            className={`group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 lg:p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-blue-950/20 overflow-hidden transform h-full flex flex-col ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
                <div className="group/icon w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
                    <div className="group-hover/icon:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                </div>
                
                <h3 className="text-xl font-semibold text-zinc-100 mb-3 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
                <p className="text-zinc-400 mb-6 flex-grow">{description}</p>
                
                <div className="bg-zinc-800/50 rounded-lg p-4 text-left hover:bg-zinc-800/70 transition-all duration-300 group-hover:border-blue-500/30 border border-transparent">
                    <ul className="space-y-2">
                        {details.map((detail, index) => (
                            <li key={index} className="flex text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 group/item">
                                <span className="text-blue-500 mr-2 group-hover/item:animate-pulse group-hover/item:scale-110 transition-all duration-200">→</span>
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const FeaturesSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="features" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Características Avanzadas</h2>
                    <p className="text-xl text-zinc-400">Tecnología médica de vanguardia diseñada específicamente para el oftalmólogo moderno</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <FeatureCard 
                        icon={<Microscope size={28} />}
                        title="Validación Automática de Fuentes"
                        description="Sistema de scoring 0-100 para autoridad médica con filtrado inteligente de fuentes no confiables."
                        details={["Evaluación de factor de impacto", "Verificación de conflictos de interés", "Filtrado por fecha y relevancia", "Detección de contradicciones"]}
                    />
                    <FeatureCard 
                        icon={<Brain size={28} />}
                        title="Razonamiento Bayesiano Avanzado"
                        description="Actualización de probabilidades diagnósticas basada en evidencia acumulativa y contexto clínico."
                        details={["Probabilidades pre-test", "Actualización dinámica con evidencia", "Integración de likelihood ratios", "Consideración de factores de confusión"]}
                    />
                    <FeatureCard 
                        icon={<Zap size={28} />}
                        title="Detección Inteligente de Red Flags"
                        description="Identificación automática de signos de alarma oftalmológicos que requieren atención inmediata."
                        details={["Base de datos con 200+ signos", "Clasificación por urgencia", "Alertas para condiciones tiempo-dependientes", "Protocolos de emergencia integrados"]}
                    />
                    <FeatureCard 
                        icon={<BarChart3 size={28} />}
                        title="Análisis Diferencial Sistemático"
                        description="Evaluación estructurada de diagnósticos con likelihood ratios y análisis de evidencia a favor y en contra."
                        details={["Matriz de diagnósticos por síntoma", "Cálculo de sensitivity/specificity", "Análisis de cost-effectiveness", "Secuencia diagnóstica optimizada"]}
                    />
                    <FeatureCard 
                        icon={<Hospital size={28} />}
                        title="Integración con Protocolos Clínicos"
                        description="Alineación automática con guías de práctica clínica de AAO, ESCRS y otras sociedades reconocidas."
                        details={["Guías AAO actualizadas", "Protocolos ESCRS para cirugía", "Recomendaciones de sociedades", "Adaptación a protocolos institucionales"]}
                    />
                    <FeatureCard 
                        icon={<FileText size={28} />}
                        title="Reportes Médicos Profesionales"
                        description="Generación automática de reportes en formato médico estándar con referencias completas."
                        details={["Formato SOAP+ estructurado", "Referencias bibliográficas completas", "Códigos ICD-10 relevantes", "Plan de seguimiento detallado"]}
                    />
                </div>
            </div>
        </section>
    );
});
