import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { Building, Shield, Scale, Search } from 'lucide-react';
import { BUSINESS_USE_CASES } from '../contract-constants';

interface BusinessCaseCardProps {
    useCase: {
        industry: string;
        challenge: string;
        solution: string;
        result: string;
        metrics: string;
        icon: string;
    };
}

const getIconComponent = (iconName: string) => {
    switch (iconName) {
        case 'Building': return <Building size={32} />;
        case 'Shield': return <Shield size={32} />;
        case 'Scale': return <Scale size={32} />;
        case 'Search': return <Search size={32} />;
        default: return null;
    }
};

const getGradientColors = (iconName: string) => {
    switch (iconName) {
        case 'Building': return 'from-blue-600 to-blue-500';
        case 'Shield': return 'from-green-600 to-green-500';
        case 'Scale': return 'from-purple-600 to-purple-500';
        case 'Search': return 'from-orange-600 to-orange-500';
        default: return 'from-zinc-600 to-zinc-500';
    }
};

const BusinessCaseCard: React.FC<BusinessCaseCardProps> = ({ useCase }) => {
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

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-green-500/30 hover:bg-green-950/20 overflow-hidden transform h-full flex flex-col ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${getGradientColors(useCase.icon)} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>

            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                useCase.icon === 'Building' ? 'bg-gradient-to-r from-blue-500/5 to-blue-400/5' :
                useCase.icon === 'Shield' ? 'bg-gradient-to-r from-green-500/5 to-green-400/5' :
                useCase.icon === 'Scale' ? 'bg-gradient-to-r from-purple-500/5 to-purple-400/5' :
                useCase.icon === 'Search' ? 'bg-gradient-to-r from-orange-500/5 to-orange-400/5' :
                'bg-gradient-to-r from-zinc-500/5 to-zinc-400/5'
            }`}></div>

            <div className="relative z-10 flex flex-col h-full">
                <div className={`group/icon w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${getGradientColors(useCase.icon)} rounded-xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl ${
                    useCase.icon === 'Building' ? 'hover:shadow-blue-500/30' :
                    useCase.icon === 'Shield' ? 'hover:shadow-green-500/30' :
                    useCase.icon === 'Scale' ? 'hover:shadow-purple-500/30' :
                    useCase.icon === 'Search' ? 'hover:shadow-orange-500/30' :
                    'hover:shadow-zinc-500/30'
                }`}>
                    <div className="group-hover/icon:scale-110 transition-transform duration-300">
                        {getIconComponent(useCase.icon)}
                    </div>
                </div>

                <h3 className="text-2xl font-semibold text-zinc-100 mb-4 text-center">{useCase.industry}</h3>
                
                <div className="flex-grow space-y-4">
                    <div>
                        <h4 className="text-lg font-medium text-red-400 mb-2">Desafío:</h4>
                        <p className="text-zinc-300">{useCase.challenge}</p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-medium text-blue-400 mb-2">Solución:</h4>
                        <p className="text-zinc-300">{useCase.solution}</p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-medium text-green-400 mb-2">Resultado:</h4>
                        <p className="text-zinc-300">{useCase.result}</p>
                    </div>
                </div>

                <div className="mt-6 bg-zinc-800/50 rounded-lg p-4 text-center">
                    <div className="text-sm font-medium text-zinc-400 mb-1">Métricas Clave</div>
                    <div className="text-lg font-bold text-green-400">{useCase.metrics}</div>
                </div>
            </div>
        </div>
    );
};

export const ContractBusinessCasesSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="business-cases" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-5xl sm:text-6xl font-bold text-zinc-100 mb-6">Casos de Uso Empresariales</h2>
                    <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed">
                        Resultados reales en diferentes industrias, demostrando el valor tangible de nuestro agente de análisis
                    </p>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {BUSINESS_USE_CASES.map((useCase, index) => (
                        <BusinessCaseCard key={index} useCase={useCase} />
                    ))}
                </div>

                {/* ROI Summary */}
                <div className="mt-20 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-700/30 rounded-2xl p-8 lg:p-12">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-zinc-100 mb-6">Retorno de Inversión Comprobado</h3>
                        <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                            Los casos de uso demuestran mejoras significativas en eficiencia, precisión y ahorro de costos 
                            en procesos críticos de análisis de contratos.
                        </p>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                                <div className="text-lg text-zinc-300">Reducción en Tiempo</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                                <div className="text-lg text-zinc-300">Cumplimiento Regulatorio</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
                                <div className="text-lg text-zinc-300">Velocidad de Decisiones</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-orange-400 mb-2">$2M</div>
                                <div className="text-lg text-zinc-300">Ahorros Identificados</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
