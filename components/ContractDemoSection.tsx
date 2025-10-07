import React, { forwardRef, useEffect, useState } from 'react';
import { Play, CheckCircle, AlertTriangle, FileText, Network, TrendingUp } from 'lucide-react';

export const ContractDemoSection = forwardRef<HTMLElement>((props, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const exampleRisks = [
        {
            severity: 'CRÍTICO' as const,
            category: 'FINANCIERO' as const,
            description: 'Tasa de interés del 36% anual excede límites regulatorios',
            clause: 'Artículo 5: Tasa de interés',
            recommendation: 'Negociar reducción a máximo 24% anual según normativa vigente'
        },
        {
            severity: 'ALTO' as const,
            category: 'LEGAL' as const,
            description: 'Cláusula de ejecución de garantía sin previo aviso',
            clause: 'Artículo 12: Ejecución de garantías',
            recommendation: 'Incluir período de gracia de 30 días antes de ejecución'
        },
        {
            severity: 'MEDIO' as const,
            category: 'OPERACIONAL' as const,
            description: 'Condiciones de incumplimiento ambiguas',
            clause: 'Artículo 8: Incumplimiento',
            recommendation: 'Definir criterios específicos y medibles de incumplimiento'
        }
    ];

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'CRÍTICO': return 'text-red-400 bg-red-900/20 border-red-500/30';
            case 'ALTO': return 'text-orange-400 bg-orange-900/20 border-orange-500/30';
            case 'MEDIO': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
            case 'BAJO': return 'text-green-400 bg-green-900/20 border-green-500/30';
            default: return 'text-zinc-400 bg-zinc-900/20 border-zinc-500/30';
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'FINANCIERO': return <TrendingUp size={16} className="text-red-400" />;
            case 'LEGAL': return <FileText size={16} className="text-orange-400" />;
            case 'OPERACIONAL': return <Network size={16} className="text-yellow-400" />;
            case 'COMPLIANCE': return <CheckCircle size={16} className="text-blue-400" />;
            default: return <AlertTriangle size={16} className="text-zinc-400" />;
        }
    };

    return (
        <section ref={ref} id="demo" className="py-32 sm:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Ejemplo de Análisis</h2>
                    <p className="text-xl text-zinc-400">Demostración práctica de cómo el sistema identifica y clasifica riesgos en contratos financieros</p>
                </div>

                {/* Demo interface mockup */}
                <div className={`bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 lg:p-12 mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                            <Play size={24} className="text-green-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-zinc-100">Contrato de Préstamo Personal</h3>
                            <p className="text-zinc-400">Análisis completado en 2.3 segundos</p>
                        </div>
                    </div>

                    {/* Risk summary */}
                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-red-400">1</div>
                            <div className="text-sm text-red-300">Crítico</div>
                        </div>
                        <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-orange-400">2</div>
                            <div className="text-sm text-orange-300">Alto</div>
                        </div>
                        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-yellow-400">3</div>
                            <div className="text-sm text-yellow-300">Medio</div>
                        </div>
                        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-400">0</div>
                            <div className="text-sm text-green-300">Bajo</div>
                        </div>
                    </div>

                    {/* Detailed risks */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-zinc-100 mb-4">Riesgos Identificados:</h4>
                        {exampleRisks.map((risk, index) => (
                            <div key={index} className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 hover:border-zinc-600 transition-all duration-300">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        {getCategoryIcon(risk.category)}
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(risk.severity)}`}>
                                            {risk.severity}
                                        </span>
                                        <span className="text-sm text-zinc-400">{risk.category}</span>
                                    </div>
                                </div>
                                
                                <div className="mb-3">
                                    <h5 className="text-sm font-medium text-zinc-300 mb-1">{risk.clause}</h5>
                                    <p className="text-zinc-400 text-sm">{risk.description}</p>
                                </div>
                                
                                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium text-green-300 mb-1">Recomendación:</p>
                                            <p className="text-sm text-green-200">{risk.recommendation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Analysis insights */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300">
                        <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <TrendingUp size={24} className="text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-100 mb-3">Score de Favorabilidad</h3>
                        <div className="text-3xl font-bold text-red-400 mb-2">23%</div>
                        <p className="text-sm text-zinc-400">Contrato desfavorable para el prestatario</p>
                    </div>

                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-center hover:border-green-500/30 transition-all duration-300">
                        <div className="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Network size={24} className="text-green-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-100 mb-3">Entidades Identificadas</h3>
                        <div className="text-3xl font-bold text-green-400 mb-2">47</div>
                        <p className="text-sm text-zinc-400">Cláusulas, términos y relaciones</p>
                    </div>

                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
                        <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <FileText size={24} className="text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-100 mb-3">Reportes Generados</h3>
                        <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
                        <p className="text-sm text-zinc-400">Formatos diferentes disponibles</p>
                    </div>
                </div>

                {/* Call to action */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8 lg:p-12">
                        <h3 className="text-3xl font-bold text-zinc-100 mb-4">¿Listo para analizar tus contratos?</h3>
                        <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
                            Obtén análisis profesionales de contratos financieros en minutos, no horas. 
                            Identifica riesgos ocultos y optimiza tus decisiones contractuales.
                        </p>
                        <button className="group w-full max-w-xs sm:w-auto px-8 py-4 bg-green-600 text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-green-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-600/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mx-auto">
                            <Play size={20} />
                            <span>Probar Demo</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
});
