# Agente de Análisis de Contratos Financieros

Sistema de inteligencia artificial especializado en auditoría y análisis de contratos financieros, combinando **Claude SDK de Anthropic** + **FinBERT** + **GraphRAG** para identificar riesgos, analizar estructura semántica y detectar problemas de cumplimiento mediante análisis de lenguaje natural, sentimiento financiero y grafos de conocimiento.

## Características

✅ **Análisis Completo de Contratos (Claude + FinBERT)**
- Identificación automática de riesgos financieros, legales y operacionales
- Clasificación de riesgos por severidad (CRÍTICO, ALTO, MEDIO, BAJO)
- Extracción de términos clave (montos, plazos, tasas, garantías)
- Análisis de sentimiento financiero con FinBERT

✅ **Auditoría Especializada**
- Detección de cláusulas abusivas o desequilibradas
- Identificación de comisiones ocultas y penalizaciones excesivas
- Análisis de cumplimiento regulatorio
- Evaluación de garantías y colaterales
- Score de favorabilidad de cláusulas (0-100%)

✅ **Funcionalidades Avanzadas**
- Auditoría profunda de cláusulas específicas
- Comparación de versiones de contratos
- Generación de reportes en múltiples formatos (Markdown, JSON, texto)
- Recomendaciones accionables para mitigación de riesgos
- Detección automática de palabras clave de riesgo
- Comparación con estándares de industria

✅ **GraphRAG - Knowledge Graph (NUEVO)**
- Extracción automática de entidades (cláusulas, partes, obligaciones, garantías)
- Construcción de grafos de conocimiento del contrato
- Identificación de relaciones entre cláusulas
- Detección de dependencias circulares y conflictos
- Consultas en lenguaje natural sobre la estructura del contrato
- Visualización interactiva del grafo
- Análisis de centralidad (cláusulas más importantes)

## Instalación

### Requisitos

