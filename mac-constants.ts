export interface MacApproach {
    name: string;
    description: string;
    precision: string;
    ramUsage: string;
    speed: string;
    idealFor: string[];
    icon: string;
    color: string;
}

export interface PerformanceMetric {
    approach: string;
    contractsPerHour: string;
    ramUsed: string;
    precision: string;
    timePerContract: string;
    color: string;
}

export interface MacFeature {
    icon: string;
    title: string;
    description: string;
    details: string[];
}

export interface InstallationStep {
    step: number;
    title: string;
    description: string;
    command?: string;
    details: string[];
}

export const MAC_APPROACHES: MacApproach[] = [
    {
        name: "Pipeline Optimizado",
        description: "FinBERT + Llama 8B para máxima precisión con gestión inteligente de memoria.",
        precision: "95%",
        ramUsage: "8-12GB",
        speed: "150-300 contratos/hora",
        idealFor: ["Contratos críticos", "Análisis de alta precisión", "Decisiones importantes"],
        icon: "Zap",
        color: "blue"
    },
    {
        name: "Stack Ligero",
        description: "FinBERT + modelos especializados optimizados para eficiencia de memoria.",
        precision: "93%",
        ramUsage: "4-6GB",
        speed: "400-600 contratos/hora",
        idealFor: ["Análisis en lote", "Procesamiento masivo", "Memoria limitada"],
        icon: "Gauge",
        color: "green"
    },
    {
        name: "Enfoque Híbrido",
        description: "Análisis local con API externa opcional y anonimización automática.",
        precision: "91%",
        ramUsage: "3-4GB",
        speed: "800-1200 contratos/hora",
        idealFor: ["Máxima eficiencia", "Datos sensibles", "Memoria crítica"],
        icon: "Shield",
        color: "purple"
    }
];

export const PERFORMANCE_METRICS: PerformanceMetric[] = [
    {
        approach: "Pipeline Optimizado",
        contractsPerHour: "150-300",
        ramUsed: "8-12GB",
        precision: "95%",
        timePerContract: "12-24s",
        color: "blue"
    },
    {
        approach: "Stack Ligero",
        contractsPerHour: "400-600",
        ramUsed: "6-8GB",
        precision: "93%",
        timePerContract: "6-9s",
        color: "green"
    },
    {
        approach: "Solo FinBERT",
        contractsPerHour: "800-1200",
        ramUsed: "3-4GB",
        precision: "91%",
        timePerContract: "3-5s",
        color: "orange"
    }
];

export const MAC_FEATURES: MacFeature[] = [
    {
        icon: "MemoryStick",
        title: "Gestión Inteligente de Memoria",
        description: "Monitoreo en tiempo real y optimización automática para Mac con 18GB RAM.",
        details: [
            "Monitoreo en tiempo real del uso de RAM",
            "Limpieza automática entre análisis",
            "Fallbacks automáticos según memoria disponible",
            "Múltiples enfoques que se adaptan automáticamente"
        ]
    },
    {
        icon: "Cpu",
        title: "Optimización para Mac",
        description: "Aprovecha Metal Performance Shaders (MPS) y optimizaciones específicas de Apple Silicon.",
        details: [
            "MPS (Metal Performance Shaders) cuando disponible",
            "Float16 para reducir uso de memoria",
            "Low CPU memory usage activado por defecto",
            "Optimizado para Apple Silicon"
        ]
    },
    {
        icon: "Shield",
        title: "Seguridad y Privacidad",
        description: "Análisis local primero con anonimización automática para datos sensibles.",
        details: [
            "Datos nunca salen de tu Mac por defecto",
            "Anonimización automática antes de análisis externo",
            "Consentimiento explícito para APIs externas",
            "Patrones de anonimización para datos sensibles"
        ]
    },
    {
        icon: "Gauge",
        title: "Tres Enfoques Adaptativos",
        description: "Selección automática del mejor enfoque según memoria disponible y tipo de análisis.",
        details: [
            "Pipeline Optimizado para máxima precisión",
            "Stack Ligero para análisis en lote",
            "Enfoque Híbrido para eficiencia máxima",
            "Selección automática inteligente"
        ]
    },
    {
        icon: "FileText",
        title: "Análisis Completo",
        description: "Extracción de entidades, análisis de riesgo y sentimiento financiero.",
        details: [
            "Puntuación de riesgo (0.0 - 1.0)",
            "Extracción de entidades financieras",
            "Análisis de sentimiento especializado",
            "Clasificación automática de riesgos"
        ]
    },
    {
        icon: "Terminal",
        title: "Instalación Automática",
        description: "Setup completo con un solo comando, optimizado para Mac con 18GB RAM.",
        details: [
            "Instalación automática con setup_mac_18gb.sh",
            "Configuración de entorno virtual",
            "Descarga automática de modelos",
            "Verificación de sistema incluida"
        ]
    }
];

