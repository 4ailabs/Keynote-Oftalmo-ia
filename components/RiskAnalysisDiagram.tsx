import React from 'react';

export const RiskAnalysisDiagram: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto p-8 bg-zinc-900/50 border border-zinc-700 rounded-2xl">
            <h3 className="text-2xl font-bold text-zinc-100 mb-8 text-center">Análisis de Riesgos por Categorías</h3>
            
            <svg viewBox="0 0 1200 800" className="w-full h-auto">
                <defs>
                    <linearGradient id="criticalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EF4444" />
                        <stop offset="100%" stopColor="#DC2626" />
                    </linearGradient>
                    <linearGradient id="highGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient id="mediumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EAB308" />
                        <stop offset="100%" stopColor="#CA8A04" />
                    </linearGradient>
                    <linearGradient id="lowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                    <linearGradient id="financialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                    <linearGradient id="legalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#5B21B6" />
                    </linearGradient>
                    <linearGradient id="operationalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor="#DB2777" />
                    </linearGradient>
                    <linearGradient id="complianceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#0891B2" />
                    </linearGradient>
                </defs>
                
                {/* Central Contract */}
                <g transform="translate(500, 300)">
                    <circle cx="0" cy="0" r="80" fill="#1F2937" stroke="#6B7280" strokeWidth="3"/>
                    <text x="0" y="-10" textAnchor="middle" className="text-lg font-bold fill-zinc-100">Contrato</text>
                    <text x="0" y="10" textAnchor="middle" className="text-lg font-bold fill-zinc-100">Financiero</text>
                    <text x="0" y="30" textAnchor="middle" className="text-sm fill-zinc-300">Análisis</text>
                    <text x="0" y="45" textAnchor="middle" className="text-sm fill-zinc-300">Multidimensional</text>
                </g>
                
                {/* Risk Categories */}
                
                {/* Financial Risks */}
                <g transform="translate(100, 100)">
                    <rect x="0" y="0" width="200" height="140" rx="15" fill="url(#financialGradient)" stroke="#1E40AF" strokeWidth="2"/>
                    <text x="100" y="25" textAnchor="middle" className="text-lg font-bold fill-white">Riesgos Financieros</text>
                    <text x="100" y="50" textAnchor="middle" className="text-sm fill-blue-100">• Tasas excesivas</text>
                    <text x="100" y="70" textAnchor="middle" className="text-sm fill-blue-100">• Comisiones ocultas</text>
                    <text x="100" y="90" textAnchor="middle" className="text-sm fill-blue-100">• Penalizaciones</text>
                    <text x="100" y="110" textAnchor="middle" className="text-sm fill-blue-100">• Cargos prepago</text>
                    
                    {/* Risk level indicators */}
                    <circle cx="20" cy="20" r="12" fill="#EF4444"/>
                    <text x="20" y="26" textAnchor="middle" className="text-xs font-bold fill-white">C</text>
                    
                    <circle cx="180" cy="20" r="12" fill="#F59E0B"/>
                    <text x="180" y="26" textAnchor="middle" className="text-xs font-bold fill-white">A</text>
                </g>
                
                {/* Legal Risks */}
                <g transform="translate(900, 100)">
                    <rect x="0" y="0" width="200" height="140" rx="15" fill="url(#legalGradient)" stroke="#5B21B6" strokeWidth="2"/>
                    <text x="100" y="25" textAnchor="middle" className="text-lg font-bold fill-white">Riesgos Legales</text>
                    <text x="100" y="50" textAnchor="middle" className="text-sm fill-purple-100">• Cláusulas abusivas</text>
                    <text x="100" y="70" textAnchor="middle" className="text-sm fill-purple-100">• Desequilibrio</text>
                    <text x="100" y="90" textAnchor="middle" className="text-sm fill-purple-100">• Jurisdicción</text>
                    <text x="100" y="110" textAnchor="middle" className="text-sm fill-purple-100">• Renuncia derechos</text>
                    
                    <circle cx="20" cy="20" r="12" fill="#F59E0B"/>
                    <text x="20" y="26" textAnchor="middle" className="text-xs font-bold fill-white">A</text>
                    
                    <circle cx="180" cy="20" r="12" fill="#EAB308"/>
                    <text x="180" y="26" textAnchor="middle" className="text-xs font-bold fill-white">M</text>
                </g>
                
                {/* Operational Risks */}
                <g transform="translate(100, 500)">
                    <rect x="0" y="0" width="200" height="140" rx="15" fill="url(#operationalGradient)" stroke="#DB2777" strokeWidth="2"/>
                    <text x="100" y="25" textAnchor="middle" className="text-lg font-bold fill-white">Riesgos Operacionales</text>
                    <text x="100" y="50" textAnchor="middle" className="text-sm fill-pink-100">• Garantías desproporcionadas</text>
                    <text x="100" y="70" textAnchor="middle" className="text-sm fill-pink-100">• Condiciones ambiguas</text>
                    <text x="100" y="90" textAnchor="middle" className="text-sm fill-pink-100">• Modificaciones unilaterales</text>
                    <text x="100" y="110" textAnchor="middle" className="text-sm fill-pink-100">• Falta claridad</text>
                    
                    <circle cx="20" cy="20" r="12" fill="#EAB308"/>
                    <text x="20" y="26" textAnchor="middle" className="text-xs font-bold fill-white">M</text>
                    
                    <circle cx="180" cy="20" r="12" fill="#10B981"/>
                    <text x="180" y="26" textAnchor="middle" className="text-xs font-bold fill-white">B</text>
                </g>
                
                {/* Compliance Risks */}
                <g transform="translate(900, 500)">
                    <rect x="0" y="0" width="200" height="140" rx="15" fill="url(#complianceGradient)" stroke="#0891B2" strokeWidth="2"/>
                    <text x="100" y="25" textAnchor="middle" className="text-lg font-bold fill-white">Riesgos Compliance</text>
                    <text x="100" y="50" textAnchor="middle" className="text-sm fill-cyan-100">• Protección consumidor</text>
                    <text x="100" y="70" textAnchor="middle" className="text-sm fill-cyan-100">• Límites tasas</text>
                    <text x="100" y="90" textAnchor="middle" className="text-sm fill-cyan-100">• Transparencia costos</text>
                    <text x="100" y="110" textAnchor="middle" className="text-sm fill-cyan-100">• Regulaciones sectoriales</text>
                    
                    <circle cx="20" cy="20" r="12" fill="#EF4444"/>
                    <text x="20" y="26" textAnchor="middle" className="text-xs font-bold fill-white">C</text>
                    
                    <circle cx="180" cy="20" r="12" fill="#10B981"/>
                    <text x="180" y="26" textAnchor="middle" className="text-xs font-bold fill-white">B</text>
                </g>
                
                {/* Risk Severity Legend */}
                <g transform="translate(400, 50)">
                    <text x="200" y="20" textAnchor="middle" className="text-lg font-bold fill-zinc-100">Niveles de Severidad</text>
                    
                    <g transform="translate(0, 40)">
                        <circle cx="20" cy="10" r="12" fill="#EF4444"/>
                        <text x="20" y="16" textAnchor="middle" className="text-xs font-bold fill-white">C</text>
                        <text x="50" y="16" className="text-sm fill-zinc-300">Crítico - Atención inmediata</text>
                    </g>
                    
                    <g transform="translate(0, 70)">
                        <circle cx="20" cy="10" r="12" fill="#F59E0B"/>
                        <text x="20" y="16" textAnchor="middle" className="text-xs font-bold fill-white">A</text>
                        <text x="50" y="16" className="text-sm fill-zinc-300">Alto - Impacto significativo</text>
                    </g>
                    
                    <g transform="translate(0, 100)">
                        <circle cx="20" cy="10" r="12" fill="#EAB308"/>
                        <text x="20" y="16" textAnchor="middle" className="text-xs font-bold fill-white">M</text>
                        <text x="50" y="16" className="text-sm fill-zinc-300">Medio - Moderado impacto</text>
                    </g>
                    
                    <g transform="translate(0, 130)">
                        <circle cx="20" cy="10" r="12" fill="#10B981"/>
                        <text x="20" y="16" textAnchor="middle" className="text-xs font-bold fill-white">B</text>
                        <text x="50" y="16" className="text-sm fill-zinc-300">Bajo - Impacto mínimo</text>
                    </g>
                </g>
                
                {/* Risk Flow Connections */}
                <g stroke="#6B7280" strokeWidth="2" fill="none">
                    {/* Financial to Contract */}
                    <path d="M 200 170 L 470 340" strokeDasharray="5,5"/>
                    {/* Legal to Contract */}
                    <path d="M 900 170 L 570 340" strokeDasharray="5,5"/>
                    {/* Operational to Contract */}
                    <path d="M 200 500 L 470 380" strokeDasharray="5,5"/>
                    {/* Compliance to Contract */}
                    <path d="M 900 500 L 570 380" strokeDasharray="5,5"/>
                </g>
                
                {/* Risk Detection Process */}
                <g transform="translate(50, 700)">
                    <text x="550" y="20" textAnchor="middle" className="text-lg font-bold fill-zinc-100">Proceso de Detección de Riesgos</text>
                    
                    <g transform="translate(100, 40)">
                        <rect x="0" y="0" width="120" height="60" rx="8" fill="#1F2937" stroke="#6B7280" strokeWidth="1"/>
                        <text x="60" y="25" textAnchor="middle" className="text-sm font-semibold fill-zinc-100">Análisis</text>
                        <text x="60" y="40" textAnchor="middle" className="text-sm font-semibold fill-zinc-100">Semántico</text>
                    </g>
                    
                    <g transform="translate(280, 40)">
                        <rect x="0" y="0" width="120" height="60" rx="8" fill="#1F2937" stroke="#6B7280" strokeWidth="1"/>
                        <text x="60" y="25" textAnchor="middle" className="text-sm font-semibold fill-zinc-100">Detección</text>
                        <text x="60" y="40" textAnchor="middle" className="text-sm font-semibold fill-zinc-100">Patrones</text>
                    </g>
                    
                    <g transform="translate(460, 40)">
                        <rect x="0" y="0" width="120" height="60" rx="8" fill="#1F2937" stroke="#6B7280" strokeWidth="1"/>
                        <text x="60" y="25" textAnchor="middle" className="text-sm font-semibold fill-zinc-100">Clasificación</text>
                        <text x="60" y="40" textAnchor="middle" className="text-sm font-semibold fill-zinc-100">Severidad</text>
                    </g>
                    
                    <g transform="translate(640, 40)">
                        <rect x="0" y="0" width="120" height="60" rx="8" fill="#1F2937" stroke="#6B7280" strokeWidth="1"/>
                        <text x="60" y="25" textAnchor="middle" className="text-sm font-semibold fill-zinc-100">Generación</text>
                        <text x="60" y="40" textAnchor="middle" className="text-sm font-semibold fill-zinc-100">Recomendaciones</text>
                    </g>
                    
                    {/* Flow arrows */}
                    <path d="M 220 70 L 270 70" stroke="#6B7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                    <path d="M 400 70 L 450 70" stroke="#6B7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
                    <path d="M 580 70 L 630 70" stroke="#6B7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
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
