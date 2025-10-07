export interface ContractRisk {
    severity: 'CRÍTICO' | 'ALTO' | 'MEDIO' | 'BAJO';
    category: 'FINANCIERO' | 'LEGAL' | 'OPERACIONAL' | 'COMPLIANCE';
    description: string;
    clause?: string;
    recommendation: string;
}

export interface ContractFeature {
    icon: string;
    title: string;
    description: string;
    details: string[];
}

export interface TechnologyComponent {
    name: string;
    description: string;
    capabilities: string[];
    icon: string;
}

export interface WorkflowStep {
    id: number;
    title: string;
    description: string;
    details: string[];
    icon: string;
}

export const CONTRACT_FEATURES: ContractFeature[] = [
    {
        icon: 'Shield',
        title: 'Análisis Completo de Contratos',
        description: 'Identificación automática de riesgos financieros, legales y operacionales con clasificación por severidad.',
        details: [
            'Extracción de términos clave (montos, plazos, tasas)',
            'Análisis de sentimiento financiero con FinBERT',
            'Clasificación de riesgos por severidad',
            'Detección de cláusulas abusivas'
        ]
    },
    {
        icon: 'Search',
        title: 'Auditoría Especializada',
        description: 'Detección de cláusulas desequilibradas y problemas de cumplimiento regulatorio.',
        details: [
            'Identificación de comisiones ocultas',
            'Evaluación de garantías y colaterales',
            'Score de favorabilidad de cláusulas (0-100%)',
            'Análisis de cumplimiento regulatorio'
        ]
    },
    {
        icon: 'Network',
        title: 'GraphRAG - Knowledge Graph',
        description: 'Construcción de grafos de conocimiento para análisis estructural y relacional.',
        details: [
            'Extracción automática de entidades y relaciones',
            'Detección de dependencias circulares',
            'Consultas en lenguaje natural sobre la estructura',
            'Visualización interactiva del grafo'
        ]
    },
    {
        icon: 'FileText',
        title: 'Reportes Profesionales',
        description: 'Generación de reportes en múltiples formatos con recomendaciones accionables.',
        details: [
            'Reportes en Markdown, JSON y texto',
            'Recomendaciones de mitigación de riesgos',
            'Comparación con estándares de industria',
            'Auditoría detallada de cláusulas específicas'
        ]
    },
    {
        icon: 'GitCompare',
        title: 'Comparación de Contratos',
        description: 'Análisis comparativo entre versiones de contratos para identificar cambios.',
        details: [
            'Identificación de diferencias principales',
            'Cambios en el perfil de riesgo',
            'Impacto de las modificaciones',
            'Recomendación sobre versión más favorable'
        ]
    },
    {
        icon: 'Brain',
        title: 'Análisis de Sentimiento Financiero',
        description: 'Evaluación cuantitativa del sentimiento de cláusulas usando FinBERT.',
        details: [
            'Clasificación automática (positive/negative/neutral)',
            'Detección de keywords de riesgo',
            'Scoring de favorabilidad numérico',
            'Comparación con estándares de industria'
        ]
    }
];

