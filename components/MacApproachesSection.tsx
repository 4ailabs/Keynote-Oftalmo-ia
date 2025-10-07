import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { Zap, Gauge, Shield } from 'lucide-react';
import { MAC_APPROACHES } from '../mac-constants';

interface ApproachCardProps {
    approach: {
        name: string;
        description: string;
        precision: string;
        ramUsage: string;
        speed: string;
        idealFor: string[];
        icon: string;
        color: string;
    };
}

const ApproachCard: React.FC<ApproachCardProps> = ({ approach }) => {
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
            case 'Zap': return <Zap size={32} />;
            case 'Gauge': return <Gauge size={32} />;
            case 'Shield': return <Shield size={32} />;
            default: return <Zap size={32} />;
        }
    };

    const getGradientColors = (color: string) => {
        switch (color) {
            case 'blue':
                return 'from-blue-600 to-blue-500';
            case 'green':
                return 'from-green-600 to-green-500';
            case 'purple':
                return 'from-purple-600 to-purple-500';
            default:
                return 'from-zinc-600 to-zinc-500';
        }
    };

    const getBorderColor = (color: string) => {
        switch (color) {
            case 'blue':
                return 'hover:border-blue-500/30';
            case 'green':
                return 'hover:border-green-500/30';
            case 'purple':
                return 'hover:border-purple-500/30';
            default:
                return 'hover:border-zinc-500/30';
        }
    };

    const getTextColor = (color: string) => {
        switch (color) {
            case 'blue':
                return 'group-hover:text-blue-400';
            case 'green':
                return 'group-hover:text-green-400';
            case 'purple':
                return 'group-hover:text-purple-400';
            default:
                return 'group-hover:text-zinc-400';
        }
    };

    return (
        <div 
            ref={ref}
            className={`group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 lg:p-8 text-center transition-all duration-500 hover:-translate-y-2 ${getBorderColor(approach.color)} hover:bg-zinc-950/20 overflow-hidden transform h-full flex flex-col ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${getGradientColors(approach.color)} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
            
            {/* Animated background glow */}
            <div className={`absolute inset-0 bg-gradient-to-r from-${approach.color}-500/5 to-${approach.color}-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
                <div className={`group/icon w-24 h-24 mx-auto mb-8 bg-gradient-to-br ${getGradientColors(approach.color)} rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl hover:shadow-${approach.color}-500/30`}>
                    <div className="group-hover/icon:scale-110 transition-transform duration-300">
                        {getIconComponent(approach.icon)}
                    </div>
                </div>
                
                <h3 className={`text-2xl font-semibold text-zinc-100 mb-4 ${getTextColor(approach.color)} transition-colors duration-300`}>{approach.name}</h3>
                <p className="text-lg text-zinc-300 mb-8 flex-grow leading-relaxed">{approach.description}</p>
                
                {/* Performance metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-green-400">{approach.precision}</div>
                        <div className="text-xs text-zinc-400">Precisión</div>
                    </div>
                    <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-blue-400">{approach.ramUsage}</div>
                        <div className="text-xs text-zinc-400">RAM</div>
                    </div>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-4 text-center mb-6">
                    <div className="text-sm font-medium text-zinc-300 mb-2">Velocidad de Procesamiento</div>
                    <div className="text-lg font-bold text-yellow-400">{approach.speed}</div>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-4 text-left hover:bg-zinc-800/70 transition-all duration-300 border border-transparent">
                    <h4 className="text-sm font-medium text-zinc-300 mb-3">Ideal para:</h4>
                    <ul className="space-y-2">
                        {approach.idealFor.map((use, index) => (
                            <li key={index} className="flex text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 group/item">
                                <span className={`text-${approach.color}-500 mr-2 group-hover/item:animate-pulse group-hover/item:scale-110 transition-all duration-200`}>✓</span>
                                <span>{use}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const MacApproachesSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="approaches" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-5xl sm:text-6xl font-bold text-zinc-100 mb-6">Tres Enfoques Adaptativos</h2>
                    <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed">
                        Selección automática del mejor enfoque según memoria disponible y tipo de análisis para tu Mac con 18GB RAM
                    </p>
                </div>
                
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {MAC_APPROACHES.map((approach, index) => (
                        <ApproachCard 
                            key={index}
                            approach={approach}
                        />
                    ))}
                </div>

                {/* Selection Logic */}
                <div className="mt-16 bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-700 rounded-2xl p-8 lg:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-zinc-100 mb-4">Lógica de Selección Automática</h3>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            El sistema selecciona automáticamente el mejor enfoque basado en recursos disponibles y tipo de análisis.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Zap size={24} className="text-blue-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Memoria Alta (8GB+)</h4>
                            <p className="text-sm text-zinc-400">Pipeline Optimizado para máxima precisión</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Gauge size={24} className="text-green-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Memoria Media (4-8GB)</h4>
                            <p className="text-sm text-zinc-400">Stack Ligero para balance óptimo</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Shield size={24} className="text-purple-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Memoria Baja (&lt;4GB)</h4>
                            <p className="text-sm text-zinc-400">Enfoque Híbrido para eficiencia máxima</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
