import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { AlertTriangle, Shield, Gavel, Settings, FileCheck } from 'lucide-react';
import { RISK_CATEGORIES, SUPPORTED_CONTRACT_TYPES } from '../contract-constants';

interface RiskCategoryProps {
    category: {
        title: string;
        description: string;
        examples: string[];
    };
    icon: React.ReactNode;
    color: string;
}

const RiskCategory: React.FC<RiskCategoryProps> = ({ category, icon, color }) => {
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
            className={`group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-${color}-500/30 hover:bg-${color}-950/20 overflow-hidden transform h-full flex flex-col ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-${color}-500 to-${color}-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
            
            {/* Animated background glow */}
            <div className={`absolute inset-0 bg-gradient-to-r from-${color}-500/5 to-${color}-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
                <div className={`group/icon w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-${color}-600 to-${color}-500 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl hover:shadow-${color}-500/30`}>
                    <div className="group-hover/icon:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                </div>
                
                <h3 className={`text-xl font-semibold text-zinc-100 mb-3 group-hover:text-${color}-400 transition-colors duration-300`}>{category.title}</h3>
                <p className="text-zinc-400 mb-6 flex-grow">{category.description}</p>
                
                <div className="bg-zinc-800/50 rounded-lg p-4 text-left hover:bg-zinc-800/70 transition-all duration-300 group-hover:border-${color}-500/30 border border-transparent">
                    <h4 className="text-sm font-medium text-zinc-300 mb-3">Ejemplos detectados:</h4>
                    <ul className="space-y-2">
                        {category.examples.map((example, index) => (
                            <li key={index} className="flex text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 group/item">
                                <span className={`text-${color}-500 mr-2 group-hover/item:animate-pulse group-hover/item:scale-110 transition-all duration-200`}>⚠</span>
                                <span>{example}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const ContractRiskAnalysisSection = forwardRef<HTMLElement>((props, ref) => {
    const riskCategories = [
        { ...RISK_CATEGORIES.FINANCIERO, icon: <AlertTriangle size={28} />, color: 'red' },
        { ...RISK_CATEGORIES.LEGAL, icon: <Gavel size={28} />, color: 'orange' },
        { ...RISK_CATEGORIES.OPERACIONAL, icon: <Settings size={28} />, color: 'yellow' },
        { ...RISK_CATEGORIES.COMPLIANCE, icon: <FileCheck size={28} />, color: 'blue' }
    ];

    return (
        <section ref={ref} id="risk-analysis" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Análisis de Riesgos</h2>
                    <p className="text-xl text-zinc-400">Detección automática y clasificación de riesgos en múltiples categorías para una evaluación integral</p>
                </div>
                
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
                    {riskCategories.map((category, index) => (
                        <RiskCategory 
                            key={index}
                            category={category}
                            icon={category.icon}
                            color={category.color}
                        />
                    ))}
                </div>

                {/* Severity levels */}
                <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-700 rounded-2xl p-8 lg:p-12 mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-zinc-100 mb-4">Clasificación de Severidad</h3>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Cada riesgo identificado se clasifica automáticamente según su nivel de severidad y potencial impacto.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">C</span>
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold text-red-400 mb-2">CRÍTICO</h4>
                            <p className="text-sm text-zinc-400">Requiere atención inmediata</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">A</span>
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold text-orange-400 mb-2">ALTO</h4>
                            <p className="text-sm text-zinc-400">Alto impacto potencial</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">M</span>
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold text-yellow-400 mb-2">MEDIO</h4>
                            <p className="text-sm text-zinc-400">Moderado impacto</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">B</span>
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold text-green-400 mb-2">BAJO</h4>
                            <p className="text-sm text-zinc-400">Bajo impacto</p>
                        </div>
                    </div>
                </div>

                {/* Supported contract types */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8 lg:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-zinc-100 mb-4">Tipos de Contratos Soportados</h3>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            El sistema está optimizado para analizar una amplia gama de contratos financieros.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {SUPPORTED_CONTRACT_TYPES.map((type, index) => (
                            <div key={index} className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4 hover:bg-zinc-800/70 transition-all duration-300">
                                <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                                    <Shield size={16} className="text-green-400" />
                                </div>
                                <span className="text-sm text-zinc-300">{type}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});