export const INSTALLATION_STEPS: InstallationStep[] = [
    {
        step: 1,
        title: "Instalación Automática",
        description: "Setup completo con un solo comando optimizado para Mac 18GB RAM.",
        command: "./setup_mac_18gb.sh",
        details: [
            "Clona el repositorio automáticamente",
            "Crea entorno virtual Python 3.11",
            "Instala todas las dependencias",
            "Descarga modelos necesarios"
        ]
    },
    {
        step: 2,
        title: "Verificación del Sistema",
        description: "Comprueba que tu Mac tiene los recursos necesarios y está configurado correctamente.",
        command: "python main.py --memory-check",
        details: [
            "Verifica memoria RAM disponible",
            "Comprueba instalación de modelos",
            "Valida configuración de entorno",
            "Muestra estado del sistema"
        ]
    },
    {
        step: 3,
        title: "Primer Análisis",
        description: "Ejecuta tu primer análisis de contrato para verificar que todo funciona correctamente.",
        command: "python demo_usage.py",
        details: [
            "Análisis de ejemplo incluido",
            "Muestra todas las funcionalidades",
            "Verifica rendimiento del sistema",
            "Genera reportes de ejemplo"
        ]
    },
    {
        step: 4,
        title: "Configuración Avanzada",
        description: "Personaliza la configuración según tus necesidades específicas.",
        command: "nano config_mac_18gb.py",
        details: [
            "Ajusta límites de memoria",
            "Configura tamaños de lote",
            "Define umbrales de riesgo",
            "Personaliza rutas de cache"
        ]
    }
];

export const SYSTEM_REQUIREMENTS = {
    minimum: {
        ram: "8GB",
        storage: "10GB",
        processor: "Apple Silicon M1 o Intel Core i5",
        os: "macOS 12.0+"
    },
    recommended: {
        ram: "18GB",
        storage: "20GB",
        processor: "Apple Silicon M2/M3",
        os: "macOS 13.0+"
    },
    optimal: {
        ram: "32GB+",
        storage: "50GB",
        processor: "Apple Silicon M2 Pro/Max",
        os: "macOS 14.0+"
    }
};

export const SECURITY_FEATURES = [
    {
        title: "Análisis Local Primero",
        description: "Todos los datos se procesan localmente en tu Mac, nunca salen de tu dispositivo.",
        icon: "Home"
    },
    {
        title: "Anonimización Automática",
        description: "Datos sensibles se anonimizan automáticamente antes de cualquier análisis externo.",
        icon: "EyeOff"
    },
    {
        title: "Consentimiento Explícito",
        description: "Se requiere consentimiento explícito para usar APIs externas opcionales.",
        icon: "CheckCircle"
    },
    {
        title: "Patrones de Protección",
        description: "Patrones específicos para proteger nombres, montos, fechas y datos financieros.",
        icon: "Shield"
    }
];

