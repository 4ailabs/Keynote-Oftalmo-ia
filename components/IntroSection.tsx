
import React, { forwardRef } from 'react';

export const IntroSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="intro" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-black via-blue-950/10 to-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4 sm:mb-6 px-2">
                    Sistema de Razonamiento Clínico Avanzado
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 leading-relaxed mb-6 sm:mb-8 md:mb-12 px-3 sm:px-6">
                    Combina décadas de experiencia oftalmológica con inteligencia artificial avanzada. Un sistema que no solo busca información, sino que razona, analiza y concluye siguiendo el mismo proceso mental de un especialista experimentado.
                </p>

                {/* Value Propositions */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-4 sm:p-6">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-zinc-100 font-semibold mb-2">Diagnósticos Estructurados</h3>
                        <p className="text-sm text-zinc-400">Análisis diferencial sistemático basado en evidencia médica validada</p>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-4 sm:p-6">
                        <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-zinc-100 font-semibold mb-2">Velocidad Optimizada</h3>
                        <p className="text-sm text-zinc-400">Análisis completo de casos complejos en minutos, no horas</p>
                    </div>

                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h3 className="text-zinc-100 font-semibold mb-2">Evidencia Trazable</h3>
                        <p className="text-sm text-zinc-400">Cada recomendación respaldada por fuentes médicas verificables</p>
                    </div>
                </div>
            </div>
        </section>
    );
});
