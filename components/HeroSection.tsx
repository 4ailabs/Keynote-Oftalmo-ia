import React, { forwardRef, useEffect, useState } from 'react';
import { ArrowDown, Bot } from 'lucide-react';

interface HeroSectionProps {
    scrollToSection: (id: string) => void;
}

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ scrollToSection }, ref) => {
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
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/20 rounded-full animate-ping animation-delay-1000"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/30 rounded-full animate-ping animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-600/10 rounded-full animate-ping animation-delay-3000"></div>
                <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-500/20 rounded-full animate-ping animation-delay-4000"></div>
            </div>

            <div className={`relative z-10 max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {/* Animated title with typewriter effect */}
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x px-2 sm:px-0">
                    <span className="inline-block animate-fade-in-up animation-delay-500">Investigación</span>
                    <br />
                    <span className="inline-block animate-fade-in-up animation-delay-1000">Oftalmológica</span>
                </h1>
                
                {/* Animated subtitle */}
                <p className={`max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 mb-6 sm:mb-8 md:mb-12 px-3 sm:px-4 leading-relaxed transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                    Agente de investigación clínica que ejecuta análisis sistemáticos en minutos, validando evidencia médica especializada en oftalmología.
                </p>
                
                {/* Animated buttons */}
                <div className={`flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-3 sm:px-4 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                    <button
                        onClick={() => scrollToSection('intro')}
                        className="group w-full max-w-xs sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 bg-blue-600 text-white rounded-full font-medium text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/30 hover:scale-105 active:scale-95 min-h-[44px] flex items-center justify-center relative">
                        <span className="relative z-10">Explorar el sistema</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button
                        onClick={() => scrollToSection('workflow')}
                        className="group w-full max-w-xs sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 bg-transparent border border-zinc-600 text-zinc-100 rounded-full font-medium text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-500 hover:-translate-y-1 hover:scale-105 active:scale-95 min-h-[44px] flex items-center justify-center relative overflow-hidden">
                        <span className="relative z-10">Ver funcionamiento</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 to-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
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
                        <a href="https://4ailabs.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 flex items-center gap-1">
                            <Bot size={12} className="text-blue-400" />
                            <span className="font-bold">4ailabs</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});