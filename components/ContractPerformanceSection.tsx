import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { Clock, Target, Network, AlertTriangle } from 'lucide-react';
import { PERFORMANCE_METRICS } from '../contract-constants';

interface PerformanceMetricCardProps {
    metric: {
        metric: string;
        value: string;
        description: string;
        icon: string;
    };
}

const getIconComponent = (iconName: string) => {
    switch (iconName) {
        case 'Clock': return <Clock size={32} />;
        case 'Target': return <Target size={32} />;
        case 'Network': return <Network size={32} />;
        case 'AlertTriangle': return <AlertTriangle size={32} />;
        default: return null;
    }
};

const getGradientColors = (iconName: string) => {
    switch (iconName) {
        case 'Clock': return 'from-blue-600 to-blue-500';
        case 'Target': return 'from-green-600 to-green-500';
        case 'Network': return 'from-purple-600 to-purple-500';
        case 'AlertTriangle': return 'from-orange-600 to-orange-500';
        default: return 'from-zinc-600 to-zinc-500';
    }
};

const PerformanceMetricCard: React.FC<PerformanceMetricCardProps> = ({ metric }) => {
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
            <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${getGradientColors(metric.icon)} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>

            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                metric.icon === 'Clock' ? 'bg-gradient-to-r from-blue-500/5 to-blue-400/5' :
                metric.icon === 'Target' ? 'bg-gradient-to-r from-green-500/5 to-green-400/5' :
                metric.icon === 'Network' ? 'bg-gradient-to-r from-purple-500/5 to-purple-400/5' :
                metric.icon === 'AlertTriangle' ? 'bg-gradient-to-r from-orange-500/5 to-orange-400/5' :
                'bg-gradient-to-r from-zinc-500/5 to-zinc-400/5'
            }`}></div>

            <div className="relative z-10 flex flex-col h-full">
                <div className={`group/icon w-24 h-24 mx-auto mb-8 bg-gradient-to-br ${getGradientColors(metric.icon)} rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl ${
                    metric.icon === 'Clock' ? 'hover:shadow-blue-500/30' :
                    metric.icon === 'Target' ? 'hover:shadow-green-500/30' :
                    metric.icon === 'Network' ? 'hover:shadow-purple-500/30' :
                    metric.icon === 'AlertTriangle' ? 'hover:shadow-orange-500/30' :
                    'hover:shadow-zinc-500/30'
                }`}>
                    <div className="group-hover/icon:scale-110 transition-transform duration-300">
                        {getIconComponent(metric.icon)}
                    </div>
                </div>

                <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-green-400 mb-2">{metric.value}</div>
                    <h3 className="text-2xl font-semibold text-zinc-100 mb-4">{metric.metric}</h3>
                </div>

                <p className="text-lg text-zinc-300 text-center flex-grow leading-relaxed">{metric.description}</p>
            </div>
        </div>
    );
};

export const ContractPerformanceSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="performance" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-5xl sm:text-6xl font-bold text-zinc-100 mb-6">Métricas de Rendimiento</h2>
                    <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed">
                        Resultados comprobados en análisis de contratos financieros con precisión y velocidad excepcionales
                    </p>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {PERFORMANCE_METRICS.map((metric, index) => (
                        <PerformanceMetricCard key={index} metric={metric} />
                    ))}
                </div>

                {/* Performance Summary */}
                <div className="mt-20 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-700/30 rounded-2xl p-8 lg:p-12">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-zinc-100 mb-6">Rendimiento Verificado en Producción</h3>
                        <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                            Nuestro agente ha sido probado en entornos reales con más de 10,000 contratos analizados, 
                            demostrando consistencia y confiabilidad en cada análisis.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-green-400 mb-2">10,000+</div>
                                <div className="text-lg text-zinc-300">Contratos Analizados</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-400 mb-2">99.8%</div>
                                <div className="text-lg text-zinc-300">Tiempo de Disponibilidad</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                                <div className="text-lg text-zinc-300">Análisis Continuo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
