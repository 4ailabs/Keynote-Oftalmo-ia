import React from 'react';

export const SystemArchitectureDiagram: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto p-8 bg-zinc-900/50 border border-zinc-700 rounded-2xl">
            <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">Arquitectura del Sistema</h3>
            
            <svg viewBox="0 0 1200 800" className="w-full h-auto">
                {/* Background grid */}
                <defs>
                    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#374151" strokeWidth="1" opacity="0.3"/>
                    </pattern>
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
                </defs>
                
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Title */}
                <text x="600" y="40" textAnchor="middle" className="text-2xl font-bold fill-zinc-100">
                    Sistema de Análisis de Contratos Financieros
                </text>
                
                {/* Input Contract */}
                <g transform="translate(50, 100)">
                    <rect x="0" y="0" width="200" height="120" rx="15" fill="#1F2937" stroke="#6B7280" strokeWidth="2"/>
                    <text x="100" y="40" textAnchor="middle" className="text-lg font-semibold fill-zinc-100">
                        Contrato Financiero
                    </text>
                    <text x="100" y="65" textAnchor="middle" className="text-sm fill-zinc-300">
                        PDF, DOCX, TXT
                    </text>
                    <text x="100" y="85" textAnchor="middle" className="text-sm fill-zinc-300">
                        Texto del contrato
                    </text>
                </g>
                
                {/* Arrow to processing */}
                <path d="M 300 160 L 400 160" stroke="#6B7280" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
                
                {/* Processing Layer */}
                <g transform="translate(450, 80)">
                    <rect x="0" y="0" width="300" height="200" rx="15" fill="#111827" stroke="#374151" strokeWidth="2" strokeDasharray="5,5"/>
                    <text x="150" y="30" textAnchor="middle" className="text-xl font-bold fill-zinc-100">
                        Procesamiento Paralelo
                    </text>
                    
                    {/* Claude SDK */}
                    <g transform="translate(20, 60)">
                        <rect x="0" y="0" width="80" height="60" rx="10" fill="url(#claudeGradient)"/>
                        <text x="40" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">
                            Claude SDK
                        </text>
                        <text x="40" y="40" textAnchor="middle" className="text-xs fill-white">
                            Análisis Semántico
                        </text>
                    </g>
                    
                    {/* FinBERT */}
                    <g transform="translate(110, 60)">
                        <rect x="0" y="0" width="80" height="60" rx="10" fill="url(#finbertGradient)"/>
                        <text x="40" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">
                            FinBERT
                        </text>
                        <text x="40" y="40" textAnchor="middle" className="text-xs fill-white">
                            Sentimiento
                        </text>
                    </g>
                    
                    {/* GraphRAG */}
                    <g transform="translate(200, 60)">
                        <rect x="0" y="0" width="80" height="60" rx="10" fill="url(#graphragGradient)"/>
                        <text x="40" y="25" textAnchor="middle" className="text-sm font-semibold fill-white">
                            GraphRAG
                        </text>
                        <text x="40" y="40" textAnchor="middle" className="text-xs fill-white">
                            Grafos
                        </text>
                    </g>
                </g>
                
                {/* Arrows from processing */}
                <path d="M 750 180 L 850 180" stroke="#6B7280" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
                
                {/* Integration Layer */}
                <g transform="translate(900, 100)">
                    <rect x="0" y="0" width="200" height="120" rx="15" fill="#7C2D12" stroke="#EA580C" strokeWidth="2"/>
                    <text x="100" y="30" textAnchor="middle" className="text-lg font-semibold fill-white">
                        Integración
                    </text>
                    <text x="100" y="55" textAnchor="middle" className="text-sm fill-orange-100">
                        Síntesis de Resultados
                    </text>
                    <text x="100" y="75" textAnchor="middle" className="text-sm fill-orange-100">
                        Análisis Combinado
                    </text>
                    <text x="100" y="95" textAnchor="middle" className="text-sm fill-orange-100">
                        Validación Cruzada
                    </text>
                </g>
                
                {/* Output Layer */}
                <g transform="translate(100, 400)">
                    <text x="550" y="30" textAnchor="middle" className="text-xl font-bold fill-zinc-100">
                        Reportes y Análisis
                    </text>
                    
                    {/* Risk Analysis */}
                    <g transform="translate(50, 60)">
                        <rect x="0" y="0" width="180" height="100" rx="10" fill="#991B1B" stroke="#DC2626" strokeWidth="2"/>
                        <text x="90" y="30" textAnchor="middle" className="text-lg font-semibold fill-white">
                            Análisis de Riesgos
                        </text>
                        <text x="90" y="50" textAnchor="middle" className="text-sm fill-red-100">
                            • Crítico: 1
                        </text>
                        <text x="90" y="70" textAnchor="middle" className="text-sm fill-red-100">
                            • Alto: 2
                        </text>
                        <text x="90" y="85" textAnchor="middle" className="text-sm fill-red-100">
                            • Medio: 3
                        </text>
                    </g>
                    
                    {/* Reports */}
                    <g transform="translate(280, 60)">
                        <rect x="0" y="0" width="180" height="100" rx="10" fill="#1E40AF" stroke="#2563EB" strokeWidth="2"/>
                        <text x="90" y="30" textAnchor="middle" className="text-lg font-semibold fill-white">
                            Reportes
                        </text>
                        <text x="90" y="50" textAnchor="middle" className="text-sm fill-blue-100">
                            • Markdown
                        </text>
                        <text x="90" y="70" textAnchor="middle" className="text-sm fill-blue-100">
                            • JSON
                        </text>
                        <text x="90" y="85" textAnchor="middle" className="text-sm fill-blue-100">
                            • Texto
                        </text>
                    </g>
                    
                    {/* Knowledge Graph */}
                    <g transform="translate(510, 60)">
                        <rect x="0" y="0" width="180" height="100" rx="10" fill="#7C3AED" stroke="#8B5CF6" strokeWidth="2"/>
                        <text x="90" y="30" textAnchor="middle" className="text-lg font-semibold fill-white">
                            Grafo de Conocimiento
                        </text>
                        <text x="90" y="50" textAnchor="middle" className="text-sm fill-purple-100">
                            • 47 Entidades
                        </text>
                        <text x="90" y="70" textAnchor="middle" className="text-sm fill-purple-100">
                            • Relaciones
                        </text>
                        <text x="90" y="85" textAnchor="middle" className="text-sm fill-purple-100">
                            • Visualización
                        </text>
                    </g>
                    
                    {/* Recommendations */}
                    <g transform="translate(740, 60)">
                        <rect x="0" y="0" width="180" height="100" rx="10" fill="#059669" stroke="#10B981" strokeWidth="2"/>
                        <text x="90" y="30" textAnchor="middle" className="text-lg font-semibold fill-white">
                            Recomendaciones
                        </text>
                        <text x="90" y="50" textAnchor="middle" className="text-sm fill-green-100">
                            • Accionables
                        </text>
                        <text x="90" y="70" textAnchor="middle" className="text-sm fill-green-100">
                            • Mitigación
                        </text>
                        <text x="90" y="85" textAnchor="middle" className="text-sm fill-green-100">
                            • Optimización
                        </text>
                    </g>
                </g>
                
                {/* Arrow marker */}
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                    </marker>
                </defs>
                
                {/* Flow arrows */}
                <path d="M 550 220 L 550 360" stroke="#6B7280" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
                
                {/* Performance indicators */}
                <g transform="translate(50, 600)">
                    <text x="550" y="20" textAnchor="middle" className="text-lg font-bold fill-zinc-100">
                        Métricas de Rendimiento
                    </text>
                    
                    <g transform="translate(100, 40)">
                        <rect x="0" y="0" width="120" height="60" rx="8" fill="#1F2937" stroke="#6B7280" strokeWidth="1"/>
                        <text x="60" y="25" textAnchor="middle" className="text-2xl font-bold fill-green-400">2.3s</text>
                        <text x="60" y="45" textAnchor="middle" className="text-sm fill-zinc-300">Tiempo de Análisis</text>
                    </g>
                    
                    <g transform="translate(300, 40)">
                        <rect x="0" y="0" width="120" height="60" rx="8" fill="#1F2937" stroke="#6B7280" strokeWidth="1"/>
                        <text x="60" y="25" textAnchor="middle" className="text-2xl font-bold fill-blue-400">95%</text>
                        <text x="60" y="45" textAnchor="middle" className="text-sm fill-zinc-300">Precisión</text>
                    </g>
                    
                    <g transform="translate(500, 40)">
                        <rect x="0" y="0" width="120" height="60" rx="8" fill="#1F2937" stroke="#6B7280" strokeWidth="1"/>
                        <text x="60" y="25" textAnchor="middle" className="text-2xl font-bold fill-purple-400">47</text>
                        <text x="60" y="45" textAnchor="middle" className="text-sm fill-zinc-300">Entidades Extraídas</text>
                    </g>
                    
                    <g transform="translate(700, 40)">
                        <rect x="0" y="0" width="120" height="60" rx="8" fill="#1F2937" stroke="#6B7280" strokeWidth="1"/>
                        <text x="60" y="25" textAnchor="middle" className="text-2xl font-bold fill-orange-400">6</text>
                        <text x="60" y="45" textAnchor="middle" className="text-sm fill-zinc-300">Riesgos Identificados</text>
                    </g>
                </g>
            </svg>
        </div>
    );
};
