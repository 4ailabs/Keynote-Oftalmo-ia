import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { Bot, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

export const ContractBrandingSection = forwardRef<HTMLElement>((props, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} id="branding" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div 
                    ref={contentRef}
                    className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <div className="bg-gradient-to-br from-zinc-900 via-green-950/20 to-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-16">
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl flex items-center justify-center">
                                    <Bot size={32} className="text-white" />
                                </div>
                                <div className="text-left">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-2">Desarrollado por 4ailabs</h2>
                                    <p className="text-lg text-zinc-400">Especialistas en creación de agentes de IA especializados</p>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                                            <Sparkles size={20} className="text-green-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-zinc-100">Expertise en IA Financiera</h3>
                                    </div>
                                    <p className="text-zinc-400 leading-relaxed">
                                        Especialización en análisis de contratos financieros, detección de riesgos y compliance regulatorio 
                                        mediante tecnologías avanzadas de IA.
                                    </p>
                                </div>
                                
                                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                            <Bot size={20} className="text-blue-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-zinc-100">Tecnologías de Vanguardia</h3>
                                    </div>
                                    <p className="text-zinc-400 leading-relaxed">
                                        Integración de Claude SDK, FinBERT y GraphRAG para crear soluciones de análisis 
                                        contractual de máxima precisión y confiabilidad.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 mb-8">
                                <h3 className="text-xl font-semibold text-zinc-100 mb-4">Nuestra Misión</h3>
                                <p className="text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                                    En 4ailabs desarrollamos agentes de IA especializados que transforman la manera en que las empresas 
                                    analizan y gestionan información crítica. Nuestro enfoque combina la más avanzada tecnología de IA 
                                    con un profundo entendimiento de los desafíos específicos de cada industria.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a 
                                    href="https://4ailabs.vercel.app" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium text-lg transition-all duration-300 hover:from-green-700 hover:to-emerald-700 hover:scale-105 hover:shadow-2xl hover:shadow-green-600/30"
                                >
                                    <Bot size={20} />
                                    <span>Visitar 4ailabs</span>
                                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                                
                                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-zinc-600 text-zinc-100 rounded-xl font-medium text-lg transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-500 hover:scale-105">
                                    <Sparkles size={20} />
                                    <span>Conoce más proyectos</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
