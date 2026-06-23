# 🎨 LR Brand Identity

> Identidade Visual Canônica da **LR Advocacia Inteligente**
> Loureiro & Rodrigues

---

## 📦 O que inclui

Este repositório é a **única fonte de verdade** para toda a identidade visual da LR Advocacia Inteligente.

| Arquivo | Descrição |
|---------|-----------|
| `COLOR_PALETTE.md` | Paleta de cores oficial (6 marca + 5 funcionais + gradientes) |
| `TYPOGRAPHY.md` | Tipografia: Cormorant Garamond + Inter |
| `LOGO_SPEC.md` | Especificação completa do logo e restrições de uso |
| `assets/lr-brand.css` | CSS custom properties (drop-in) |
| `lr-brand-tailwind.js` | Preset Tailwind ES module |
| `assets/logo/` | Logo dark, light e monograma em SVG |

---

## 🚀 Como usar

### 1. Em projetos Tailwind

```js
// tailwind.config.mjs
import { lrBrandPreset } from './lr-brand-tailwind.js';

export default {
  presets: [lrBrandPreset],
  // ... resto da config
};
```

### 2. Em projetos CSS puro

```css
@import url('https://raw.githubusercontent.com/loureirorodriguesadvs-ai/LR-BRAND-IDENTITY/main/assets/lr-brand.css');

/* Use as variáveis */
.my-button {
  background: var(--lr-burgundy);
  color: var(--lr-ivory);
}
```

### 3. Em projetos Node.js

```js
// Copie o arquivo para seu projeto
import { colors } from './lr-brand-tailwind.js';

console.log(colors['lr-burgundy']); // #8D1A4A
```

---

## 🎨 Cores

### Marca

| Token | Hex | Uso |
|-------|-----|-----|
| `lr-graphite` | `#161616` | Fundo institucional principal |
| `lr-charcoal` | `#2A2A2A` | Superfícies e cards |
| `lr-ivory` | `#F4EFE8` | Papelaria, fundo claro |
| `lr-burgundy` | `#8D1A4A` | CTA, régua do logo, acento |
| `lr-rose` | `#C6A6A1` | Letra R, hover, detalhes |
| `lr-rose-light` | `#EDD4CE` | Rose gold light |

### Funcionais

| Token | Hex | Uso |
|-------|-----|-----|
| `lr-muted` | `#A7ADB5` | Texto secundário |
| `lr-subtle` | `#4A4A52` | Texto muito fraco |
| `lr-border` | `#222222` | Bordas e divisórias |
| `lr-surface` | `#1A1A1A` | Superfícies elevadas |
| `lr-burgundy-l` | `#A82058` | Hover de CTA |

---

## 🔤 Tipografia

| Função | Fonte | Pesos |
|--------|-------|-------|
| **Display Serif** | Cormorant Garamond | 300, 400, 600, italic 300 |
| **Funcional Sans** | Inter | 200, 300, 400 |

Google Fonts:
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Inter:wght@200;300;400&display=swap
```

---

## 📁 Estrutura

```
LR-BRAND-IDENTITY/
├── COLOR_PALETTE.md        ← Paleta completa
├── TYPOGRAPHY.md            ← Especificação tipográfica
├── LOGO_SPEC.md             ← Regras do logo
├── lr-brand-tailwind.js     ← Preset Tailwind
├── README.md                ← Este arquivo
│
├── assets/
│   ├── lr-brand.css         ← CSS custom properties
│   ├── qr-lr.png            ← QR code oficial
│   └── logo/
│       ├── logo-dark.svg    ← Logo fundo escuro
│       ├── logo-light.svg   ← Logo fundo claro
│       └── monogram.svg     ← Monograma LR
│
└── docs/
    └── TODO_tokenize_css.md ← Tarefas pendentes
```

---

## 📋 Tarefas Pendentes

Veja [docs/TODO_tokenize_css.md](docs/TODO_tokenize_css.md) para o inventário de cores hardcoded que precisam ser tokenizadas.

---

## 📄 Licença

© 2026 LR Advocacia Inteligente — Loureiro & Rodrigues.
