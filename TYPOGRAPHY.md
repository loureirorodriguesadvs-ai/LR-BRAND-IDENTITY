# 🔤 Tipografia — LR Advocacia Inteligente

> Canônica · Atualizado 2026-06-23

---

## Familias tipográficas

### Serif (Display)
**Cormorant Garamond**
- Pesos: 300 / 400 / 600
- Itálico: 300
- Uso: Títulos, hero, materiais institucionais
- Google Fonts: `Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300`

### Sans (Funcional)
**Inter** ✅ (unificado 2026-06-23)
- Pesos: 200 / 300 / 400
- Uso: Textos corridos, UI, documentos, propostas
- Google Fonts: `Inter:wght@200;300;400`

> ⚠️ **LEGADO**: Tailwind no LEGAL-OS ainda referencia `DM Sans`. Deve ser migrado para `Inter`.

---

## Hierarquia

| Nível | Fonte | Peso | Tracking | Uso |
|-------|-------|------|----------|-----|
| Hero H1 | Cormorant | 300 | normal | Título principal |
| Section H2 | Cormorant | 300 italic | normal | Títulos de seção |
| Label/Tag | Inter | 200 | 4-5px | Rótulos, chips |
| Body | Inter | 300 | 0.5px | Texto corrido |
| Caption | Inter | 200 | 2px | Legendas, metadados |

---

## CSS Custom Properties

```css
:root {
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Inter', system-ui, sans-serif;
  --leading-editorial: 1.12;
  --leading-reading: 1.75;
  --widest-lr: 0.22em;
  --wider-lr: 0.14em;
  --wide-lr: 0.08em;
}
```
