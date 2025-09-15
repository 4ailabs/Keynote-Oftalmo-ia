
import React, { forwardRef } from 'react';
import { BookCopy, BrainCircuit, MessageSquareCode } from 'lucide-react';

const CodeBlock = ({ title, content, lang = 'bash' }: { title: string, content: string, lang?: string }) => (
    <div className="bg-zinc-900/70 border border-zinc-700 rounded-lg overflow-hidden my-4">
        <div className="px-4 py-2 bg-zinc-800/50 border-b border-zinc-700">
            <p className="text-xs font-mono text-zinc-400">{title}</p>
        </div>
        <div className="p-4">
            <pre><code className={`language-${lang} text-sm`}>{content}</code></pre>
        </div>
    </div>
);

const systemInstructionContent = `Actúas como un Agente de Investigación Clínica de IA... Tu única herramienta es la Búsqueda de Google...
...
Tu comunicación es siempre profesional, objetiva y basada en la evidencia encontrada.`;

const userQueryContent = `Paciente de 65 años, diabético, presenta pérdida de visión súbita en ojo derecho.`;

const step1ResultContent = `Basado en la búsqueda inicial, los diagnósticos diferenciales prioritarios para un paciente de 65 años con diabetes y pérdida de visión súbita son:
1. Oclusión de la Vena Central de la Retina (OVCR)
2. Desprendimiento de Retina Regmatógeno (DRR)
3. Neuropatía Óptica Isquémica Anterior (NOIA)
...`;

const executeStep2Prompt = (context: string) => `
${systemInstructionContent}

### SOLICITUD ORIGINAL DEL USUARIO ###
"""
${userQueryContent}
"""

### PLAN DE INVESTIGACIÓN COMPLETO ###
1. Generar lista de diagnósticos diferenciales.
2. Investigar evidencia de apoyo para OVCR.
3. Investigar evidencia de apoyo para DRR.
...

<span class="text-yellow-400 bg-yellow-900/30 p-1 rounded">${context}</span>

### TAREA ACTUAL (Paso 2) ###
Ejecuta el siguiente paso del plan: "Investigar la evidencia de apoyo (criterios diagnósticos, prevalencia) para la Oclusión de la Vena Central de la Retina (OVCR)".
...
`;

