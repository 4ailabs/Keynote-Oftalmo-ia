
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
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="lg:even:order-last">
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">{title}</h3>
            <p className="text-lg text-zinc-400 mb-6">{description}</p>
            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-zinc-200">{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h4 className="font-semibold text-zinc-100 mb-2">{detailsTitle}</h4>
                <p className="text-zinc-400 text-sm">{detailsText}</p>
            </div>
        </div>
        <div className="relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-zinc-800 rounded-3xl p-8 sm:p-16 text-center overflow-hidden">
            <div className="absolute -inset-20 bg-[radial-gradient(circle,_rgba(0,122,255,0.1)_0%,_transparent_70%)] animate-spin [animation-duration:20s]"></div>
            <div className="relative z-10">
                <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">{number}</div>
                <div className="text-3xl font-semibold text-zinc-100 mb-2">{name}</div>
                <div className="text-lg text-zinc-400">{summary}</div>
            </div>
        </div>
    </div>
);


export const PhasesSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="phases" className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Tres fases. Un objetivo.</h2>
                    <p className="text-xl text-zinc-400">Un proceso de razonamiento clínico sistemático que combina análisis bayesiano, evidencia médica y experiencia especializada.</p>
                </div>

                <div className="space-y-24">
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
