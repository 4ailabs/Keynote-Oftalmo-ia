import React, { forwardRef, useEffect, useState } from 'react';
import { ArrowDown, Monitor, Cpu, MemoryStick, Terminal } from 'lucide-react';

interface MacHeroSectionProps {
    scrollToSection: (id: string) => void;
}

export const MacHeroSection = forwardRef<HTMLElement, MacHeroSectionProps>(({ scrollToSection }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section ref={ref} id="hero" className="min-h-screen h-screen sm:h-screen flex flex-col justify-center items-center text-center p-3 sm:p-4 relative overflow-hidden bg-black bg-[radial-gradient(ellipse_at_center,_rgba(38,38,38,1)_0%,_rgba(0,0,0,1)_70%)]">
            {/* Animated background grid */}
            <div className={`absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.1" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')] opacity-30 animate-pulse`}></div>
            
            {/* Floating particles animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500/20 rounded-full animate-ping animation-delay-1000"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400/30 rounded-full animate-ping animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-600/10 rounded-full animate-ping animation-delay-3000"></div>
                <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-yellow-500/20 rounded-full animate-ping animation-delay-4000"></div>
            </div>

            <div className={`relative z-10 max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {/* Mac-specific badges */}
                <div className={`flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}>
                    <div className="flex items-center gap-2 bg-orange-900/30 border border-orange-500/30 rounded-full px-3 py-1 text-xs sm:text-sm">
                        <Monitor size={12} className="text-orange-400" />
                        <span className="text-orange-300">macOS Optimizado</span>
                    </div>
                    <div className="flex items-center gap-2 bg-yellow-900/30 border border-yellow-500/30 rounded-full px-3 py-1 text-xs sm:text-sm">
                        <MemoryStick size={12} className="text-yellow-400" />
                        <span className="text-yellow-300">18GB RAM</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 rounded-full px-3 py-1 text-xs sm:text-sm">
                        <Cpu size={12} className="text-blue-400" />
                        <span className="text-blue-300">Apple Silicon</span>
                    </div>
                </div>

                {/* Animated title with typewriter effect */}
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent animate-gradient-x px-2 sm:px-0">
                    <span className="inline-block animate-fade-in-up animation-delay-500">Ollama</span>
                    <br />
                    <span className="inline-block animate-fade-in-up animation-delay-1000">+ FinBERT</span>
                </h1>
                
                {/* Animated subtitle */}
                <p className={`max-w-4xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 mb-8 sm:mb-10 md:mb-14 px-3 sm:px-4 leading-relaxed transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                    Análisis de contratos financieros usando Ollama (modelos locales) y FinBERT (especializado en finanzas). 
                    Todo ejecutándose en tu Mac, sin necesidad de internet.
                </p>
                
                {/* Animated buttons */}
                <div className={`flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-3 sm:px-4 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                    <button
                        onClick={() => scrollToSection('approaches')}
                        className="group w-full max-w-xs sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 bg-orange-600 text-white rounded-full font-medium text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-orange-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-600/30 hover:scale-105 active:scale-95 min-h-[44px] flex items-center justify-center relative">
                        <span className="relative z-10">Ver enfoques</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button
                        onClick={() => scrollToSection('installation')}
                        className="group w-full max-w-xs sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 bg-transparent border border-zinc-600 text-zinc-100 rounded-full font-medium text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-500 hover:-translate-y-1 hover:scale-105 active:scale-95 min-h-[44px] flex items-center justify-center relative overflow-hidden">
                        <span className="relative z-10">Instalación</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 to-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>

                {/* Key capabilities preview */}
                <div className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto transform transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                    <div className="flex items-center gap-4 bg-zinc-900/60 border border-zinc-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-orange-600/30 rounded-xl flex items-center justify-center">
                            <MemoryStick size={24} className="text-orange-400" />
                        </div>
                        <div className="text-left">
                            <p className="text-base font-semibold text-zinc-100">Ollama Local</p>
                            <p className="text-sm text-zinc-400">Modelos en tu Mac</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-zinc-900/60 border border-zinc-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-yellow-600/30 rounded-xl flex items-center justify-center">
                            <MemoryStick size={24} className="text-yellow-400" />
                        </div>
                        <div className="text-left">
                            <p className="text-base font-semibold text-zinc-100">FinBERT</p>
                            <p className="text-sm text-zinc-400">Especializado en finanzas</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-zinc-900/60 border border-zinc-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-blue-600/30 rounded-xl flex items-center justify-center">
                            <Terminal size={24} className="text-blue-400" />
                        </div>
                        <div className="text-left">
                            <p className="text-base font-semibold text-zinc-100">Sin Internet</p>
                            <p className="text-sm text-zinc-400">Análisis completamente local</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Enhanced scroll indicator */}
            <div className={`absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center gap-2 transform transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <span className="text-xs sm:text-sm animate-pulse">Desliza para explorar</span>
                <div className="animate-bounce">
                    <ArrowDown size={16} className="sm:w-5 sm:h-5 animate-pulse" />
                </div>
            </div>

            {/* 4ailabs branding */}
            <div className={`absolute top-4 right-4 sm:top-6 sm:right-6 transform transition-all duration-1000 delay-2000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}>
                <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2 text-xs">
                        <span className="text-zinc-400">Desarrollado por</span>
                        <a href="https://4ailabs.vercel.app" target="_blank" rel="noopener noreferrer" className="text-orange-400 font-semibold hover:text-orange-300 transition-colors duration-200 flex items-center gap-1">
                            <Monitor size={12} className="text-orange-400" />
                            <span className="font-bold">4ailabs</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});
