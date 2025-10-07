import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { Shield, Search, Network, FileText, GitCompare, TrendingUp } from 'lucide-react';
import { CONTRACT_FEATURES } from '../contract-constants';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    details: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, details }) => {
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
            case 'Shield': return <Shield size={32} />;
            case 'Search': return <Search size={32} />;
            case 'Network': return <Network size={32} />;
            case 'FileText': return <FileText size={32} />;
            case 'GitCompare': return <GitCompare size={32} />;
            case 'TrendingUp': return <TrendingUp size={32} />;
            default: return <Shield size={32} />;
        }
    };

    return (
        <div 
            ref={ref}
            className={`group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 lg:p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-green-500/30 hover:bg-green-950/20 overflow-hidden transform h-full flex flex-col ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 to-emerald-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
                <div className="group/icon w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30">
                    <div className="group-hover/icon:scale-110 transition-transform duration-300">
                        {getIconComponent(icon)}
                    </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-zinc-100 mb-4 group-hover:text-green-400 transition-colors duration-300">{title}</h3>
                <p className="text-lg text-zinc-300 mb-8 flex-grow leading-relaxed">{description}</p>
                
                <div className="bg-zinc-800/50 rounded-lg p-4 text-left hover:bg-zinc-800/70 transition-all duration-300 group-hover:border-green-500/30 border border-transparent">
                    <ul className="space-y-2">
                        {details.map((detail, index) => (
                            <li key={index} className="flex text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 group/item">
                                <span className="text-green-500 mr-2 group-hover/item:animate-pulse group-hover/item:scale-110 transition-all duration-200">→</span>
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const ContractFeaturesSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="features" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-5xl sm:text-6xl font-bold text-zinc-100 mb-6">Características Avanzadas</h2>
                    <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed">Tecnología de análisis contractual de vanguardia diseñada para identificar riesgos y optimizar decisiones financieras</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {CONTRACT_FEATURES.map((feature, index) => (
                        <FeatureCard 
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            details={feature.details}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});
