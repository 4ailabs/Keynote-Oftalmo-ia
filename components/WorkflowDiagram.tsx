import React from 'react';

export const WorkflowDiagram: React.FC = () => {
    return (
        <div className="w-full max-w-7xl mx-auto p-8 bg-zinc-900/50 border border-zinc-700 rounded-2xl">
            <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">Flujo del Proceso de Análisis</h3>
            
            <svg viewBox="0 0 1400 600" className="w-full h-auto">
                <defs>
                    <linearGradient id="stepGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                    <linearGradient id="stepGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                    <linearGradient id="stepGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#5B21B6" />
                    </linearGradient>
                    <linearGradient id="stepGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient id="stepGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EF4444" />
                        <stop offset="100%" stopColor="#DC2626" />
                    </linearGradient>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                    </marker>
                </defs>
                
                {/* Step 1: Document Upload */}
                <g transform="translate(50, 100)">
                    <rect x="0" y="0" width="200" height="120" rx="15" fill="url(#stepGradient1)" stroke="#1E40AF" strokeWidth="2"/>
                    <circle cx="20" cy="20" r="15" fill="#FFFFFF" stroke="#1E40AF" strokeWidth="2"/>
                    <text x="20" y="26" textAnchor="middle" className="text-sm font-bold fill-blue-600">1</text>
                    <text x="100" y="35" textAnchor="middle" className="text-lg font-bold fill-white">Carga de Documento</text>
                    <text x="100" y="55" textAnchor="middle" className="text-sm fill-blue-100">PDF, DOCX, TXT</text>
                    <text x="100" y="75" textAnchor="middle" className="text-sm fill-blue-100">Extracción automática</text>
                    <text x="100" y="95" textAnchor="middle" className="text-sm fill-blue-100">Validación de contenido</text>
                </g>
                
                {/* Arrow 1 */}
                <path d="M 270 160 L 320 160" stroke="#6B7280" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
                
                {/* Step 2: Claude Analysis */}
                <g transform="translate(350, 100)">
                    <rect x="0" y="0" width="200" height="120" rx="15" fill="url(#stepGradient2)" stroke="#047857" strokeWidth="2"/>
                    <circle cx="20" cy="20" r="15" fill="#FFFFFF" stroke="#047857" strokeWidth="2"/>
                    <text x="20" y="26" textAnchor="middle" className="text-sm font-bold fill-green-600">2</text>
                    <text x="100" y="35" textAnchor="middle" className="text-lg font-bold fill-white">Análisis Claude</text>
                    <text x="100" y="55" textAnchor="middle" className="text-sm fill-green-100">Interpretación legal</text>
                    <text x="100" y="75" textAnchor="middle" className="text-sm fill-green-100">Términos clave</text>
                    <text x="100" y="95" textAnchor="middle" className="text-sm fill-green-100">Recomendaciones</text>
                </g>
                
                {/* Arrow 2 */}
                <path d="M 570 160 L 620 160" stroke="#6B7280" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
                
                {/* Step 3: FinBERT Analysis */}
                <g transform="translate(650, 100)">
                    <rect x="0" y="0" width="200" height="120" rx="15" fill="url(#stepGradient3)" stroke="#5B21B6" strokeWidth="2"/>
                    <circle cx="20" cy="20" r="15" fill="#FFFFFF" stroke="#5B21B6" strokeWidth="2"/>
                    <text x="20" y="26" textAnchor="middle" className="text-sm font-bold fill-purple-600">3</text>
                    <text x="100" y="35" textAnchor="middle" className="text-lg font-bold fill-white">Análisis FinBERT</text>
                    <text x="100" y="55" textAnchor="middle" className="text-sm fill-purple-100">Sentimiento financiero</text>
                    <text x="100" y="75" textAnchor="middle" className="text-sm fill-purple-100">Keywords de riesgo</text>
                    <text x="100" y="95" textAnchor="middle" className="text-sm fill-purple-100">Scores de favorabilidad</text>
                </g>
                
                {/* Arrow 3 */}
                <path d="M 870 160 L 920 160" stroke="#6B7280" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
                
                {/* Step 4: GraphRAG Construction */}
                <g transform="translate(950, 100)">
                    <rect x="0" y="0" width="200" height="120" rx="15" fill="url(#stepGradient4)" stroke="#D97706" strokeWidth="2"/>
                    <circle cx="20" cy="20" r="15" fill="#FFFFFF" stroke="#D97706" strokeWidth="2"/>
                    <text x="20" y="26" textAnchor="middle" className="text-sm font-bold fill-orange-600">4</text>
                    <text x="100" y="35" textAnchor="middle" className="text-lg font-bold fill-white">Construcción GraphRAG</text>
                    <text x="100" y="55" textAnchor="middle" className="text-sm fill-orange-100">Extracción de entidades</text>
                    <text x="100" y="75" textAnchor="middle" className="text-sm fill-orange-100">Relaciones y dependencias</text>
                    <text x="100" y="95" textAnchor="middle" className="text-sm fill-orange-100">Grafo de conocimiento</text>
                </g>
                
                {/* Arrow 4 */}
                <path d="M 1170 160 L 1220 160" stroke="#6B7280" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
                
                {/* Step 5: Synthesis & Report */}
                <g transform="translate(1250, 100)">
                    <rect x="0" y="0" width="200" height="120" rx="15" fill="url(#stepGradient5)" stroke="#DC2626" strokeWidth="2"/>
                    <circle cx="20" cy="20" r="15" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2"/>
                    <text x="20" y="26" textAnchor="middle" className="text-sm font-bold fill-red-600">5</text>
                    <text x="100" y="35" textAnchor="middle" className="text-lg font-bold fill-white">Síntesis y Reporte</text>
                    <text x="100" y="55" textAnchor="middle" className="text-sm fill-red-100">Integración de resultados</text>
                    <text x="100" y="75" textAnchor="middle" className="text-sm fill-red-100">Reportes múltiples formatos</text>
                    <text x="100" y="95" textAnchor="middle" className="text-sm fill-red-100">Visualización interactiva</text>
                </g>
                
                {/* Parallel Processing Indicators */}
                <g transform="translate(100, 300)">
                    <text x="650" y="30" textAnchor="middle" className="text-xl font-bold fill-zinc-100">
                        Procesamiento Paralelo y Tiempos
                    </text>
                    
                    {/* Timeline */}
                    <line x1="100" y1="80" x2="1300" y2="80" stroke="#6B7280" strokeWidth="2"/>
                    
                    {/* Time markers */}
                    <g transform="translate(200, 60)">
                        <line x1="0" y1="0" x2="0" y2="40" stroke="#10B981" strokeWidth="3"/>
                        <text x="0" y="55" textAnchor="middle" className="text-sm font-bold fill-green-400">0.3s</text>
                        <text x="0" y="70" textAnchor="middle" className="text-xs fill-zinc-400">Carga</text>
                    </g>
                    
                    <g transform="translate(500, 60)">
                        <line x1="0" y1="0" x2="0" y2="40" stroke="#3B82F6" strokeWidth="3"/>
                        <text x="0" y="55" textAnchor="middle" className="text-sm font-bold fill-blue-400">1.2s</text>
                        <text x="0" y="70" textAnchor="middle" className="text-xs fill-zinc-400">Claude</text>
                    </g>
                    
                    <g transform="translate(800, 60)">
                        <line x1="0" y1="0" x2="0" y2="40" stroke="#8B5CF6" strokeWidth="3"/>
                        <text x="0" y="55" textAnchor="middle" className="text-sm font-bold fill-purple-400">0.8s</text>
                        <text x="0" y="70" textAnchor="middle" className="text-xs fill-zinc-400">FinBERT</text>
                    </g>
                    
                    <g transform="translate(1100, 60)">
                        <line x1="0" y1="0" x2="0" y2="40" stroke="#F59E0B" strokeWidth="3"/>
                        <text x="0" y="55" textAnchor="middle" className="text-sm font-bold fill-orange-400">1.0s</text>
                        <text x="0" y="70" textAnchor="middle" className="text-xs fill-zinc-400">GraphRAG</text>
                    </g>
                    
                    <g transform="translate(1350, 60)">
                        <line x1="0" y1="0" x2="0" y2="40" stroke="#EF4444" strokeWidth="3"/>
                        <text x="0" y="55" textAnchor="middle" className="text-sm font-bold fill-red-400">0.5s</text>
                        <text x="0" y="70" textAnchor="middle" className="text-xs fill-zinc-400">Síntesis</text>
                    </g>
                    
                    {/* Total time */}
                    <g transform="translate(650, 120)">
                        <rect x="0" y="0" width="200" height="60" rx="10" fill="#1F2937" stroke="#6B7280" strokeWidth="2"/>
                        <text x="100" y="25" textAnchor="middle" className="text-2xl font-bold fill-green-400">Total: 2.3s</text>
                        <text x="100" y="45" textAnchor="middle" className="text-sm fill-zinc-300">Tiempo de análisis completo</text>
                    </g>
                </g>
                
                {/* Data Flow Indicators */}
                <g transform="translate(100, 450)">
                    <text x="650" y="30" textAnchor="middle" className="text-xl font-bold fill-zinc-100">
                        Flujo de Datos y Resultados
                    </text>
                    
                    {/* Data flow boxes */}
                    <g transform="translate(50, 60)">
                        <rect x="0" y="0" width="150" height="80" rx="10" fill="#1E40AF" stroke="#3B82F6" strokeWidth="2"/>
                        <text x="75" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">Entrada</text>
                        <text x="75" y="45" textAnchor="middle" className="text-xs fill-blue-100">Contrato PDF</text>
                        <text x="75" y="60" textAnchor="middle" className="text-xs fill-blue-100">~50KB texto</text>
                    </g>
                    
                    <g transform="translate(250, 60)">
                        <rect x="0" y="0" width="150" height="80" rx="10" fill="#047857" stroke="#10B981" strokeWidth="2"/>
                        <text x="75" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">Claude</text>
                        <text x="75" y="45" textAnchor="middle" className="text-xs fill-green-100">15 riesgos identificados</text>
                        <text x="75" y="60" textAnchor="middle" className="text-xs fill-green-100">25 términos clave</text>
                    </g>
                    
                    <g transform="translate(450, 60)">
                        <rect x="0" y="0" width="150" height="80" rx="10" fill="#5B21B6" stroke="#8B5CF6" strokeWidth="2"/>
                        <text x="75" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">FinBERT</text>
                        <text x="75" y="45" textAnchor="middle" className="text-xs fill-purple-100">Score: 23% favorable</text>
                        <text x="75" y="60" textAnchor="middle" className="text-xs fill-purple-100">8 keywords riesgo</text>
                    </g>
                    
                    <g transform="translate(650, 60)">
                        <rect x="0" y="0" width="150" height="80" rx="10" fill="#D97706" stroke="#F59E0B" strokeWidth="2"/>
                        <text x="75" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">GraphRAG</text>
                        <text x="75" y="45" textAnchor="middle" className="text-xs fill-orange-100">47 entidades</text>
                        <text x="75" y="60" textAnchor="middle" className="text-xs fill-orange-100">89 relaciones</text>
                    </g>
                    
                    <g transform="translate(850, 60)">
                        <rect x="0" y="0" width="150" height="80" rx="10" fill="#DC2626" stroke="#EF4444" strokeWidth="2"/>
                        <text x="75" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">Salida</text>
                        <text x="75" y="45" textAnchor="middle" className="text-xs fill-red-100">5 reportes generados</text>
                        <text x="75" y="60" textAnchor="middle" className="text-xs fill-red-100">Grafo visualizado</text>
                    </g>
                    
                    {/* Flow arrows */}
                    <path d="M 200 100 L 240 100" stroke="#6B7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                    <path d="M 400 100 L 440 100" stroke="#6B7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                    <path d="M 600 100 L 640 100" stroke="#6B7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                    <path d="M 800 100 L 840 100" stroke="#6B7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                </g>
            </svg>
        </div>
    );
};