export const ContextEngineeringSection = forwardRef<HTMLElement>((props, ref) => {
    const injectedContext = `
### RESULTADO DEL PASO 1: Generar lista de diagnósticos diferenciales. ###
"""
${step1ResultContent}
"""
`;

    return (
        <section ref={ref} id="context-engineering" className="py-24 sm:py-32 bg-zinc-950/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-block bg-blue-950/50 border border-blue-700 rounded-full p-3 mb-4">
                        <BrainCircuit className="w-8 h-8 text-blue-400" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">Fuentes Médicas Validadas</h2>
                    <p className="text-xl text-zinc-400">Sistema que prioriza y valida automáticamente fuentes médicas especializadas, garantizando evidencia de alta calidad en cada análisis.</p>

                    {/* Medical Sources Grid */}
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
                        <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-blue-400 mb-1">1°</div>
                            <div className="text-sm font-medium text-zinc-200 mb-1">Revisiones Sistemáticas</div>
                            <div className="text-xs text-zinc-400">Cochrane, PubMed</div>
                        </div>
                        <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">2°</div>
                            <div className="text-sm font-medium text-zinc-200 mb-1">Ensayos Clínicos</div>
                            <div className="text-xs text-zinc-400">ClinicalTrials.gov</div>
                        </div>
                        <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-400 mb-1">3°</div>
                            <div className="text-sm font-medium text-zinc-200 mb-1">Guías Clínicas</div>
                            <div className="text-xs text-zinc-400">AAO, ESCRS</div>
                        </div>
                        <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-yellow-400 mb-1">4°</div>
                            <div className="text-sm font-medium text-zinc-200 mb-1">Revistas Indexadas</div>
                            <div className="text-xs text-zinc-400">JAMA, Lancet, NEJM</div>
                        </div>
                        <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-purple-400 mb-1">5°</div>
                            <div className="text-sm font-medium text-zinc-200 mb-1">Bases Autoridad</div>
                            <div className="text-xs text-zinc-400">UpToDate, Medscape</div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <BookCopy className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl font-semibold text-zinc-100 mb-2">El Desafío "Sin Estado" (Stateless)</h3>
                                <p className="text-zinc-400">Los modelos de lenguaje son inherentemente "stateless" (sin estado), lo que significa que no tienen memoria de interacciones pasadas. Cada llamada a la API es una pizarra en blanco. Sin una estrategia para gestionar el contexto, una investigación sería una serie de búsquedas desconectadas y superficiales, incapaz de construir sobre hallazgos previos o formar una línea de razonamiento cohesiva.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <MessageSquareCode className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl font-semibold text-zinc-100 mb-2">La Solución: Contexto Acumulativo</h3>
                                <p className="text-zinc-400">"Context Engineering" resuelve esto creando una memoria dinámica dentro del propio prompt. Antes de ejecutar un nuevo paso, recopilamos los hallazgos de todos los pasos anteriores y los inyectamos en el nuevo prompt. Esto proporciona al modelo un historial completo y actualizado de la investigación.</p>
                                <p className="mt-2 text-zinc-400">Esta técnica habilita un potente proceso de razonamiento de <span className="font-semibold text-green-400">"Cadena de Pensamiento" (Chain of Thought)</span>. El resultado de un paso se convierte en una pieza crítica de entrada para el siguiente, permitiendo al agente realizar análisis complejos de múltiples pasos, identificar correlaciones entre piezas dispares de evidencia y, en última instancia, sintetizar todos los hallazgos en un informe final completo, simulando el proceso de pensamiento de un experto humano.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                        <h4 className="text-lg font-bold text-center mb-4 text-zinc-100">Ejemplo Visual: Prompt para el "Paso 2"</h4>
                        
                        <div className="bg-zinc-900/70 border border-zinc-700 rounded-lg overflow-hidden my-4">
                            <div className="px-4 py-2 bg-zinc-800/50 border-b border-zinc-700">
                                <p className="text-xs font-mono text-zinc-400">prompt_para_paso_2.txt</p>
                            </div>
                            <div className="p-4 text-sm font-mono">
                                <pre className="whitespace-pre-wrap"><code>
                                    <span className="text-gray-500">{`// Instrucción del sistema (define el rol del agente)`}</span><br/>
                                    {systemInstructionContent}<br/><br/>
                                    <span className="text-gray-500">{`// La consulta original del usuario`}</span><br/>
                                    ### SOLICITUD ORIGINAL DEL USUARIO ###<br/>
                                    """{userQueryContent}"""<br/><br/>
                                    <span className="text-gray-500">{`// El plan de investigación completo`}</span><br/>
                                    ### PLAN DE INVESTIGACIÓN COMPLETO ###<br/>
                                    1. Generar lista de diagnósticos diferenciales.<br/>
                                    2. Investigar evidencia de apoyo para OVCR.<br/>
                                    ...<br/><br/>
                                    <span className="text-yellow-400">{`// INICIO: CONTEXTO INYECTADO (Resultado del Paso 1)`}</span><br/>
                                    <div className="text-cyan-300 bg-cyan-900/30 border border-cyan-700 p-2 my-2 rounded-md">
                                        ### RESULTADO DEL PASO 1: ... ###<br/>
                                        """<br/>
                                        {step1ResultContent}<br/>
                                        """
                                    </div>
                                    <span className="text-yellow-400">{`// FIN: CONTEXTO INYECTADO`}</span><br/><br/>
                                    <span className="text-gray-500">{`// La tarea específica para este paso`}</span><br/>
                                    ### TAREA ACTUAL (Paso 2) ###<br/>
                                    Ejecuta el siguiente paso del plan...
                                </code></pre>
                            </div>
                        </div>
                        <p className="text-center text-xs text-zinc-500 mt-4">El bloque resaltado en cian es el resultado del paso anterior, que ahora informa el análisis del paso actual.</p>
                    </div>
                </div>
            </div>
        </section>
    );
});