import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { FileText, Shield, TrendingUp, Clock, Users, BarChart3, Building, Scale, Search } from 'lucide-react';
import { PRACTICAL_FEATURES, USE_CASES, CONTRACT_TYPES_SUPPORTED } from '../mac-constants';

interface PracticalFeatureProps {
    feature: {
        icon: string;
        title: string;
        description: string;
        benefit: string;
        example: string;
    };
}

const PracticalFeatureCard: React.FC<PracticalFeatureProps> = ({ feature }) => {
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
            case 'FileText': return <FileText size={32} />;
            case 'Shield': return <Shield size={32} />;
            case 'TrendingUp': return <TrendingUp size={32} />;
            case 'Clock': return <Clock size={32} />;
            case 'Users': return <Users size={32} />;
            case 'BarChart3': return <BarChart3 size={32} />;
            default: return <FileText size={32} />;
        }
    };

    return (
        <div 
            ref={ref}
            className={`group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/30 hover:bg-zinc-950/20 overflow-hidden transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-orange-600 to-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            
            <div className="relative z-10">
                <div className="group/icon w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30">
                    <div className="group-hover/icon:scale-110 transition-transform duration-300">
                        {getIconComponent(feature.icon)}
                    </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-zinc-100 mb-4 group-hover:text-orange-400 transition-colors duration-300 text-center">{feature.title}</h3>
                <p className="text-lg text-zinc-300 mb-6 leading-relaxed text-center">{feature.description}</p>
                
                <div className="bg-zinc-800/50 rounded-lg p-4 mb-4">
                    <div className="text-sm font-medium text-orange-400 mb-2">💡 Beneficio:</div>
                    <p className="text-zinc-300 text-sm">{feature.benefit}</p>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-4">
                    <div className="text-sm font-medium text-green-400 mb-2">📊 Ejemplo:</div>
                    <p className="text-zinc-300 text-sm">{feature.example}</p>
                </div>
            </div>
        </div>
    );
};

interface UseCaseProps {
    useCase: {
        scenario: string;
        problem: string;
        solution: string;
        result: string;
        icon: string;
    };
}

const UseCaseCard: React.FC<UseCaseProps> = ({ useCase }) => {
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
            case 'Building': return <Building size={24} />;
            case 'Shield': return <Shield size={24} />;
            case 'Scale': return <Scale size={24} />;
            case 'Search': return <Search size={24} />;
            default: return <Building size={24} />;
        }
    };

    return (
        <div 
            ref={ref}
            className={`bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
                    {getIconComponent(useCase.icon)}
                </div>
                <h4 className="text-lg font-semibold text-zinc-100">{useCase.scenario}</h4>
            </div>
            
            <div className="space-y-3">
                <div>
                    <div className="text-sm font-medium text-red-400 mb-1">❌ Problema:</div>
                    <p className="text-zinc-300 text-sm">{useCase.problem}</p>
                </div>
                
                <div>
                    <div className="text-sm font-medium text-blue-400 mb-1">💡 Solución:</div>
                    <p className="text-zinc-300 text-sm">{useCase.solution}</p>
                </div>
                
                <div>
                    <div className="text-sm font-medium text-green-400 mb-1">✅ Resultado:</div>
                    <p className="text-zinc-300 text-sm font-semibold">{useCase.result}</p>
                </div>
            </div>
        </div>
    );
};

export const MacFunctionalitySection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="functionality" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-5xl sm:text-6xl font-bold text-zinc-100 mb-6">Funcionalidades Prácticas</h2>
                    <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed">
                        Herramientas diseñadas para simplificar el análisis de contratos en tu día a día
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
                    {PRACTICAL_FEATURES.map((feature, index) => (
                        <PracticalFeatureCard 
                            key={index}
                            feature={feature}
                        />
                    ))}
                </div>

                {/* Use Cases Section */}
                <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-700 rounded-2xl p-8 lg:p-12 mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-zinc-100 mb-4">Casos de Uso Reales</h3>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Ejemplos de cómo empresas están usando el analizador para optimizar sus procesos
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {USE_CASES.map((useCase, index) => (
                            <UseCaseCard 
                                key={index}
                                useCase={useCase}
                            />
                        ))}
                    </div>
                </div>

                {/* Contract Types Section */}
                <div className="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 border border-orange-500/20 rounded-2xl p-8 lg:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-zinc-100 mb-4">Tipos de Contratos Soportados</h3>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            El analizador funciona con todos los tipos de contratos financieros y empresariales
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {CONTRACT_TYPES_SUPPORTED.map((contract, index) => (
                            <div key={index} className="bg-zinc-800/50 border border-zinc-600 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1">
                                <h4 className="text-lg font-semibold text-zinc-100 mb-3">{contract.type}</h4>
                                <p className="text-zinc-400 text-sm">{contract.examples}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});
