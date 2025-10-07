import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { Terminal, CheckCircle, Download, Settings, Play } from 'lucide-react';
import { INSTALLATION_STEPS } from '../mac-constants';

interface InstallationStepProps {
    step: {
        step: number;
        title: string;
        description: string;
        command?: string;
        details: string[];
    };
}

const InstallationStepCard: React.FC<InstallationStepProps> = ({ step }) => {
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

    const getStepColor = (stepNumber: number) => {
        switch (stepNumber) {
            case 1: return 'blue';
            case 2: return 'green';
            case 3: return 'yellow';
            case 4: return 'purple';
            default: return 'zinc';
        }
    };

    const color = getStepColor(step.step);

    const getGradientColors = (color: string) => {
        switch (color) {
            case 'blue':
                return 'from-blue-600 to-blue-500';
            case 'green':
                return 'from-green-600 to-green-500';
            case 'yellow':
                return 'from-yellow-600 to-yellow-500';
            case 'purple':
                return 'from-purple-600 to-purple-500';
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
            case 'yellow':
                return 'border-yellow-500/20 hover:border-yellow-500/40';
            case 'purple':
                return 'border-purple-500/20 hover:border-purple-500/40';
            default:
                return 'border-zinc-500/20 hover:border-zinc-500/40';
        }
    };

    return (
        <div 
            ref={ref}
            className={`bg-zinc-900/50 border ${getBorderColor(color)} rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            <div className={`h-2 w-full bg-gradient-to-r ${getGradientColors(color)} rounded-t-2xl -m-6 mb-6 transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            
            <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${getGradientColors(color)} rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                    {step.step}
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-zinc-100 mb-2">{step.title}</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed">{step.description}</p>
                </div>
            </div>

            {step.command && (
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 mb-6 hover:bg-zinc-800/70 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                        <Terminal size={16} className="text-green-400" />
                        <span className="text-sm font-medium text-zinc-300">Comando:</span>
                    </div>
                    <code className="text-green-400 font-mono text-sm break-all">{step.command}</code>
                </div>
            )}

            <div className="space-y-3">
                <h4 className="text-lg font-semibold text-zinc-100 mb-3">Detalles:</h4>
                {step.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                        <div className={`w-6 h-6 bg-gradient-to-br ${getGradientColors(color)} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200`}>
                            <CheckCircle size={12} className="text-white" />
                        </div>
                        <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors duration-200">{detail}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const MacInstallationSection = forwardRef<HTMLElement>((props, ref) => {
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
        <section ref={ref} id="installation" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-5xl sm:text-6xl font-bold text-zinc-100 mb-6">Instalación Rápida</h2>
                    <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed">
                        Setup completo optimizado para Mac con 18GB RAM en 4 pasos simples
                    </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {INSTALLATION_STEPS.map((step, index) => (
                        <InstallationStepCard 
                            key={index}
                            step={step}
                        />
                    ))}
                </div>

                {/* Quick Start Section */}
                <div ref={sectionRef} className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-700 rounded-2xl p-8 lg:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-zinc-100 mb-4">Inicio Rápido</h3>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Comandos esenciales para empezar inmediatamente después de la instalación
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className={`bg-zinc-800/50 border border-zinc-600 rounded-xl p-6 text-center hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`} style={{ transitionDelay: '200ms' }}>
                            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Download size={24} className="text-blue-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Verificar Sistema</h4>
                            <p className="text-sm text-zinc-400 mb-4">Comprueba que todo esté configurado correctamente</p>
                            <code className="bg-zinc-900/50 text-green-400 text-xs px-3 py-1 rounded">python main.py --memory-check</code>
                        </div>
                        
                        <div className={`bg-zinc-800/50 border border-zinc-600 rounded-xl p-6 text-center hover:border-green-500/40 transition-all duration-300 hover:-translate-y-1 transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`} style={{ transitionDelay: '400ms' }}>
                            <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Play size={24} className="text-green-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Ejecutar Demo</h4>
                            <p className="text-sm text-zinc-400 mb-4">Ve todas las funcionalidades en acción</p>
                            <code className="bg-zinc-900/50 text-green-400 text-xs px-3 py-1 rounded">python demo_usage.py</code>
                        </div>
                        
                        <div className={`bg-zinc-800/50 border border-zinc-600 rounded-xl p-6 text-center hover:border-yellow-500/40 transition-all duration-300 hover:-translate-y-1 transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`} style={{ transitionDelay: '600ms' }}>
                            <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Settings size={24} className="text-yellow-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-zinc-100 mb-2">Configurar</h4>
                            <p className="text-sm text-zinc-400 mb-4">Personaliza según tus necesidades</p>
                            <code className="bg-zinc-900/50 text-green-400 text-xs px-3 py-1 rounded">nano config_mac_18gb.py</code>
                        </div>
                    </div>

                    {/* Installation Benefits */}
                    <div className="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 border border-orange-500/20 rounded-xl p-8">
                        <div className="text-center mb-6">
                            <h4 className="text-2xl font-bold text-zinc-100 mb-2">¿Por qué Instalación Automática?</h4>
                            <p className="text-zinc-400">Ventajas del setup optimizado para Mac 18GB RAM</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <Terminal size={20} className="text-orange-400" />
                                </div>
                                <h5 className="font-semibold text-zinc-100 mb-2">Un Solo Comando</h5>
                                <p className="text-sm text-zinc-400">Instalación completa automatizada</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <CheckCircle size={20} className="text-green-400" />
                                </div>
                                <h5 className="font-semibold text-zinc-100 mb-2">Verificación Incluida</h5>
                                <p className="text-sm text-zinc-400">Chequeo automático del sistema</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <Download size={20} className="text-blue-400" />
                                </div>
                                <h5 className="font-semibold text-zinc-100 mb-2">Modelos Optimizados</h5>
                                <p className="text-sm text-zinc-400">Descarga automática de modelos</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <Settings size={20} className="text-purple-400" />
                                </div>
                                <h5 className="font-semibold text-zinc-100 mb-2">Configuración Pre-optimizada</h5>
                                <p className="text-sm text-zinc-400">Ajustes específicos para Mac 18GB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
