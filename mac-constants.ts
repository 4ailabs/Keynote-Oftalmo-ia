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
