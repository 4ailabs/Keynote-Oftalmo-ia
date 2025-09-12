
import React, { forwardRef } from 'react';

export const StatsSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="stats" className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-gradient-to-br from-zinc-900 via-green-950/20 to-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-16">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Resultados Medibles</h2>
                        <p className="text-xl text-zinc-400">Impacto cuantificable en la eficiencia y precisión del diagnóstico clínico.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        <div>
                            <p className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">40%</p>
                            <h3 className="text-lg font-semibold text-zinc-200 mb-1">Reducción de Tiempo</h3>
                            <p className="text-zinc-400">En análisis de casos complejos.</p>
                        </div>
                        <div>
                            <p className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">25%</p>
                            <h3 className="text-lg font-semibold text-zinc-200 mb-1">Mejora en Precisión</h3>
                            <p className="text-zinc-400">Diagnóstica diferencial.</p>
                        </div>
<div>
                            <p className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">98%</p>
                            <h3 className="text-lg font-semibold text-zinc-200 mb-1">Cobertura de Evidencia</h3>
                            <p className="text-zinc-400">De fuentes de alta autoridad.</p>
                        </div>
                        <div>
                            <p className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">30%</p>
                            <h3 className="text-lg font-semibold text-zinc-200 mb-1">Optimización de Pruebas</h3>
                            <p className="text-zinc-400">Reducción de estudios innecesarios.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
