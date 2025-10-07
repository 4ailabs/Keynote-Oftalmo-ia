# Agente de Análisis de Contratos Financieros

Una nueva aplicación web que presenta el **Agente de Análisis de Contratos Financieros**, un sistema de inteligencia artificial especializado en auditoría y análisis de contratos financieros.

## 🚀 Características Principales

### Tecnologías Integradas
- **Claude SDK** - Análisis de lenguaje natural profundo y contextual
- **FinBERT** - Análisis de sentimiento especializado en textos financieros  
- **GraphRAG** - Construcción de grafos de conocimiento para análisis estructural

### Funcionalidades Clave
- ✅ **Análisis Completo de Contratos** - Identificación automática de riesgos financieros, legales y operacionales
- ✅ **Auditoría Especializada** - Detección de cláusulas abusivas y problemas de cumplimiento
- ✅ **GraphRAG - Knowledge Graph** - Extracción automática de entidades y relaciones
- ✅ **Reportes Profesionales** - Generación en múltiples formatos (Markdown, JSON, texto)
- ✅ **Comparación de Contratos** - Análisis comparativo entre versiones
- ✅ **Análisis de Sentimiento Financiero** - Evaluación cuantitativa con FinBERT

## 📋 Estructura de la Aplicación

### Componentes Principales
- `ContractHeroSection` - Sección hero con presentación del sistema
- `ContractFeaturesSection` - Características y capacidades principales
- `ContractTechnologySection` - Detalle de las tecnologías integradas
- `ContractWorkflowSection` - Proceso de análisis en 5 etapas
- `ContractRiskAnalysisSection` - Categorías de riesgos y clasificación
- `ContractDemoSection` - Ejemplo práctico de análisis

### Archivos de Configuración
- `contract-constants.ts` - Constantes, tipos y datos de la aplicación
- `ContractApp.tsx` - Componente principal de la aplicación de contratos
- `AppSwitcher.tsx` - Selector entre aplicaciones (oftalmología vs contratos)

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: Verde/Esmeralda (para diferenciarse de la app oftalmológica azul)
- **Acentos**: Azul, Púrpura, Rojo, Naranja, Amarillo (para diferentes categorías)
- **Fondo**: Negro con gradientes sutiles
- **Texto**: Escala de grises con acentos de color

### Animaciones
- Transiciones suaves entre secciones
- Efectos hover en tarjetas y botones
- Animaciones de entrada escalonadas
- Partículas flotantes en el hero
- Gradientes animados

## 🔄 Navegación

### App Switcher
La aplicación incluye un selector en la esquina superior izquierda que permite cambiar entre:
- **Investigación Oftalmológica** (aplicación original)
- **Análisis de Contratos** (nueva aplicación)

### Secciones de la App de Contratos
1. **Hero** - Presentación principal
2. **Features** - Características avanzadas
3. **Technology** - Tecnologías integradas
4. **Workflow** - Proceso de análisis
5. **Risk Analysis** - Análisis de riesgos
6. **Demo** - Ejemplo práctico

## 📊 Categorías de Riesgos

### Financieros
- Tasas de interés excesivas
- Comisiones ocultas o no justificadas
- Penalizaciones desproporcionadas
- Cargos por prepago abusivos

### Legales
- Cláusulas abusivas o leoninas
- Desequilibrio contractual
- Jurisdicción exclusiva desfavorable
- Renuncia de derechos

### Operacionales
- Garantías desproporcionadas
- Condiciones de incumplimiento ambiguas
- Modificaciones unilaterales
- Falta de claridad en obligaciones

### Compliance
- Incumplimiento de normativa de protección al consumidor
- Violación de límites de tasas de interés
- Falta de transparencia en costos
- No conformidad con regulaciones sectoriales

## 🎯 Tipos de Contratos Soportados

- Contratos de préstamo personal y empresarial
- Contratos de inversión
- Contratos de arrendamiento financiero (leasing)
- Contratos de crédito hipotecario
- Acuerdos de financiamiento
- Contratos de servicios financieros

## 🚀 Cómo Usar

1. **Iniciar la aplicación**:
   ```bash
   npm run dev
   ```

2. **Seleccionar aplicación**: Usar el selector en la esquina superior izquierda

3. **Navegar**: Usar la navegación flotante o scroll automático

4. **Explorar**: Cada sección proporciona información detallada sobre las capacidades del sistema

## 🔧 Desarrollo

### Estructura de Archivos
```
/Users/miguel/Keynote-Oftalmo-ia/
├── components/
│   ├── ContractHeroSection.tsx
│   ├── ContractFeaturesSection.tsx
│   ├── ContractTechnologySection.tsx
│   ├── ContractWorkflowSection.tsx
│   ├── ContractRiskAnalysisSection.tsx
│   └── ContractDemoSection.tsx
├── contract-constants.ts
├── ContractApp.tsx
├── AppSwitcher.tsx
└── index.tsx (actualizado para usar AppSwitcher)
```

### Tecnologías Utilizadas
- **React 19** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos y animaciones
- **Lucide React** - Iconografía
- **Vite** - Build tool

## 🎨 Diferencias con la App Oftalmológica

| Aspecto | Oftalmológica | Contratos |
|---------|---------------|-----------|
| Color Principal | Azul/Cian | Verde/Esmeralda |
| Iconos | Microscope, Brain, Zap | Shield, Search, Network |
| Contenido | Investigación médica | Análisis financiero |
| Tecnologías | Google Gemini | Claude + FinBERT + GraphRAG |
| Secciones | 8 secciones médicas | 6 secciones financieras |

## 📈 Próximas Mejoras

- [ ] Integración real con APIs de Claude y FinBERT
- [ ] Subida y análisis de archivos PDF reales
- [ ] Generación de reportes descargables
- [ ] Visualización interactiva de grafos
- [ ] Sistema de autenticación
- [ ] Base de datos para historial de análisis
- [ ] API REST para integraciones externas

---

**Desarrollado con React + TypeScript + Tailwind CSS**