- Python 3.8 o superior
- API Key de Anthropic ([obtener aquí](https://console.anthropic.com/))

### Pasos

1. Clonar o descargar el proyecto:
```bash
cd agente-contratos-financieros
```

2. Instalar dependencias:
```bash
pip install -r requirements.txt
```

3. Configurar la API key:
```bash
cp .env.example .env
# Editar .env y agregar tu ANTHROPIC_API_KEY
```

## Uso

### Ejemplo Básico - Desde Texto

```python
import os
from dotenv import load_dotenv
from src.contract_analyzer import FinancialContractAnalyzer

load_dotenv()

# Inicializar el agente
analyzer = FinancialContractAnalyzer(
    api_key=os.getenv("ANTHROPIC_API_KEY"),
    use_finbert=True,
    use_graphrag=True
)

# Analizar un contrato desde texto
contract_text = """
[Texto del contrato aquí]
"""

# Análisis con Claude
result = analyzer.analyze_contract(
    contract_text,
    contract_type="préstamo personal"
)

# Análisis complementario con FinBERT
finbert_summary = analyzer.get_finbert_analysis(contract_text)

# Generar reporte combinado
report = analyzer.generate_audit_report(
    result,
    format="markdown",
    finbert_summary=finbert_summary
)
print(report)

# Acceder a riesgos identificados
for risk in result.risks:
    print(f"{risk.severity}: {risk.description}")
```

### Ejemplo desde PDF/DOCX

```python
# Analizar directamente desde archivo PDF o DOCX
result = analyzer.analyze_contract_from_file(
    file_path="contrato.pdf",
    contract_type="préstamo"
)

# El sistema extrae automáticamente el texto y analiza
if "error" not in result:
    analysis = result['analysis']
    print(f"Riesgo global: {analysis.overall_risk_score}")
    print(f"Archivo: {result['document_metadata']['format']}")
    print(f"Páginas: {result['document_metadata']['pages']}")
```

### Ejecutar Ejemplos

**Ejemplo completo con Claude + FinBERT:**
```bash
python examples/ejemplo_uso.py
```
Genera:
- Reporte de auditoría completo con ambos análisis en `docs/reporte_auditoria.md`
- Auditoría detallada de cláusulas en `docs/auditoria_clausulas.json`

**Ejemplo exclusivo de FinBERT:**
```bash
python examples/ejemplo_finbert_completo.py
```
Demuestra:
- Análisis de sentimiento de cláusulas individuales
- Detección de palabras clave de riesgo
- Comparación con estándares de industria
- Cálculo de scores de favorabilidad

**Ejemplo de GraphRAG (Knowledge Graph):**
```bash
python examples/ejemplo_graphrag.py
```
Demuestra:
- Extracción automática de entidades y relaciones
- Construcción del grafo de conocimiento
- Consultas en lenguaje natural sobre el contrato
- Detección de dependencias circulares
- Visualización interactiva del grafo en HTML
- Análisis de centralidad de cláusulas

**Ejemplo desde PDF:**
```bash
python examples/ejemplo_pdf.py
```
Demuestra:
- Carga de contratos desde PDF o DOCX
- Extracción automática de texto
- Análisis completo (Claude + FinBERT + GraphRAG)
- Generación de reportes desde archivos
- Visualización del grafo del contrato PDF

## Funcionalidades Principales

### 1. Carga de Documentos (NUEVO)

```python
from src.document_loader import DocumentLoader

loader = DocumentLoader()

# Cargar PDF
doc = loader.load_document("contrato.pdf")

# Cargar DOCX
doc = loader.load_document("contrato.docx")

# Cargar TXT
doc = loader.load_document("contrato.txt")

# Acceder al texto y metadata
print(doc['text'])
print(doc['metadata'])  # Páginas, autor, formato, etc.
print(doc['word_count'])
```

**Formatos soportados:**
- PDF (PyMuPDF o PyPDF)
- DOCX (Microsoft Word)
- TXT (texto plano)
- Imágenes con OCR (PNG, JPG) - requiere Tesseract

### 2. Análisis Completo de Contratos

```python
# Desde texto
result = analyzer.analyze_contract(contract_text, contract_type="préstamo")

# Desde archivo
result = analyzer.analyze_contract_from_file("contrato.pdf", contract_type="préstamo")
```

**Retorna:**
- `summary`: Resumen ejecutivo del contrato
- `risks`: Lista de riesgos identificados con severidad y recomendaciones
- `key_terms`: Términos financieros clave extraídos
- `compliance_issues`: Problemas de cumplimiento regulatorio
- `recommendations`: Recomendaciones generales
- `overall_risk_score`: Puntuación global de riesgo

### 2. Auditoría Profunda de Cláusulas

```python
clausulas_criticas = [
    "Interés moratorio del 36% anual",
    "Ejecución de garantía sin previo aviso"
]

audit = analyzer.deep_clause_audit(contract_text, clausulas_criticas)
```

Proporciona para cada cláusula:
- Interpretación legal
- Riesgos asociados
- Mejores prácticas
- Recomendaciones de modificación

### 3. Comparación de Contratos

```python
comparison = analyzer.compare_contracts(contract_v1, contract_v2)
```

Identifica:
- Diferencias principales en términos financieros
- Cambios en el perfil de riesgo
- Impacto de las modificaciones
- Recomendación sobre qué versión es más favorable

### 4. Análisis de Sentimiento con FinBERT

```python
from src.finbert_analyzer import FinBERTAnalyzer

finbert = FinBERTAnalyzer()

# Analizar cláusula individual
clause_analysis = finbert.analyze_clause("El prestatario puede prepagar sin penalización")
print(f"Sentimiento: {clause_analysis.sentiment.label}")
print(f"Score favorable: {clause_analysis.favorable_score:.2%}")

# Resumen de riesgos del contrato
summary = finbert.get_contract_risk_summary(contract_text)
print(f"Evaluación: {summary['overall_assessment']}")
print(f"Cláusulas negativas: {summary['sentiment_distribution']['negative']}")

# Detectar palabras clave de riesgo
risks = finbert.detect_risk_indicators(contract_text)
print(f"Riesgos críticos: {risks['crítico']}")
```

### 5. GraphRAG - Knowledge Graph

```python
# Inicializar con GraphRAG
analyzer = FinancialContractAnalyzer(
    api_key=api_key,
    use_graphrag=True  # Activar GraphRAG
)

# Construir grafo de conocimiento
graph_info = analyzer.build_knowledge_graph(contract_text, contract_id="contrato_001")
print(f"Entidades: {graph_info['entities_extracted']}")
print(f"Relaciones: {graph_info['relationships_extracted']}")

# Hacer preguntas sobre el contrato
respuesta = analyzer.query_graph("¿Cuáles son todas las garantías del contrato?")
print(respuesta['answer'])
print(f"Fuentes: {respuesta['sources']}")

# Visualizar el grafo
analyzer.graph_builder.visualize_graph("contract_graph.html")

# Encontrar cláusulas relacionadas
related = analyzer.graph_builder.find_related_clauses("CLAUSE_1", max_depth=2)

# Detectar dependencias circulares
cycles = analyzer.graph_builder.query_graph("find_cycles", {})
```

### 6. Generación de Reportes

```python
# Reporte combinado (Claude + FinBERT)
finbert_summary = analyzer.get_finbert_analysis(contract_text)
report_md = analyzer.generate_audit_report(
    result,
    format="markdown",
    finbert_summary=finbert_summary
)

# Formato JSON
report_json = analyzer.generate_audit_report(result, format="json")

# Formato Texto
report_txt = analyzer.generate_audit_report(result, format="text")
```

## Tipos de Contratos Soportados

El agente está optimizado para analizar:
- Contratos de préstamo personal y empresarial
- Contratos de inversión
- Contratos de arrendamiento financiero (leasing)
- Contratos de crédito hipotecario
- Acuerdos de financiamiento
- Contratos de servicios financieros

## Categorías de Riesgos Detectados

### Riesgos Financieros
- Tasas de interés excesivas
- Comisiones ocultas o no justificadas
- Penalizaciones desproporcionadas
- Cargos por prepago abusivos

### Riesgos Legales
- Cláusulas abusivas o leoninas
- Desequilibrio contractual
- Jurisdicción exclusiva desfavorable
- Renuncia de derechos

### Riesgos Operacionales
- Garantías desproporcionadas
- Condiciones de incumplimiento ambiguas
- Modificaciones unilaterales
- Falta de claridad en obligaciones

### Compliance
- Incumplimiento de normativa de protección al consumidor
- Violación de límites de tasas de interés
- Falta de transparencia en costos

## Estructura del Proyecto

```
agente-contratos-financieros/
├── src/
│   ├── contract_analyzer.py      # Agente principal (Claude + integración)
│   ├── finbert_analyzer.py       # Módulo de análisis de sentimiento
│   ├── graph_extractor.py        # Extractor de entidades para GraphRAG
│   ├── graph_builder.py          # Constructor de Knowledge Graph
│   ├── graphrag_query.py         # Motor de consultas GraphRAG
│   └── __init__.py
├── examples/
│   ├── ejemplo_uso.py            # Ejemplo completo Claude + FinBERT
│   ├── ejemplo_finbert_completo.py  # Ejemplo detallado FinBERT
│   └── ejemplo_graphrag.py       # Ejemplo GraphRAG + Knowledge Graph
├── docs/                         # Reportes y visualizaciones generadas
├── requirements.txt              # Dependencias completas
├── .env.example                 # Template de configuración
└── README.md                    # Este archivo
```

## Buenas Prácticas

1. **Temperatura baja**: El agente usa `temperature=0.2` para análisis más precisos y consistentes

2. **Validación de resultados**: Siempre revisa los hallazgos con un experto legal antes de tomar decisiones

3. **Privacidad**: No envíes contratos con información sensible sin antes anonimizarla

4. **Modelos**: Por defecto usa `claude-sonnet-4-20250514` para balance entre velocidad y precisión

## Personalización

### Configuraciones disponibles

```python
# Configuración completa (Claude + FinBERT + GraphRAG)
analyzer = FinancialContractAnalyzer(
    api_key=api_key,
    model="claude-sonnet-4-20250514",
    use_finbert=True,   # Análisis de sentimiento
    use_graphrag=True   # Knowledge Graph
)

# Solo Claude + GraphRAG (sin FinBERT)
analyzer = FinancialContractAnalyzer(
    api_key=api_key,
    use_finbert=False,
    use_graphrag=True
)

# Solo Claude (básico, más rápido)
analyzer = FinancialContractAnalyzer(
    api_key=api_key,
    use_finbert=False,
    use_graphrag=False
)

# Modelo más potente para análisis profundos
analyzer = FinancialContractAnalyzer(
    api_key=api_key,
    model="claude-opus-4-20250514",
    use_finbert=True,
    use_graphrag=True
)
```

### Personalizar palabras clave de riesgo en FinBERT

Edita el diccionario `RISK_KEYWORDS` en [finbert_analyzer.py](src/finbert_analyzer.py) línea 30 para agregar términos específicos de tu industria.

### Extender categorías de riesgo de Claude

Modifica el prompt en [contract_analyzer.py:61](src/contract_analyzer.py) para agregar categorías específicas.

## Tecnologías Utilizadas

### Claude SDK (Anthropic)
- **Análisis de lenguaje natural** profundo y contextual
- **Interpretación legal** de cláusulas complejas
- **Generación de recomendaciones** accionables
- Modelo: `claude-sonnet-4-20250514` (configurable)

### FinBERT (ProsusAI)
- **Análisis de sentimiento** especializado en textos financieros
- **Clasificación automática** de cláusulas (positive/negative/neutral)
- **Detección de keywords** de riesgo mediante diccionarios especializados
- **Scoring de favorabilidad** numérico (0-100%)

### GraphRAG - Knowledge Graph
- **Extracción de entidades** usando Claude (cláusulas, partes, obligaciones, términos)
- **Construcción automática** de grafos con NetworkX
- **Soporte opcional** para Neo4j (base de datos de grafos)
- **Identificación de relaciones** entre entidades del contrato
- **Consultas en lenguaje natural** combinando grafo + Claude
- **Detección de dependencias** circulares y conflictos
- **Visualización interactiva** con PyVis
- **Análisis de centralidad** con PageRank

La combinación de las 3 tecnologías proporciona:
- ✅ Análisis contextual profundo (Claude)
- ✅ Análisis cuantitativo de sentimiento (FinBERT)
- ✅ Análisis estructural y relacional (GraphRAG)
- ✅ Detección de patrones de riesgo
- ✅ Mayor precisión en identificación de cláusulas abusivas
- ✅ Consultas complejas sobre estructura del contrato

## Limitaciones

- El agente proporciona análisis asistido por IA, no sustituye asesoría legal profesional
- Requiere API key de Anthropic con créditos disponibles
- FinBERT requiere ~400MB de descarga en primera ejecución
- GraphRAG consume más tokens de API al extraer entidades
- El análisis depende de la calidad y claridad del texto del contrato
- Mejor rendimiento con contratos en español o inglés
- FinBERT fue entrenado principalmente con textos financieros en inglés
- Neo4j es opcional; NetworkX funciona sin instalación adicional

## Contribuciones

Las mejoras y sugerencias son bienvenidas. Algunas áreas de mejora:
- Fine-tuning de FinBERT con contratos en español
- Integración con Neo4j Cloud para persistencia
- Análisis comparativo automático con estándares de industria
- Exportación a formatos adicionales (PDF, Word)
- Soporte para más idiomas
- Sistema de embeddings para comparación semántica de cláusulas
- Integración con bases de datos de jurisprudencia
- API REST para el servicio
- Detección automática de anomalías en el grafo
- Multi-contract analysis (comparar múltiples contratos en un grafo)

## Licencia

MIT

## Soporte

Para preguntas o problemas:
- Revisar la documentación de [Claude SDK](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)
- Consultar [Anthropic Console](https://console.anthropic.com/)

---

**Desarrollado con Claude SDK + FinBERT + GraphRAG**

### Referencias y Recursos
- [Claude API Documentation](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)
- [FinBERT on HuggingFace](https://huggingface.co/ProsusAI/finbert)
- [NetworkX Documentation](https://networkx.org/documentation/stable/)
- [Neo4j Graph Database](https://neo4j.com/)
- [PyVis Network Visualization](https://pyvis.readthedocs.io/)
- [Anthropic Console](https://console.anthropic.com/)

### Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────┐
│              CONTRATO FINANCIERO (Texto)                │
└─────────────────┬───────────────────────────────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
        ▼                   ▼
┌───────────────┐   ┌──────────────────┐
│  CLAUDE SDK   │   │  GRAPH EXTRACTOR │
│  Análisis     │   │  Entidades +     │
│  Semántico    │   │  Relaciones      │
└───────┬───────┘   └────────┬─────────┘
        │                    │
        │           ┌────────┴─────────┐
        │           │                  │
        ▼           ▼                  ▼
┌──────────┐  ┌─────────────┐  ┌────────────┐
│ FinBERT  │  │  NetworkX/  │  │  GraphRAG  │
│Sentiment │  │   Neo4j     │  │  Queries   │
│ Analysis │  │  Knowledge  │  │            │
└─────┬────┘  │    Graph    │  └─────┬──────┘
      │       └──────┬──────┘        │
      │              │               │
      └──────┬───────┴───────┬───────┘
             │               │
             ▼               ▼
    ┌────────────────────────────────┐
    │     REPORTES INTEGRADOS        │
    │  • Riesgos identificados       │
    │  • Análisis de sentimiento     │
    │  • Estructura del contrato     │
    │  • Visualización del grafo     │
    │  • Respuestas a consultas      │
    └────────────────────────────────┘
```
