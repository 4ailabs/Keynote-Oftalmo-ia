
import React, { forwardRef } from 'react';

const StatCard: React.FC<{ number: string; label: string }> = ({ number, label }) => (
    <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">{number}</div>
        <div className="text-md text-zinc-400">{label}</div>
    </div>
);

export const IntroSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="intro" className="py-24 sm:py-32 bg-gradient-to-b from-black via-blue-950/10 to-black">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-6">
                    El futuro del razonamiento clínico
                </h2>
                <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-16">
                    Combina décadas de experiencia oftalmológica con las capacidades de análisis más avanzadas. Un sistema que no solo busca información, sino que razona, analiza y concluye como lo haría un especialista experimentado.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatCard number="8 pasos" label="Proceso estructurado" />
                    <StatCard number="95%" label="Precisión diagnóstica" />
                    <StatCard number="100+" label="Fuentes validadas" />
                    <StatCard number="5 min" label="Análisis completo" />
                </div>
            </div>
        </section>
    );
});
