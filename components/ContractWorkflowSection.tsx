import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { Upload, Brain, BarChart3, Network, FileText, ArrowRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '../contract-constants';

interface WorkflowStepProps {
    step: {
        id: number;
        title: string;
        description: string;
        details: string[];
        icon: string;
    };
    isLast: boolean;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ step, isLast }) => {
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

    const getIconComponent = (iconName: string) => {
        switch (iconName) {
            case 'Upload': return <Upload size={24} />;
            case 'Brain': return <Brain size={24} />;
            case 'BarChart3': return <BarChart3 size={24} />;
            case 'Network': return <Network size={24} />;
            case 'FileText': return <FileText size={24} />;
            default: return <Upload size={24} />;
        }
    };

    return (
        <div className="flex items-start gap-6">
            {/* Step content */}
            <div 
                ref={ref}
                className={`flex-1 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:border-green-500/30 hover:bg-green-950/20 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${step.id * 200}ms` }}
            >
                <div className="flex items-start gap-4">
                    {/* Step number and icon */}
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4">
                            {step.id}
                        </div>
                        <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-green-400">
                            {getIconComponent(step.icon)}
                        </div>
                    </div>
                    
                    {/* Step content */}
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-zinc-100 mb-3">{step.title}</h3>
                        <p className="text-zinc-400 mb-4 leading-relaxed">{step.description}</p>
                        
                        <div className="bg-zinc-800/50 rounded-lg p-4">
                            <h4 className="text-sm font-medium text-zinc-300 mb-3">Detalles del proceso:</h4>
                            <ul className="space-y-2">
                                {step.details.map((detail, index) => (
                                    <li key={index} className="flex text-sm text-zinc-400">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Arrow connector */}
            {!isLast && (
                <div className="flex-shrink-0 mt-6">
                    <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">
                        <ArrowRight size={16} className="text-zinc-400" />
                    </div>
                </div>
            )}
        </div>
    );
};

export const ContractWorkflowSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="workflow" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Proceso de Análisis</h2>
                    <p className="text-xl text-zinc-400">Flujo sistemático de 5 etapas que combina múltiples tecnologías para un análisis integral de contratos</p>
                </div>
                
                <div className="space-y-8">
                    {WORKFLOW_STEPS.map((step, index) => (
                        <WorkflowStep 
                            key={step.id}
                            step={step}
                            isLast={index === WORKFLOW_STEPS.length - 1}
                        />
                    ))}
                </div>

                {/* Process summary */}
                <div className="mt-16 bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-700 rounded-2xl p-8 lg:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-zinc-100 mb-4">Resultado Final</h3>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Al finalizar el proceso, obtienes un análisis completo que incluye riesgos identificados, 
                            recomendaciones accionables y visualizaciones interactivas.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">!</span>
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Riesgos Identificados</h4>
                            <p className="text-sm text-zinc-400">Clasificación por severidad y categoría</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <FileText size={24} className="text-blue-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Reportes Detallados</h4>
                            <p className="text-sm text-zinc-400">Múltiples formatos con recomendaciones</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Network size={24} className="text-purple-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Grafos Interactivos</h4>
                            <p className="text-sm text-zinc-400">Visualización de relaciones y dependencias</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
