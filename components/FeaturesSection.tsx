
import React, { forwardRef } from 'react';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    details: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, details }) => (
    <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-blue-950/20 overflow-hidden">
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-3xl">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-zinc-100 mb-3">{title}</h3>
        <p className="text-zinc-400 mb-6">{description}</p>
        <div className="bg-zinc-800/50 rounded-lg p-4 text-left">
            <ul className="space-y-2">
                {details.map((detail, index) => (
                    <li key={index} className="flex text-sm text-zinc-400">
                        <span className="text-blue-500 mr-2">→</span>
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export const FeaturesSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="features" className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Características Avanzadas</h2>
                    <p className="text-xl text-zinc-400">Tecnología médica de vanguardia diseñada específicamente para el oftalmólogo moderno</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard 
                        icon="🔬"
                        title="Validación Automática de Fuentes"
                        description="Sistema de scoring 0-100 para autoridad médica con filtrado inteligente de fuentes no confiables."
                        details={["Evaluación de factor de impacto", "Verificación de conflictos de interés", "Filtrado por fecha y relevancia", "Detección de contradicciones"]}
                    />
                    <FeatureCard 
                        icon="🧠"
                        title="Razonamiento Bayesiano Avanzado"
                        description="Actualización de probabilidades diagnósticas basada en evidencia acumulativa y contexto clínico."
                        details={["Probabilidades pre-test", "Actualización dinámica con evidencia", "Integración de likelihood ratios", "Consideración de factores de confusión"]}
                    />
                    <FeatureCard 
                        icon="⚡"
                        title="Detección Inteligente de Red Flags"
                        description="Identificación automática de signos de alarma oftalmológicos que requieren atención inmediata."
                        details={["Base de datos con 200+ signos", "Clasificación por urgencia", "Alertas para condiciones tiempo-dependientes", "Protocolos de emergencia integrados"]}
                    />
                    <FeatureCard 
                        icon="📊"
                        title="Análisis Diferencial Sistemático"
                        description="Evaluación estructurada de diagnósticos con likelihood ratios y análisis de evidencia a favor y en contra."
                        details={["Matriz de diagnósticos por síntoma", "Cálculo de sensitivity/specificity", "Análisis de cost-effectiveness", "Secuencia diagnóstica optimizada"]}
                    />
                    <FeatureCard 
                        icon="🏥"
                        title="Integración con Protocolos Clínicos"
                        description="Alineación automática con guías de práctica clínica de AAO, ESCRS y otras sociedades reconocidas."
                        details={["Guías AAO actualizadas", "Protocolos ESCRS para cirugía", "Recomendaciones de sociedades", "Adaptación a protocolos institucionales"]}
                    />
                    <FeatureCard 
                        icon="📋"
                        title="Reportes Médicos Profesionales"
                        description="Generación automática de reportes en formato médico estándar con referencias completas."
                        details={["Formato SOAP+ estructurado", "Referencias bibliográficas completas", "Códigos ICD-10 relevantes", "Plan de seguimiento detallado"]}
                    />
                </div>
            </div>
        </section>
    );
});
