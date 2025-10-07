import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { Target, Zap, Eye } from 'lucide-react';
import { COMPETITIVE_ADVANTAGES } from '../contract-constants';

interface AdvantageCardProps {
    advantage: {
        title: string;
        description: string;
        icon: string;
    };
}

const getIconComponent = (iconName: string) => {
    switch (iconName) {
        case 'Target': return <Target size={40} />;
        case 'Zap': return <Zap size={40} />;
        case 'Eye': return <Eye size={40} />;
        default: return null;
    }
};

const getGradientColors = (iconName: string) => {
    switch (iconName) {
        case 'Target': return 'from-green-600 to-green-500';
        case 'Zap': return 'from-yellow-600 to-yellow-500';
        case 'Eye': return 'from-blue-600 to-blue-500';
        default: return 'from-zinc-600 to-zinc-500';
    }
};

const AdvantageCard: React.FC<AdvantageCardProps> = ({ advantage }) => {
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
            className={`group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-green-500/30 hover:bg-green-950/20 overflow-hidden transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${getGradientColors(advantage.icon)} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>

            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                advantage.icon === 'Target' ? 'bg-gradient-to-r from-green-500/5 to-green-400/5' :
                advantage.icon === 'Zap' ? 'bg-gradient-to-r from-yellow-500/5 to-yellow-400/5' :
                advantage.icon === 'Eye' ? 'bg-gradient-to-r from-blue-500/5 to-blue-400/5' :
                'bg-gradient-to-r from-zinc-500/5 to-zinc-400/5'
            }`}></div>

            <div className="relative z-10 text-center">
                <div className={`group/icon w-24 h-24 mx-auto mb-8 bg-gradient-to-br ${getGradientColors(advantage.icon)} rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl ${
                    advantage.icon === 'Target' ? 'hover:shadow-green-500/30' :
                    advantage.icon === 'Zap' ? 'hover:shadow-yellow-500/30' :
                    advantage.icon === 'Eye' ? 'hover:shadow-blue-500/30' :
                    'hover:shadow-zinc-500/30'
                }`}>
                    <div className="group-hover/icon:scale-110 transition-transform duration-300">
                        {getIconComponent(advantage.icon)}
                    </div>
                </div>

                <h3 className="text-3xl font-bold text-zinc-100 mb-6">{advantage.title}</h3>
                <p className="text-xl text-zinc-300 leading-relaxed">{advantage.description}</p>
            </div>
        </div>
    );
};

export const ContractCompetitiveAdvantagesSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="competitive-advantages" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-5xl sm:text-6xl font-bold text-zinc-100 mb-6">Ventajas Competitivas</h2>
                    <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed">
                        Lo que nos diferencia en el mercado de análisis de contratos financieros
                    </p>
                </div>

                <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
                    {COMPETITIVE_ADVANTAGES.map((advantage, index) => (
                        <AdvantageCard key={index} advantage={advantage} />
                    ))}
                </div>

                {/* Market Position */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-700/30 rounded-2xl p-8 lg:p-12">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-zinc-100 mb-6">Posición Líder en el Mercado</h3>
                        <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                            Combinamos lo mejor de la inteligencia artificial avanzada con experiencia especializada 
                            en contratos financieros para ofrecer la solución más completa del mercado.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <h4 className="text-2xl font-bold text-green-400 mb-4">¿Por qué elegir nuestro agente?</h4>
                                <ul className="space-y-4 text-lg text-zinc-300">
                                    <li className="flex items-start gap-3">
                                        <Target size={24} className="text-green-400 mt-1 flex-shrink-0" />
                                        <span>Precisión superior con validación cruzada entre múltiples modelos de IA</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap size={24} className="text-yellow-400 mt-1 flex-shrink-0" />
                                        <span>Velocidad excepcional con procesamiento paralelo optimizado</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Eye size={24} className="text-blue-400 mt-1 flex-shrink-0" />
                                        <span>Análisis integral que combina contexto semántico, sentimiento y estructura</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center bg-zinc-800/50 rounded-xl p-6">
                                    <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                                    <div className="text-sm text-zinc-300">Precisión vs 78% promedio del mercado</div>
                                </div>
                                <div className="text-center bg-zinc-800/50 rounded-xl p-6">
                                    <div className="text-3xl font-bold text-blue-400 mb-2">2.3s</div>
                                    <div className="text-sm text-zinc-300">Tiempo vs 15min promedio del mercado</div>
                                </div>
                                <div className="text-center bg-zinc-800/50 rounded-xl p-6">
                                    <div className="text-3xl font-bold text-purple-400 mb-2">47</div>
                                    <div className="text-sm text-zinc-300">Entidades vs 12 promedio del mercado</div>
                                </div>
                                <div className="text-center bg-zinc-800/50 rounded-xl p-6">
                                    <div className="text-3xl font-bold text-orange-400 mb-2">6</div>
                                    <div className="text-sm text-zinc-300">Riesgos vs 2 promedio del mercado</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
