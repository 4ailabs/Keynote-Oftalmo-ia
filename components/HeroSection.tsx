import React, { forwardRef } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
    scrollToSection: (id: string) => void;
}

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ scrollToSection }, ref) => {
    return (
        <section ref={ref} id="hero" className="min-h-screen h-screen flex flex-col justify-center items-center text-center p-4 relative overflow-hidden bg-black bg-[radial-gradient(ellipse_at_center,_rgba(38,38,38,1)_0%,_rgba(0,0,0,1)_70%)]">
            {/* FIX: Switched to a template literal for className to avoid TSX parsing issues with escaped quotes in the SVG data URL. */}
            <div className={`absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.1" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')] opacity-30`}></div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Investigación Oftalmológica
                </h1>
                <p className="max-w-3xl mx-auto text-xl md:text-2xl text-zinc-400 mb-12">
                    Inteligencia artificial que piensa como un oftalmólogo experimentado. Análisis clínico estructurado, evidencia validada, decisiones fundamentadas.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button 
                        onClick={() => scrollToSection('intro')}
                        className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/30">
                        Explorar el sistema
                    </button>
                    <button 
                        onClick={() => scrollToSection('workflow')}
                        className="w-full sm:w-auto px-8 py-3 bg-transparent border border-zinc-600 text-zinc-100 rounded-full font-medium text-lg transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-500 hover:-translate-y-1">
                        Ver funcionamiento
                    </button>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-sm">Desliza para explorar</span>
                <ArrowDown size={20} />
            </div>
        </section>
    );
});