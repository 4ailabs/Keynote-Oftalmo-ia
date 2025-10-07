import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { Shield, Home, EyeOff, CheckCircle, Lock, Key } from 'lucide-react';
import { SECURITY_FEATURES, ANONYMIZATION_PATTERNS } from '../mac-constants';

interface SecurityFeatureProps {
    feature: {
        title: string;
        description: string;
        icon: string;
    };
}

const SecurityFeatureCard: React.FC<SecurityFeatureProps> = ({ feature }) => {
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
            case 'Home': return <Home size={32} />;
            case 'EyeOff': return <EyeOff size={32} />;
            case 'CheckCircle': return <CheckCircle size={32} />;
            case 'Shield': return <Shield size={32} />;
            default: return <Shield size={32} />;
        }
    };

    return (
        <div 
            ref={ref}
            className={`group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 lg:p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-green-500/30 hover:bg-zinc-950/20 overflow-hidden transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-600 to-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
                <div className="group/icon w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30">
                    <div className="group-hover/icon:scale-110 transition-transform duration-300">
                        {getIconComponent(feature.icon)}
                    </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-zinc-100 mb-4 group-hover:text-green-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-lg text-zinc-300 leading-relaxed">{feature.description}</p>
            </div>
        </div>
    );
};

export const MacSecuritySection = forwardRef<HTMLElement>((props, ref) => {
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
        <section ref={ref} id="security" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-5xl sm:text-6xl font-bold text-zinc-100 mb-6">Seguridad y Privacidad</h2>
                    <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed">
                        Tu Mac, tus datos. Análisis local con protección completa de información sensible
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
                    {SECURITY_FEATURES.map((feature, index) => (
                        <SecurityFeatureCard 
                            key={index}
                            feature={feature}
                        />
                    ))}
                </div>

                {/* Anonymization Patterns */}
                <div ref={sectionRef} className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-700 rounded-2xl p-8 lg:p-12 mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-zinc-100 mb-4">Patrones de Anonimización</h3>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Protección automática de datos sensibles antes de cualquier análisis externo
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ANONYMIZATION_PATTERNS.map((pattern, index) => (
                            <div key={index} className={`bg-zinc-800/50 border border-zinc-600 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 transform ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`} style={{ transitionDelay: `${index * 100}ms` }}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                        <Lock size={20} className="text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-zinc-100">{pattern.original}</h4>
                                        <code className="text-sm text-green-400 bg-zinc-900/50 px-2 py-1 rounded">{pattern.anonymized}</code>
                                    </div>
                                </div>
                                <div className="bg-zinc-900/50 rounded-lg p-3 text-sm">
                                    <div className="text-zinc-400 mb-1">Ejemplo:</div>
                                    <code className="text-zinc-300">{pattern.example}</code>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security Architecture */}
                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-2xl p-8 lg:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-zinc-100 mb-4">Arquitectura de Seguridad</h3>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Flujo de datos seguro con múltiples capas de protección
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Local Processing Flow */}
                        <div className="bg-zinc-800/50 border border-green-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                                    <Home size={24} className="text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-zinc-100">Procesamiento Local</h4>
                                    <p className="text-green-400 text-sm">Datos nunca salen de tu Mac</p>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                        <CheckCircle size={12} className="text-white" />
                                    </div>
                                    <span className="text-zinc-300">Análisis completo en tu Mac</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                        <CheckCircle size={12} className="text-white" />
                                    </div>
                                    <span className="text-zinc-300">Sin conexión a internet requerida</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                        <CheckCircle size={12} className="text-white" />
                                    </div>
                                    <span className="text-zinc-300">Control total sobre tus datos</span>
                                </div>
                            </div>
                        </div>

                        {/* Hybrid Security Flow */}
                        <div className="bg-zinc-800/50 border border-blue-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                                    <Shield size={24} className="text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-zinc-100">Enfoque Híbrido Seguro</h4>
                                    <p className="text-blue-400 text-sm">Solo con consentimiento explícito</p>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                        <EyeOff size={12} className="text-white" />
                                    </div>
                                    <span className="text-zinc-300">Anonimización automática</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                        <Key size={12} className="text-white" />
                                    </div>
                                    <span className="text-zinc-300">Consentimiento explícito requerido</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                        <Lock size={12} className="text-white" />
                                    </div>
                                    <span className="text-zinc-300">Cifrado de extremo a extremo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Guarantees */}
                    <div className="mt-8 bg-zinc-900/50 rounded-xl p-6">
                        <div className="text-center mb-6">
                            <h4 className="text-xl font-bold text-zinc-100 mb-2">Garantías de Seguridad</h4>
                            <p className="text-zinc-400">Compromiso con la privacidad de tus datos</p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <Home size={20} className="text-green-400" />
                                </div>
                                <h5 className="font-semibold text-zinc-100 mb-2">100% Local</h5>
                                <p className="text-sm text-zinc-400">Por defecto, todo se procesa en tu Mac</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <EyeOff size={20} className="text-blue-400" />
                                </div>
                                <h5 className="font-semibold text-zinc-100 mb-2">Cero Logs</h5>
                                <p className="text-sm text-zinc-400">No se almacenan datos de tus contratos</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <Shield size={20} className="text-purple-400" />
                                </div>
                                <h5 className="font-semibold text-zinc-100 mb-2">Código Abierto</h5>
                                <p className="text-sm text-zinc-400">Transparencia total en el procesamiento</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
