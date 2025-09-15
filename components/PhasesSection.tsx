
import React, { forwardRef, ReactNode } from 'react';
import { Check } from 'lucide-react';

interface PhaseProps {
    number: string;
    name: string;
    summary: string;
    title: string;
    description: string;
    features: string[];
    detailsTitle: string;
    detailsText: string;
}

const Phase: React.FC<PhaseProps> = ({ number, name, summary, title, description, features, detailsTitle, detailsText }) => (
    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-20 items-center">
        <div className="lg:even:order-last">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-100 mb-3 sm:mb-4 px-2 sm:px-0">{title}</h3>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 mb-4 sm:mb-6 px-2 sm:px-0 leading-relaxed">{description}</p>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 px-2 sm:px-0">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" />
                        <span className="text-zinc-200 text-sm sm:text-base">{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 sm:p-6 mx-2 sm:mx-0">
                <h4 className="font-semibold text-zinc-100 mb-2 text-sm sm:text-base">{detailsTitle}</h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{detailsText}</p>
            </div>
        </div>
        <div className="relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center overflow-hidden mx-2 sm:mx-0">
            <div className="absolute -inset-20 bg-[radial-gradient(circle,_rgba(0,122,255,0.1)_0%,_transparent_70%)] animate-spin [animation-duration:20s]"></div>
            <div className="relative z-10">
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2 sm:mb-4">{number}</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-100 mb-1 sm:mb-2">{name}</div>
                <div className="text-sm sm:text-base md:text-lg text-zinc-400">{summary}</div>
            </div>
        </div>
    </div>
);


export const PhasesSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="phases" className="py-16 sm:py-20 md:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 mb-3 sm:mb-4 px-2">Metodología de 3 Fases</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 px-3 sm:px-6 leading-relaxed">Proceso sistemático de razonamiento clínico que integra análisis bayesiano, evidencia médica validada y experiencia especializada en oftalmología.</p>
                </div>

                <div className="space-y-16 sm:space-y-20 md:space-y-24">
                    <Phase 
                        number="01"
                        name="Planificación"
                        summary="Estructura y contextualiza cada caso clínico con precisión médica"
                        title="Planificación Inteligente"
                        description="Cada caso comienza con un análisis profundo y contextualizado. El sistema examina minuciosamente el perfil demográfico, identifica factores de riesgo específicos y detecta automáticamente signos de alarma que requieren atención prioritaria."
                        features={[
                            "Análisis demográfico especializado con factores de riesgo oftalmológicos",
                            "Detección automática de red flags mediante algoritmos especializados",
                            "Generación de hipótesis diagnósticas basadas en evidencia previa",
                            "Priorización bayesiana de diagnósticos diferenciales",
                            "Establecimiento de contexto clínico integral"
                        ]}
                        detailsTitle="Tecnología de Análisis Contextual"
                        detailsText="Utilizamos algoritmos de procesamiento de lenguaje natural especializados en terminología médica oftalmológica, combinados con bases de conocimiento actualizadas que incluyen más de 1,500 condiciones oftalmológicas documentadas."
                    />
                    <Phase 
                        number="02"
                        name="Investigación"
                        summary="Evidencia médica de la más alta calidad y relevancia"
                        title="Investigación Exhaustiva"
                        description="Búsqueda sistemática en las fuentes médicas más prestigiosas del mundo. Cada consulta accede a PubMed, Cochrane Library, American Academy of Ophthalmology, y bases de datos especializadas para construir un fundamento sólido de evidencia científica."
                        features={[
                            "Acceso directo a más de 30 millones de publicaciones médicas",
                            "Sistema de scoring automático de autoridad médica (0-100 puntos)",
                            "Análisis diferencial con likelihood ratios calculados",
                            "Correlaciones fisiopatológicas detalladas y actualizadas",
                            "Evaluación de calidad de evidencia según estándares GRADE"
                        ]}
                        detailsTitle="Validación de Fuentes Médicas"
                        detailsText="Cada fuente es evaluada automáticamente considerando factor de impacto, autoridad institucional, fecha de publicación, y relevancia específica para oftalmología. Solo fuentes con puntuación superior a 70/100 son incluidas en el análisis final."
                    />
                    <Phase 
                        number="03"
                        name="Síntesis"
                        summary="Decisiones fundamentadas y accionables para el paciente"
                        title="Síntesis Clínica Avanzada"
                        description="Integración completa de toda la evidencia recopilada en un reporte médico estructurado. El sistema aplica principios de medicina basada en evidencia para generar recomendaciones accionables, priorizadas y fundamentadas científicamente."
                        features={[
                            "Reporte médico profesional con formato estándar hospitalario",
                            "Recomendaciones priorizadas por nivel de evidencia",
                            "Plan de seguimiento estructurado con timelines específicos",
                            "Referencias completas y trazables para verificación",
                            "Identificación de contraindicaciones y interacciones"
                        ]}
                        detailsTitle="Medicina de Precisión Oftalmológica"
                        detailsText="Las recomendaciones consideran no solo la evidencia general, sino también factores específicos del paciente como edad, comorbilidades, medicaciones actuales, y factores sociodemográficos que pueden influir en el pronóstico y tratamiento."
                    />
                </div>
            </div>
        </section>
    );
});
