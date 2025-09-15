
import React, { forwardRef } from 'react';

const StatCard: React.FC<{ number: string; label: string }> = ({ number, label }) => (
    <div className="text-center p-2 sm:p-0">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-1 sm:mb-2">{number}</div>
        <div className="text-xs sm:text-sm md:text-base text-zinc-400 leading-tight">{label}</div>
    </div>
);

export const IntroSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="intro" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-black via-blue-950/10 to-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4 sm:mb-6 px-2">
                    El futuro del razonamiento clínico
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 leading-relaxed mb-8 sm:mb-12 md:mb-16 px-3 sm:px-6">
                    Combina décadas de experiencia oftalmológica con las capacidades de análisis más avanzadas. Un sistema que no solo busca información, sino que razona, analiza y concluye como lo haría un especialista experimentado.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    <StatCard number="8 pasos" label="Proceso estructurado" />
                    <StatCard number="95%" label="Precisión diagnóstica" />
                    <StatCard number="100+" label="Fuentes validadas" />
                    <StatCard number="5 min" label="Análisis completo" />
                </div>
            </div>
        </section>
    );
});
