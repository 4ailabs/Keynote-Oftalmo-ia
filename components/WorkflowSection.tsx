
import React, { forwardRef } from 'react';

interface StepFeatureProps {
    title: string;
    description: string;
}

const StepFeature: React.FC<StepFeatureProps> = ({ title, description }) => (
    <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
        <h4 className="font-semibold text-zinc-100 mb-1">{title}</h4>
        <p className="text-sm text-zinc-400">{description}</p>
    </div>
);

interface WorkflowStepProps {
    number: number;
    title: string;
    description: string;
    features: StepFeatureProps[];
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ number, title, description, features }) => (
    <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
        <div className="flex md:flex-col items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center font-bold text-2xl md:text-3xl text-white flex-shrink-0">
                {number}
            </div>
            <div className="md:hidden h-px w-full bg-zinc-700"></div>
        </div>
        <div>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-3">{title}</h3>
            <p className="text-lg text-zinc-400 mb-6">{description}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                    <StepFeature key={index} {...feature} />
                ))}
            </div>
        </div>
    </div>
);

const workflowSteps: WorkflowStepProps[] = [
    { number: 1, title: "Recopilación de Datos del Paciente", description: "Análisis inicial que procesa información demográfica, historia clínica, síntomas actuales y factores de riesgo específicos.", features: [{ title: "Análisis Demográfico", description: "Edad, sexo, etnia y factores relevantes" }, { title: "Factores de Riesgo", description: "Diabetes, hipertensión, historia familiar" }, { title: "Red Flags", description: "Detección automática de signos críticos" }] },
    { number: 2, title: "Generación del Plan de Investigación", description: "Creación de una estrategia de investigación personalizada basada en el contexto del paciente.", features: [{ title: "Razonamiento Bayesiano", description: "Probabilidades pre-test basadas en epidemiología" }, { title: "Diagnósticos Diferenciales", description: "Lista priorizada de posibles condiciones" }, { title: "Plan Estructurado", description: "Secuencia lógica de 4-8 pasos" }] },
    { number: 3, title: "Búsqueda de Evidencia Médica", description: "Búsqueda sistemática en bases de datos médicas especializadas utilizando algoritmos optimizados.", features: [{ title: "Fuentes Especializadas", description: "PubMed, Cochrane, AAO, ESCRS" }, { title: "Scoring de Calidad", description: "Evaluación 0-100 por autoridad médica" }, { title: "Filtrado Inteligente", description: "Eliminación de fuentes no confiables" }] },
    { number: 4, title: "Análisis Diferencial Estructurado", description: "Evaluación sistemática de cada diagnóstico diferencial utilizando evidencia científica.", features: [{ title: "Probabilidades Post-test", description: "Actualización basada en evidencia" }, { title: "Likelihood Ratios", description: "Cálculos específicos por prueba" }, { title: "Evidencia Pro/Contra", description: "Análisis balanceado de cada diagnóstico" }] },
    { number: 5, title: "Análisis Fisiopatológico", description: "Descripción detallada de los mecanismos patológicos subyacentes, correlaciones anatómicas y secuencia temporal de eventos.", features: [{ title: "Mecanismos Patológicos", description: "Explicación molecular y celular" }, { title: "Correlación Anatomía-Síntomas", description: "Conexión entre estructura y función" }, { title: "Secuencia Temporal", description: "Progresión natural de la condición" }] },
    { number: 6, title: "Estrategia Diagnóstica", description: "Desarrollo de un plan diagnóstico costo-efectivo que identifica las pruebas más apropiadas en la secuencia óptima.", features: [{ title: "Pruebas de Primera Línea", description: "Estudios de mayor yield diagnóstico" }, { title: "Secuencia Óptima", description: "Orden lógico y cost-effective" }, { title: "Criterios de Decisión", description: "Puntos de corte y reglas clínicas" }] },
    { number: 7, title: "Consideraciones Terapéuticas", description: "Análisis de opciones terapéuticas basadas en evidencia científica actual.", features: [{ title: "Tratamientos Primera Línea", description: "Opciones con mejor evidencia" }, { title: "Contraindicaciones", description: "Absolutas y relativas" }, { title: "Protocolos de Monitoreo", description: "Seguimiento estructurado y timeline" }] },
    { number: 8, title: "Generación del Reporte Clínico", description: "Síntesis ejecutiva que integra toda la evidencia en un reporte médico profesional.", features: [{ title: "Síntesis Ejecutiva", description: "Resumen clínico conciso y accionable" }, { title: "Recomendaciones Priorizadas", description: "Plan de acción basado en evidencia" }, { title: "Referencias Trazables", description: "Fuentes para verificación médica" }] },
];

export const WorkflowSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="workflow" className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Pasos del Proceso de Análisis</h2>
                    <p className="text-xl text-zinc-400">Desglose detallado de los 8 pasos que ejecuta el sistema durante cada análisis clínico.</p>
                </div>
                 <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-transparent to-transparent opacity-50"></div>
                    <div className="relative z-10">
                        <div className="relative">
                             <div className="absolute left-10 md:left-[3.2rem] top-0 bottom-0 w-0.5 bg-zinc-700/50 hidden md:block"></div>
                             <div className="space-y-16">
                                {workflowSteps.map((step) => <WorkflowStep key={step.number} {...step} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