export const ANONYMIZATION_PATTERNS = [
    { original: "Nombres de empresas", anonymized: "[COMPANY]", example: "Apple Inc. → [COMPANY]" },
    { original: "Montos específicos", anonymized: "[AMOUNT]", example: "$50,000 → [AMOUNT]" },
    { original: "Fechas", anonymized: "[DATE]", example: "2024-01-15 → [DATE]" },
    { original: "Emails", anonymized: "[EMAIL]", example: "john@company.com → [EMAIL]" },
    { original: "Números de cuenta", anonymized: "[ACCOUNT_NUMBER]", example: "1234567890 → [ACCOUNT_NUMBER]" }
];

export interface PracticalFeature {
    icon: string;
    title: string;
    description: string;
    benefit: string;
    example: string;
}

export interface UseCase {
    scenario: string;
    problem: string;
    solution: string;
    result: string;
    icon: string;
}

export const PRACTICAL_FEATURES: PracticalFeature[] = [
    {
        icon: "FileText",
        title: "Análisis Instantáneo",
        description: "Sube cualquier contrato PDF, DOCX o TXT y obtén análisis completo en segundos.",
        benefit: "Ahorra horas de revisión manual",
        example: "Contrato de 50 páginas analizado en 2.3 segundos"
    },
    {
        icon: "Shield",
        title: "Detección de Riesgos",
        description: "Identifica automáticamente cláusulas problemáticas, tasas excesivas y términos desfavorables.",
        benefit: "Protege tu empresa de riesgos ocultos",
        example: "Detecta 6 riesgos críticos en un préstamo empresarial"
    },
    {
        icon: "TrendingUp",
        title: "Comparación de Términos",
        description: "Compara múltiples contratos lado a lado para encontrar las mejores condiciones.",
        benefit: "Toma decisiones más informadas",
        example: "Compara 5 ofertas de seguros en segundos"
    },
    {
        icon: "Clock",
        title: "Alertas de Vencimiento",
        description: "Recibe notificaciones automáticas antes de que venzan contratos importantes.",
        benefit: "Nunca pierdas fechas críticas",
        example: "Recordatorio 30 días antes del vencimiento"
    },
    {
        icon: "Users",
        title: "Análisis Colaborativo",
        description: "Comparte análisis con tu equipo y obtén comentarios en tiempo real.",
        benefit: "Mejora la colaboración del equipo",
        example: "5 analistas revisando el mismo contrato simultáneamente"
    },
    {
        icon: "BarChart3",
        title: "Reportes Ejecutivos",
        description: "Genera reportes profesionales listos para presentar a directivos.",
        benefit: "Comunica hallazgos de manera clara",
        example: "Dashboard ejecutivo con métricas clave"
    }
];

export const USE_CASES: UseCase[] = [
    {
        scenario: "Banco Comercial",
        problem: "Revisar 200 contratos de préstamos mensualmente",
        solution: "Análisis automático en lote con detección de riesgos",
        result: "Reducción del 80% en tiempo de revisión",
        icon: "Building"
    },
    {
        scenario: "Empresa de Seguros",
        problem: "Validar pólizas contra regulaciones cambiantes",
        solution: "Análisis de compliance automático",
        result: "100% de cumplimiento regulatorio",
        icon: "Shield"
    },
    {
        scenario: "Departamento Legal",
        problem: "Revisar contratos de proveedores rápidamente",
        solution: "Análisis instantáneo con alertas de riesgo",
        result: "Decisiones 10x más rápidas",
        icon: "Scale"
    },
    {
        scenario: "Auditoría Interna",
        problem: "Identificar contratos con términos desfavorables",
        solution: "Detección automática de patrones problemáticos",
        result: "Identificación de $2M en ahorros potenciales",
        icon: "Search"
    }
];

export const CONTRACT_TYPES_SUPPORTED = [
    { type: "Préstamos Bancarios", examples: "Créditos, hipotecas, líneas de crédito" },
    { type: "Seguros", examples: "Vida, salud, automóvil, empresarial" },
    { type: "Servicios Financieros", examples: "Tarjetas de crédito, inversiones" },
    { type: "Contratos Empresariales", examples: "Proveedores, distribución, licencias" },
    { type: "Leasing", examples: "Equipos, vehículos, inmuebles" },
    { type: "Derivados Financieros", examples: "Swaps, opciones, futuros" }
];
