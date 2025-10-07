import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { Bot, TrendingUp, Network } from 'lucide-react';
import { TECHNOLOGY_COMPONENTS } from '../contract-constants';

interface TechnologyCardProps {
    name: string;
    description: string;
    capabilities: string[];
    icon: React.ReactNode;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ name, description, capabilities, icon }) => {
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

    const getGradientColors = (name: string) => {
        switch (name) {
            case 'Claude SDK':
                return 'from-blue-600 to-blue-500';
            case 'FinBERT':
                return 'from-green-600 to-green-500';
            case 'GraphRAG':
                return 'from-purple-600 to-purple-500';
            default:
                return 'from-zinc-600 to-zinc-500';
        }
    };

    const getBorderColor = (name: string) => {
        switch (name) {
            case 'Claude SDK':
                return 'hover:border-blue-500/30';
            case 'FinBERT':
                return 'hover:border-green-500/30';
            case 'GraphRAG':
                return 'hover:border-purple-500/30';
            default:
                return 'hover:border-zinc-500/30';
        }
    };

    const getTextColor = (name: string) => {
        switch (name) {
            case 'Claude SDK':
                return 'group-hover:text-blue-400';
            case 'FinBERT':
                return 'group-hover:text-green-400';
            case 'GraphRAG':
                return 'group-hover:text-purple-400';
            default:
                return 'group-hover:text-zinc-400';
        }
    };

    const getGlowColor = (name: string) => {
        switch (name) {
            case 'Claude SDK':
                return 'from-blue-500/5 to-blue-400/5';
            case 'FinBERT':
                return 'from-green-500/5 to-green-400/5';
            case 'GraphRAG':
                return 'from-purple-500/5 to-purple-400/5';
            default:
                return 'from-zinc-500/5 to-zinc-400/5';
        }
    };

    return (
        <div 
            ref={ref}
            className={`group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 ${getBorderColor(name)} hover:bg-zinc-950/20 overflow-hidden transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${getGradientColors(name)} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
            
            {/* Animated background glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${getGlowColor(name)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
                <div className={`group/icon w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${getGradientColors(name)} rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl shadow-lg`}>
                    <div className="group-hover/icon:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-zinc-100 mb-4 transition-colors duration-300">{name}</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">{description}</p>
                
                <div className="bg-zinc-800/50 rounded-lg p-6 text-left hover:bg-zinc-800/70 transition-all duration-300 border border-transparent">
                    <h4 className="text-lg font-medium text-zinc-200 mb-4">Capacidades Principales:</h4>
                    <ul className="space-y-3">
                        {capabilities.map((capability, index) => (
                            <li key={index} className="flex text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 group/item">
                                <span className="text-green-500 mr-3 group-hover/item:animate-pulse group-hover/item:scale-110 transition-all duration-200">✓</span>
                                <span>{capability}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const ContractTechnologySection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="technology" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Tecnologías Integradas</h2>
                    <p className="text-xl text-zinc-400">Combinación sinérgica de Claude SDK, FinBERT y GraphRAG para análisis contractual de máxima precisión</p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {TECHNOLOGY_COMPONENTS.map((component, index) => (
                        <TechnologyCard 
                            key={index}
                            name={component.name}
                            description={component.description}
                            capabilities={component.capabilities}
                            icon={component.icon === 'Bot' ? <Bot size={32} /> : 
                                  component.icon === 'TrendingUp' ? <TrendingUp size={32} /> : 
                                  <Network size={32} />}
                        />
                    ))}
                </div>

                {/* Integration benefits */}
                <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-700 rounded-2xl p-8 lg:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-zinc-100 mb-4">Sinergia Tecnológica</h3>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            La combinación de las tres tecnologías proporciona un análisis integral que ningún componente individual podría lograr.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Bot size={24} className="text-blue-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Análisis Contextual</h4>
                            <p className="text-sm text-zinc-400">Interpretación profunda con Claude</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <TrendingUp size={24} className="text-green-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Análisis Cuantitativo</h4>
                            <p className="text-sm text-zinc-400">Sentimiento financiero con FinBERT</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Network size={24} className="text-purple-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Análisis Estructural</h4>
                            <p className="text-sm text-zinc-400">Relaciones con GraphRAG</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Mayor Precisión</h4>
                            <p className="text-sm text-zinc-400">Detección avanzada de riesgos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
