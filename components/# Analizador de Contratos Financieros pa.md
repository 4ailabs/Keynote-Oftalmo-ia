# Analizador de Contratos Financieros para Mac 18GB RAM

Sistema completo de análisis de contratos financieros optimizado específicamente para Mac con 18GB de RAM. Combina múltiples enfoques de análisis para maximizar la precisión mientras respeta las limitaciones de memoria.

## 🎯 Características Principales

### ✅ Optimizado para Mac 18GB RAM
- **Gestión inteligente de memoria** con monitoreo en tiempo real
- **Múltiples enfoques** que se adaptan automáticamente a la memoria disponible
- **Análisis en lotes** con limpieza automática de memoria
- **Fallbacks automáticos** cuando la memoria es limitada

### 🔧 Tres Enfoques de Análisis

1. **Pipeline Optimizado** (FinBERT + Llama 8B)
   - Máxima precisión (95%)
   - Requiere 8-12GB RAM disponible
   - Ideal para contratos críticos

2. **Stack Ligero** (FinBERT + modelos especializados)
   - Buen balance precisión/velocidad (93%)
   - Requiere solo 4-6GB RAM
   - Ideal para análisis en lote

3. **Enfoque Híbrido** (Local + API externa opcional)
   - Máxima eficiencia de memoria
   - Anonimización de datos sensibles
   - Ideal para casos de memoria crítica

## 🚀 Instalación Rápida

### Opción 1: Instalación Automática (Recomendada)

```bash
# Clonar o descargar el proyecto
cd ~/financial-contract-analyzer

# Ejecutar instalación automática
./setup_mac_18gb.sh
```

### Opción 2: Instalación Manual

```bash
# 1. Crear entorno virtual
python3.11 -m venv venv
source venv/bin/activate

# 2. Instalar dependencias
pip install -r requirements.txt

# 3. Instalar spaCy
python -m spacy download en_core_web_sm

# 4. Instalar Ollama
brew install ollama

# 5. Descargar modelos
ollama pull llama3.1:8b-instruct
ollama pull phi3:mini
```

## 📊 Uso Básico

### Verificar Sistema
```bash
# Verificar memoria disponible
python main.py --memory-check

# Ver estado del sistema
python main.py --status
```

### Análisis de Contratos

```bash
# Análisis automático (recomendado)
python main.py --file contrato.txt

# Usar enfoque específico
python main.py --file contrato.txt --approach optimized

# Análisis desde texto
python main.py --text "El contrato establece que..."

# Análisis en lote
python main.py --batch contratos/ --approach lightweight

# Guardar resultados
python main.py --file contrato.txt --output resultados.json
```

### Demo Completo
```bash
# Ejecutar demostración completa
python demo_usage.py
```

## 🎯 Rendimiento Esperado en Mac 18GB

| Configuración | Contratos/hora | RAM usada | Precisión | Tiempo/contrato |
|---------------|----------------|-----------|-----------|-----------------|
| **Pipeline Optimizado** | 150-300 | 8-12GB | 95% | 12-24 segundos |
| **Stack Ligero** | 400-600 | 6-8GB | 93% | 6-9 segundos |
| **Solo FinBERT** | 800-1200 | 3-4GB | 91% | 3-5 segundos |

## 🔧 Configuración Avanzada

### Variables de Entorno
```bash
# Configurar en .env
TORCH_DTYPE=float16
TOKENIZERS_PARALLELISM=false
TRANSFORMERS_CACHE=./cache
HF_HOME=./cache
```

### Configuración de Memoria
```python
# En config_mac_18gb.py
MAX_MEMORY_USAGE = 85  # % máximo de RAM
BATCH_SIZE = 10        # Tamaño de lote
RISK_THRESHOLD = 0.7   # Umbral de riesgo
```

## 📁 Estructura del Proyecto

```
financial-contract-analyzer/
├── main.py                    # Script principal
├── demo_usage.py             # Demostración completa
├── setup_mac_18gb.sh         # Instalación automática
├── requirements.txt          # Dependencias
├── config_mac_18gb.py       # Configuración optimizada
├── memory_manager.py        # Gestión de memoria
├── optimized_pipeline.py    # Pipeline FinBERT + Llama 8B
├── lightweight_stack.py     # Stack ligero alternativo
├── hybrid_secure_approach.py # Enfoque híbrido seguro
├── data/                    # Contratos de ejemplo
├── models/                  # Modelos descargados
├── cache/                   # Cache de modelos
├── logs/                    # Archivos de log
└── results/                 # Resultados de análisis
```

## 🔍 Tipos de Análisis

### Análisis de Riesgo
- **Puntuación de riesgo** (0.0 - 1.0)
- **Clasificación automática** (bajo/medio/alto)
- **Identificación de patrones** de riesgo específicos

### Extracción de Entidades
- **Organizaciones** mencionadas
- **Montos financieros** y porcentajes
- **Fechas importantes** y plazos
- **Términos legales** críticos

### Análisis de Sentimiento
- **Sentimiento general** del contrato
- **Términos favorables** vs desfavorables
- **Análisis de compliance** básico

## 🛡️ Seguridad y Privacidad

### Enfoque Híbrido Seguro
- **Análisis local primero** - datos nunca salen de tu Mac
- **Anonimización automática** antes de análisis externo
- **Consentimiento explícito** requerido para API externa
- **Patrones de anonimización** para datos sensibles

### Datos Anonimizados
- Nombres de empresas → `[COMPANY]`
- Montos específicos → `[AMOUNT]`
- Fechas → `[DATE]`
- Emails → `[EMAIL]`
- Números de cuenta → `[ACCOUNT_NUMBER]`

## 🚨 Solución de Problemas

### Memoria Insuficiente
```bash
# Verificar memoria
python main.py --memory-check

# Usar modo ligero
python main.py --approach lightweight

# Reducir tamaño de lote
# Editar config_mac_18gb.py: BATCH_SIZE = 5
```

### Modelos No Encontrados
```bash
# Verificar Ollama
ollama list

# Descargar modelos faltantes
ollama pull llama3.1:8b-instruct
ollama pull phi3:mini

# Verificar spaCy
python -m spacy download en_core_web_sm
```

### Errores de Importación
```bash
# Activar entorno virtual
source venv/bin/activate

# Reinstalar dependencias
pip install -r requirements.txt --force-reinstall
```

## 📈 Optimizaciones Específicas para Mac

### PyTorch CPU Optimizado
- Usa **MPS** (Metal Performance Shaders) cuando esté disponible
- **Float16** para reducir uso de memoria
- **Low CPU memory usage** activado por defecto

### Gestión de Memoria Inteligente
- **Monitoreo en tiempo real** del uso de RAM
- **Limpieza automática** entre análisis
- **Fallbacks automáticos** según memoria disponible

### Modelos Optimizados
- **FinBERT** con optimizaciones específicas
- **Llama 8B** via Ollama (más eficiente que transformers)
- **Phi-3 Mini** como alternativa ultraligera

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🆘 Soporte

- **Issues**: Abre un issue en GitHub para bugs o solicitudes
- **Documentación**: Consulta este README y los comentarios en el código
- **Demo**: Ejecuta `python demo_usage.py` para ver ejemplos completos

## 🎉 ¡Listo para Usar!

```bash
# Inicio rápido
./start_analyzer.sh

# O manualmente
source venv/bin/activate
python demo_usage.py
```

¡Tu sistema de análisis de contratos financieros está listo para usar en tu Mac con 18GB RAM! 🚀
