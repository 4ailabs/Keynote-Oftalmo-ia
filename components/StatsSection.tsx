
import React, { forwardRef } from 'react';

export const StatsSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="stats" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-gradient-to-br from-zinc-900 via-green-950/20 to-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-16">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Métricas del Sistema</h2>
                        <p className="text-xl text-zinc-400">Capacidades técnicas y rendimiento del agente de investigación clínica.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
                        <div>
                            <p className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">8</p>
                            <h3 className="text-base sm:text-lg font-semibold text-zinc-200 mb-1">Pasos de Análisis</h3>
                            <p className="text-sm text-zinc-400">Proceso estructurado y sistemático.</p>
                        </div>
                        <div>
                            <p className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">5</p>
                            <h3 className="text-base sm:text-lg font-semibold text-zinc-200 mb-1">Fuentes Médicas</h3>
                            <p className="text-sm text-zinc-400">Bases de datos especializadas.</p>
                        </div>
                        <div>
                            <p className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">100+</p>
                            <h3 className="text-base sm:text-lg font-semibold text-zinc-200 mb-1">Referencias</h3>
                            <p className="text-sm text-zinc-400">Por análisis clínico completo.</p>
                        </div>
                        <div>
                            <p className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">3</p>
                            <h3 className="text-base sm:text-lg font-semibold text-zinc-200 mb-1">Fases</h3>
                            <p className="text-sm text-zinc-400">Planificación, ejecución, síntesis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
