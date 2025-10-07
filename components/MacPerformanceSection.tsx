import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { BarChart3, Clock, Cpu, MemoryStick, Target, Zap } from 'lucide-react';
import { PERFORMANCE_METRICS, SYSTEM_REQUIREMENTS } from '../mac-constants';

interface PerformanceCardProps {
    metric: {
        approach: string;
        contractsPerHour: string;
        ramUsed: string;
        precision: string;
        timePerContract: string;
        color: string;
    };
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({ metric }) => {
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

    const getGradientColors = (color: string) => {
        switch (color) {
            case 'blue':
                return 'from-blue-600 to-blue-500';
            case 'green':
                return 'from-green-600 to-green-500';
            case 'orange':
                return 'from-orange-600 to-orange-500';
            default:
                return 'from-zinc-600 to-zinc-500';
        }
    };

    const getBorderColor = (color: string) => {
        switch (color) {
            case 'blue':
                return 'border-blue-500/20 hover:border-blue-500/40';
            case 'green':
                return 'border-green-500/20 hover:border-green-500/40';
            case 'orange':
                return 'border-orange-500/20 hover:border-orange-500/40';
            default:
                return 'border-zinc-500/20 hover:border-zinc-500/40';
        }
    };

    return (
        <div 
            ref={ref}
            className={`bg-zinc-900/50 border ${getBorderColor(metric.color)} rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            <div className={`h-2 w-full bg-gradient-to-r ${getGradientColors(metric.color)} rounded-t-2xl -m-6 mb-6 transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-zinc-100 mb-2">{metric.approach}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-800/50 rounded-lg p-4 text-center hover:bg-zinc-800/70 transition-all duration-300">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <BarChart3 size={16} className="text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-blue-400">{metric.contractsPerHour}</div>
                    <div className="text-xs text-zinc-400">Contratos/hora</div>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-4 text-center hover:bg-zinc-800/70 transition-all duration-300">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <MemoryStick size={16} className="text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-green-400">{metric.ramUsed}</div>
                    <div className="text-xs text-zinc-400">RAM usada</div>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-4 text-center hover:bg-zinc-800/70 transition-all duration-300">
                    <div className="w-8 h-8 bg-yellow-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Target size={16} className="text-yellow-400" />
                    </div>
                    <div className="text-2xl font-bold text-yellow-400">{metric.precision}</div>
                    <div className="text-xs text-zinc-400">Precisión</div>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-4 text-center hover:bg-zinc-800/70 transition-all duration-300">
                    <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Clock size={16} className="text-orange-400" />
                    </div>
                    <div className="text-2xl font-bold text-orange-400">{metric.timePerContract}</div>
                    <div className="text-xs text-zinc-400">Tiempo/contrato</div>
                </div>
            </div>
        </div>
    );
};

export const MacPerformanceSection = forwardRef<HTMLElement>((props, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} id="performance" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-5xl sm:text-6xl font-bold text-zinc-100 mb-6">Rendimiento en Mac 18GB RAM</h2>
                    <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed">
                        Métricas de rendimiento específicas para tu configuración de Mac con 18GB de RAM
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {PERFORMANCE_METRICS.map((metric, index) => (
                        <PerformanceCard 
                            key={index}
                            metric={metric}
                        />
                    ))}
                </div>

                {/* System Requirements */}
                <div ref={sectionRef} className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-700 rounded-2xl p-8 lg:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-zinc-100 mb-4">Requisitos del Sistema</h3>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Configuraciones recomendadas para obtener el mejor rendimiento en tu Mac
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Minimum Requirements */}
                        <div className={`transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="bg-zinc-800/50 border border-zinc-600 rounded-xl p-6 text-center h-full">
                                <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Cpu size={24} className="text-red-400" />
                                </div>
                                <h4 className="text-xl font-bold text-zinc-100 mb-4">Mínimo</h4>
                                <div className="space-y-3 text-left">
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">RAM:</span>
                                        <span className="text-zinc-200">{SYSTEM_REQUIREMENTS.minimum.ram}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Almacenamiento:</span>
                                        <span className="text-zinc-200">{SYSTEM_REQUIREMENTS.minimum.storage}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Procesador:</span>
                                        <span className="text-zinc-200">{SYSTEM_REQUIREMENTS.minimum.processor}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">macOS:</span>
                                        <span className="text-zinc-200">{SYSTEM_REQUIREMENTS.minimum.os}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recommended Requirements */}
                        <div className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/30 rounded-xl p-6 text-center h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-xl font-semibold">
                                    RECOMENDADO
                                </div>
                                <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Zap size={24} className="text-orange-400" />
                                </div>
                                <h4 className="text-xl font-bold text-zinc-100 mb-4">Recomendado</h4>
                                <div className="space-y-3 text-left">
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">RAM:</span>
                                        <span className="text-orange-300 font-semibold">{SYSTEM_REQUIREMENTS.recommended.ram}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Almacenamiento:</span>
                                        <span className="text-zinc-200">{SYSTEM_REQUIREMENTS.recommended.storage}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Procesador:</span>
                                        <span className="text-zinc-200">{SYSTEM_REQUIREMENTS.recommended.processor}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">macOS:</span>
                                        <span className="text-zinc-200">{SYSTEM_REQUIREMENTS.recommended.os}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Optimal Requirements */}
                        <div className={`transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="bg-zinc-800/50 border border-zinc-600 rounded-xl p-6 text-center h-full">
                                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Target size={24} className="text-green-400" />
                                </div>
                                <h4 className="text-xl font-bold text-zinc-100 mb-4">Óptimo</h4>
                                <div className="space-y-3 text-left">
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">RAM:</span>
                                        <span className="text-green-300 font-semibold">{SYSTEM_REQUIREMENTS.optimal.ram}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Almacenamiento:</span>
                                        <span className="text-zinc-200">{SYSTEM_REQUIREMENTS.optimal.storage}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Procesador:</span>
                                        <span className="text-zinc-200">{SYSTEM_REQUIREMENTS.optimal.processor}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">macOS:</span>
                                        <span className="text-zinc-200">{SYSTEM_REQUIREMENTS.optimal.os}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance Tips */}
                <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-8 lg:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-zinc-100 mb-4">Optimizaciones para Mac</h3>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Configuraciones específicas para maximizar el rendimiento en tu Mac con 18GB RAM
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MemoryStick size={24} className="text-blue-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">PyTorch CPU</h4>
                            <p className="text-sm text-zinc-400">Float16 para reducir memoria</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Cpu size={24} className="text-green-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">MPS Support</h4>
                            <p className="text-sm text-zinc-400">Metal Performance Shaders</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Zap size={24} className="text-yellow-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Gestión Inteligente</h4>
                            <p className="text-sm text-zinc-400">Monitoreo en tiempo real</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Target size={24} className="text-purple-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Modelos Optimizados</h4>
                            <p className="text-sm text-zinc-400">FinBERT + Llama 8B</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
