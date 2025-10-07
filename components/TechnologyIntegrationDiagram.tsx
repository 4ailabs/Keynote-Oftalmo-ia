import React from 'react';

export const TechnologyIntegrationDiagram: React.FC = () => {
    return (
        <div className="w-full max-w-7xl mx-auto p-8 bg-zinc-900/50 border border-zinc-700 rounded-2xl">
            <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">Integración Tecnológica: Claude + FinBERT + GraphRAG</h3>
            
            <svg viewBox="0 0 1400 900" className="w-full h-auto">
                <defs>
                    <linearGradient id="claudeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                    <linearGradient id="finbertGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                    <linearGradient id="graphragGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#5B21B6" />
                    </linearGradient>
                    <linearGradient id="integrationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EF4444" />
                        <stop offset="100%" stopColor="#DC2626" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                
                {/* Title */}
                <text x="700" y="40" textAnchor="middle" className="text-2xl font-bold fill-zinc-100">
                    Arquitectura de Integración Tecnológica
                </text>
                
                {/* Input Layer */}
                <g transform="translate(100, 100)">
                    <rect x="0" y="0" width="250" height="120" rx="15" fill="#1F2937" stroke="#6B7280" strokeWidth="2"/>
                    <text x="125" y="30" textAnchor="middle" className="text-xl font-bold fill-zinc-100">
                        Contrato de Entrada
                    </text>
                    <text x="125" y="55" textAnchor="middle" className="text-sm fill-zinc-300">
                        PDF, DOCX, TXT
                    </text>
                    <text x="125" y="75" textAnchor="middle" className="text-sm fill-zinc-300">
                        Extracción de texto
                    </text>
                    <text x="125" y="95" textAnchor="middle" className="text-sm fill-zinc-300">
                        Preprocesamiento
                    </text>
                </g>
                
                {/* Processing Distribution */}
                <g transform="translate(400, 80)">
                    <rect x="0" y="0" width="600" height="160" rx="15" fill="#111827" stroke="#374151" strokeWidth="2" strokeDasharray="5,5"/>
                    <text x="300" y="25" textAnchor="middle" className="text-lg font-bold fill-zinc-100">
                        Procesamiento Paralelo y Distribuido
                    </text>
                    
                    {/* Claude SDK */}
                    <g transform="translate(50, 50)">
                        <rect x="0" y="0" width="150" height="90" rx="10" fill="url(#claudeGradient)" filter="url(#glow)"/>
                        <text x="75" y="25" textAnchor="middle" className="text-lg font-bold fill-white">
                            Claude SDK
                        </text>
                        <text x="75" y="45" textAnchor="middle" className="text-xs fill-blue-100">
                            Modelo: claude-sonnet-4
                        </text>
                        <text x="75" y="60" textAnchor="middle" className="text-xs fill-blue-100">
                            Análisis contextual profundo
                        </text>
                        <text x="75" y="75" textAnchor="middle" className="text-xs fill-blue-100">
                            Interpretación legal
                        </text>
                    </g>
                    
                    {/* FinBERT */}
                    <g transform="translate(225, 50)">
                        <rect x="0" y="0" width="150" height="90" rx="10" fill="url(#finbertGradient)" filter="url(#glow)"/>
                        <text x="75" y="25" textAnchor="middle" className="text-lg font-bold fill-white">
                            FinBERT
                        </text>
                        <text x="75" y="45" textAnchor="middle" className="text-xs fill-green-100">
                            Modelo: ProsusAI/finbert
                        </text>
                        <text x="75" y="60" textAnchor="middle" className="text-xs fill-green-100">
                            Sentimiento financiero
                        </text>
                        <text x="75" y="75" textAnchor="middle" className="text-xs fill-green-100">
                            Detección keywords
                        </text>
                    </g>
                    
                    {/* GraphRAG */}
                    <g transform="translate(400, 50)">
                        <rect x="0" y="0" width="150" height="90" rx="10" fill="url(#graphragGradient)" filter="url(#glow)"/>
                        <text x="75" y="25" textAnchor="middle" className="text-lg font-bold fill-white">
                            GraphRAG
                        </text>
                        <text x="75" y="45" textAnchor="middle" className="text-xs fill-purple-100">
                            NetworkX + Neo4j
                        </text>
                        <text x="75" y="60" textAnchor="middle" className="text-xs fill-purple-100">
                            Grafos de conocimiento
                        </text>
                        <text x="75" y="75" textAnchor="middle" className="text-xs fill-purple-100">
                            Extracción entidades
                        </text>
                    </g>
                </g>
                
                {/* Integration Layer */}
                <g transform="translate(450, 300)">
                    <rect x="0" y="0" width="500" height="120" rx="15" fill="url(#integrationGradient)" stroke="#DC2626" strokeWidth="2"/>
                    <text x="250" y="30" textAnchor="middle" className="text-xl font-bold fill-white">
                        Capa de Integración y Síntesis
                    </text>
                    <text x="250" y="55" textAnchor="middle" className="text-sm fill-red-100">
                        • Combinación de resultados de las tres tecnologías
                    </text>
                    <text x="250" y="75" textAnchor="middle" className="text-sm fill-red-100">
                        • Validación cruzada y consistencia de datos
                    </text>
                    <text x="250" y="95" textAnchor="middle" className="text-sm fill-red-100">
                        • Generación de insights integrados y coherentes
                    </text>
                </g>
                
                {/* Output Layer */}
                <g transform="translate(50, 500)">
                    <text x="650" y="30" textAnchor="middle" className="text-xl font-bold fill-zinc-100">
                        Salidas Integradas del Sistema
                    </text>
                    
                    {/* Risk Analysis Output */}
                    <g transform="translate(50, 60)">
                        <rect x="0" y="0" width="200" height="120" rx="10" fill="#991B1B" stroke="#DC2626" strokeWidth="2"/>
                        <text x="100" y="25" textAnchor="middle" className="text-lg font-semibold fill-white">
                            Análisis de Riesgos
                        </text>
                        <text x="100" y="50" textAnchor="middle" className="text-sm fill-red-100">
                            Claude: Interpretación semántica
                        </text>
                        <text x="100" y="70" textAnchor="middle" className="text-sm fill-red-100">
                            FinBERT: Sentimiento cuantitativo
                        </text>
                        <text x="100" y="90" textAnchor="middle" className="text-sm fill-red-100">
                            GraphRAG: Dependencias estructurales
                        </text>
                    </g>
                    
                    {/* Reports Output */}
                    <g transform="translate(300, 60)">
                        <rect x="0" y="0" width="200" height="120" rx="10" fill="#1E40AF" stroke="#2563EB" strokeWidth="2"/>
                        <text x="100" y="25" textAnchor="middle" className="text-lg font-semibold fill-white">
                            Reportes Generados
                        </text>
                        <text x="100" y="50" textAnchor="middle" className="text-sm fill-blue-100">
                            Markdown: Formato ejecutivo
                        </text>
                        <text x="100" y="70" textAnchor="middle" className="text-sm fill-blue-100">
                            JSON: Datos estructurados
                        </text>
                        <text x="100" y="90" textAnchor="middle" className="text-sm fill-blue-100">
                            Texto: Formato legible
                        </text>
                    </g>
                    
                    {/* Knowledge Graph Output */}
                    <g transform="translate(550, 60)">
                        <rect x="0" y="0" width="200" height="120" rx="10" fill="#7C3AED" stroke="#8B5CF6" strokeWidth="2"/>
                        <text x="100" y="25" textAnchor="middle" className="text-lg font-semibold fill-white">
                            Grafo de Conocimiento
                        </text>
                        <text x="100" y="50" textAnchor="middle" className="text-sm fill-purple-100">
                            Entidades extraídas
                        </text>
                        <text x="100" y="70" textAnchor="middle" className="text-sm fill-purple-100">
                            Relaciones identificadas
                        </text>
                        <text x="100" y="90" textAnchor="middle" className="text-sm fill-purple-100">
                            Visualización interactiva
                        </text>
                    </g>
                    
                    {/* Recommendations Output */}
                    <g transform="translate(800, 60)">
                        <rect x="0" y="0" width="200" height="120" rx="10" fill="#059669" stroke="#10B981" strokeWidth="2"/>
                        <text x="100" y="25" textAnchor="middle" className="text-lg font-semibold fill-white">
                            Recomendaciones
                        </text>
                        <text x="100" y="50" textAnchor="middle" className="text-sm fill-green-100">
                            Acciones de mitigación
                        </text>
                        <text x="100" y="70" textAnchor="middle" className="text-sm fill-green-100">
                            Optimizaciones sugeridas
                        </text>
                        <text x="100" y="90" textAnchor="middle" className="text-sm fill-green-100">
                            Mejores prácticas
                        </text>
                    </g>
                </g>
                
                {/* Data Flow Arrows */}
                <g stroke="#6B7280" strokeWidth="3" fill="none">
                    {/* Input to Processing */}
                    <path d="M 350 160 L 400 240" markerEnd="url(#arrowhead)"/>
                    
                    {/* Processing to Integration */}
                    <path d="M 700 240 L 700 300" markerEnd="url(#arrowhead)"/>
                    
                    {/* Integration to Output */}
                    <path d="M 700 420 L 700 500" markerEnd="url(#arrowhead)"/>
                </g>
                
                {/* Technology Synergy Indicators */}
                <g transform="translate(100, 700)">
                    <text x="650" y="30" textAnchor="middle" className="text-xl font-bold fill-zinc-100">
                        Sinergia Tecnológica y Beneficios Combinados
                    </text>
                    
                    <g transform="translate(100, 60)">
                        <rect x="0" y="0" width="300" height="80" rx="10" fill="#1F2937" stroke="#6B7280" strokeWidth="2"/>
                        <text x="150" y="25" textAnchor="middle" className="text-lg font-semibold fill-zinc-100">
                            Mayor Precisión
                        </text>
                        <text x="150" y="45" textAnchor="middle" className="text-sm fill-zinc-300">
                            Validación cruzada entre múltiples análisis
                        </text>
                        <text x="150" y="60" textAnchor="middle" className="text-sm fill-zinc-300">
                            Reducción de falsos positivos y negativos
                        </text>
                    </g>
                    
                    <g transform="translate(450, 60)">
                        <rect x="0" y="0" width="300" height="80" rx="10" fill="#1F2937" stroke="#6B7280" strokeWidth="2"/>
                        <text x="150" y="25" textAnchor="middle" className="text-lg font-semibold fill-zinc-100">
                            Análisis Integral
                        </text>
                        <text x="150" y="45" textAnchor="middle" className="text-sm fill-zinc-300">
                            Contexto semántico + Sentimiento + Estructura
                        </text>
                        <text x="150" y="60" textAnchor="middle" className="text-sm fill-zinc-300">
                            Visión 360° del contrato
                        </text>
                    </g>
                    
                    <g transform="translate(800, 60)">
                        <rect x="0" y="0" width="300" height="80" rx="10" fill="#1F2937" stroke="#6B7280" strokeWidth="2"/>
                        <text x="150" y="25" textAnchor="middle" className="text-lg font-semibold fill-zinc-100">
                            Escalabilidad
                        </text>
                        <text x="150" y="45" textAnchor="middle" className="text-sm fill-zinc-300">
                            Procesamiento paralelo optimizado
                        </text>
                        <text x="150" y="60" textAnchor="middle" className="text-sm fill-zinc-300">
                            Arquitectura modular y extensible
                        </text>
                    </g>
                </g>
                
                {/* Performance Metrics */}
                <g transform="translate(100, 820)">
                    <text x="650" y="20" textAnchor="middle" className="text-lg font-bold fill-zinc-100">
                        Métricas de Rendimiento Combinado
                    </text>
                    
                    <g transform="translate(150, 40)">
                        <rect x="0" y="0" width="120" height="40" rx="5" fill="#1E40AF" stroke="#3B82F6" strokeWidth="1"/>
                        <text x="60" y="15" textAnchor="middle" className="text-sm font-bold fill-white">95%</text>
                        <text x="60" y="30" textAnchor="middle" className="text-xs fill-blue-100">Precisión Total</text>
                    </g>
                    
                    <g transform="translate(350, 40)">
                        <rect x="0" y="0" width="120" height="40" rx="5" fill="#047857" stroke="#10B981" strokeWidth="1"/>
                        <text x="60" y="15" textAnchor="middle" className="text-sm font-bold fill-white">2.3s</text>
                        <text x="60" y="30" textAnchor="middle" className="text-xs fill-green-100">Tiempo Total</text>
                    </g>
                    
                    <g transform="translate(550, 40)">
                        <rect x="0" y="0" width="120" height="40" rx="5" fill="#5B21B6" stroke="#8B5CF6" strokeWidth="1"/>
                        <text x="60" y="15" textAnchor="middle" className="text-sm font-bold fill-white">47</text>
                        <text x="60" y="30" textAnchor="middle" className="text-xs fill-purple-100">Entidades Extraídas</text>
                    </g>
                    
                    <g transform="translate(750, 40)">
                        <rect x="0" y="0" width="120" height="40" rx="5" fill="#DC2626" stroke="#EF4444" strokeWidth="1"/>
                        <text x="60" y="15" textAnchor="middle" className="text-sm font-bold fill-white">6</text>
                        <text x="60" y="30" textAnchor="middle" className="text-xs fill-red-100">Riesgos Detectados</text>
                    </g>
                </g>
                
                {/* Arrow marker definition */}
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                    </marker>
                </defs>
            </svg>
        </div>
    );
};
