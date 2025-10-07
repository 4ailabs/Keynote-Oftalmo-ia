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
        name: "Ollama Local + FinBERT",
        description: "Análisis completo usando Ollama con modelos locales y FinBERT para detección de riesgos financieros.",
        precision: "95%",
        ramUsage: "8-12GB",
        speed: "Rápido",
        idealFor: ["Análisis completo", "Máxima precisión", "Privacidad total"],
        icon: "Zap",
        color: "blue"
    },
    {
        name: "Solo FinBERT",
        description: "Análisis enfocado en riesgos financieros usando únicamente FinBERT optimizado.",
        precision: "90%",
        ramUsage: "4-6GB",
        speed: "400-600 contratos/hora",
        idealFor: ["Análisis en lote", "Procesamiento masivo", "Memoria limitada"],
        icon: "Gauge",
        color: "green"
    },
    {
        name: "Modo Rápido",
        description: "Análisis básico con FinBERT para detección rápida de riesgos principales.",
        precision: "88%",
        ramUsage: "2-4GB",
        speed: "Muy rápido",
        idealFor: ["Análisis rápido", "Pocos recursos", "Revisión inicial"],
        icon: "Shield",
        color: "purple"
    }
];

export const PERFORMANCE_METRICS: PerformanceMetric[] = [
    {
        approach: "Ollama + FinBERT",
        contractsPerHour: "Rápido",
        ramUsed: "8-12GB",
        precision: "95%",
        timePerContract: "12-24s",
        color: "blue"
    },
    {
        approach: "Solo FinBERT",
        contractsPerHour: "Muy rápido",
        ramUsed: "4-6GB",
        precision: "90%",
        timePerContract: "5-8s",
        color: "green"
    },
    {
        approach: "Modo Rápido",
        contractsPerHour: "Ultra rápido",
        ramUsed: "2-4GB",
        precision: "88%",
        timePerContract: "2-3s",
        color: "purple"
    }
];

export const MAC_FEATURES: MacFeature[] = [
    {
        icon: "Cpu",
        title: "Ollama Local",
        description: "Modelos de IA ejecutándose completamente en tu Mac, sin conexión a internet.",
        details: [
            "Modelos Llama ejecutándose localmente",
            "Sin dependencia de internet",
            "Datos nunca salen de tu Mac",
            "Optimizado para Apple Silicon"
        ]
    },
    {
        icon: "Shield",
        title: "FinBERT Especializado",
        description: "Modelo especializado en análisis financiero para detectar riesgos específicos.",
        details: [
            "Entrenado específicamente para finanzas",
            "Detección de riesgos financieros",
            "Análisis de sentimiento en contexto financiero",
            "Extracción de entidades financieras"
        ]
    },
    {
        icon: "MemoryStick",
        title: "Gestión de Memoria",
        description: "Optimización automática para aprovechar al máximo tus 18GB de RAM.",
        details: [
            "Monitoreo en tiempo real de RAM",
            "Tres modos según memoria disponible",
            "Limpieza automática entre análisis",
            "Adaptación automática al hardware"
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
        title: "Análisis con Ollama",
        description: "Sube contratos y Ollama los analiza localmente usando modelos Llama.",
        benefit: "Análisis completo sin internet",
        example: "Llama 8B procesando contratos en tu Mac"
    },
    {
        icon: "Shield",
        title: "Detección con FinBERT",
        description: "FinBERT identifica riesgos financieros específicos en contratos.",
        benefit: "Detección especializada en finanzas",
        example: "FinBERT detectando cláusulas riesgosas"
    },
    {
        icon: "Cpu",
        title: "Tres Modos de Análisis",
        description: "Modo completo (Ollama+FinBERT), solo FinBERT, o modo rápido.",
        benefit: "Se adapta a tu memoria disponible",
        example: "Cambio automático según RAM disponible"
    },
    {
        icon: "Home",
        title: "Todo Local",
        description: "Ningún dato sale de tu Mac, análisis completamente privado.",
        benefit: "Máxima privacidad y seguridad",
        example: "Contratos sensibles analizados localmente"
    }
];

export const USE_CASES: UseCase[] = [
    {
        scenario: "Análisis Local",
        problem: "Necesitas analizar contratos sin enviar datos a internet",
        solution: "Ollama + FinBERT ejecutándose en tu Mac",
        result: "Análisis completo y privado",
        icon: "Home"
    },
    {
        scenario: "Detección Rápida",
        problem: "Identificar riesgos financieros en contratos",
        solution: "FinBERT especializado en análisis financiero",
        result: "Detección precisa de riesgos",
        icon: "Shield"
    },
    {
        scenario: "Adaptación Automática",
        problem: "Diferentes contratos requieren diferentes niveles de análisis",
        solution: "Tres modos que se adaptan automáticamente",
        result: "Óptimo uso de memoria y velocidad",
        icon: "Cpu"
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