export const TECHNOLOGY_COMPONENTS: TechnologyComponent[] = [
    {
        name: 'Claude SDK',
        description: 'Análisis de lenguaje natural profundo y contextual para interpretación legal de cláusulas complejas.',
        capabilities: [
            'Interpretación legal avanzada',
            'Generación de recomendaciones accionables',
            'Análisis contextual profundo',
            'Modelo: claude-sonnet-4-20250514'
        ],
        icon: 'Bot'
    },
    {
        name: 'FinBERT',
        description: 'Modelo especializado en análisis de sentimiento para textos financieros con clasificación automática.',
        capabilities: [
            'Análisis de sentimiento especializado',
            'Clasificación automática de cláusulas',
            'Detección de keywords de riesgo',
            'Scoring de favorabilidad (0-100%)'
        ],
        icon: 'TrendingUp'
    },
    {
        name: 'GraphRAG',
        description: 'Sistema de grafos de conocimiento para análisis estructural y relacional de contratos.',
        capabilities: [
            'Extracción automática de entidades',
            'Construcción de grafos con NetworkX',
            'Consultas en lenguaje natural',
            'Detección de dependencias circulares'
        ],
        icon: 'Network'
    }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
    {
        id: 1,
        title: 'Carga de Documento',
        description: 'Extracción automática de texto desde PDF, DOCX o texto plano.',
        details: [
            'Soporte para múltiples formatos',
            'Extracción de metadata del documento',
            'Validación de contenido',
            'Preparación para análisis'
        ],
        icon: 'Upload'
    },
    {
        id: 2,
        title: 'Análisis con Claude',
        description: 'Procesamiento del contrato usando Claude SDK para análisis semántico profundo.',
        details: [
            'Identificación de términos clave',
            'Análisis de estructura contractual',
            'Detección de riesgos legales',
            'Generación de recomendaciones'
        ],
        icon: 'Brain'
    },
    {
        id: 3,
        title: 'Análisis FinBERT',
        description: 'Evaluación del sentimiento financiero y detección de palabras clave de riesgo.',
        details: [
            'Clasificación de sentimiento por cláusula',
            'Detección de términos de riesgo',
            'Cálculo de scores de favorabilidad',
            'Comparación con estándares'
        ],
        icon: 'BarChart3'
    },
    {
        id: 4,
        title: 'Construcción GraphRAG',
        description: 'Creación del grafo de conocimiento para análisis estructural y relacional.',
        details: [
            'Extracción de entidades y relaciones',
            'Construcción del grafo de conocimiento',
            'Identificación de dependencias',
            'Preparación para consultas'
        ],
        icon: 'Network'
    },
    {
        id: 5,
        title: 'Síntesis y Reporte',
        description: 'Generación del reporte final combinando todos los análisis.',
        details: [
            'Integración de resultados',
            'Generación de reportes en múltiples formatos',
            'Recomendaciones consolidadas',
            'Visualización del grafo'
        ],
        icon: 'FileText'
    }
];

export const RISK_CATEGORIES = {
    FINANCIERO: {
        title: 'Riesgos Financieros',
        description: 'Identificación de términos financieros desfavorables y costos ocultos.',
        examples: [
            'Tasas de interés excesivas',
            'Comisiones ocultas o no justificadas',
            'Penalizaciones desproporcionadas',
            'Cargos por prepago abusivos'
        ]
    },
    LEGAL: {
        title: 'Riesgos Legales',
        description: 'Detección de cláusulas abusivas y desequilibrios contractuales.',
        examples: [
            'Cláusulas abusivas o leoninas',
            'Desequilibrio contractual',
            'Jurisdicción exclusiva desfavorable',
            'Renuncia de derechos'
        ]
    },
    OPERACIONAL: {
        title: 'Riesgos Operacionales',
        description: 'Identificación de problemas en la ejecución y cumplimiento del contrato.',
        examples: [
            'Garantías desproporcionadas',
            'Condiciones de incumplimiento ambiguas',
            'Modificaciones unilaterales',
            'Falta de claridad en obligaciones'
        ]
    },
    COMPLIANCE: {
        title: 'Riesgos de Cumplimiento',
        description: 'Detección de violaciones a normativas y regulaciones aplicables.',
        examples: [
            'Incumplimiento de normativa de protección al consumidor',
            'Violación de límites de tasas de interés',
            'Falta de transparencia en costos',
            'No conformidad con regulaciones sectoriales'
        ]
    }
};

export const SUPPORTED_CONTRACT_TYPES = [
    'Contratos de préstamo personal y empresarial',
    'Contratos de inversión',
    'Contratos de arrendamiento financiero (leasing)',
    'Contratos de crédito hipotecario',
    'Acuerdos de financiamiento',
    'Contratos de servicios financieros'
];
