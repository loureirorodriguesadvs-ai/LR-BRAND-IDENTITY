# 🛠️ TODO: Tokenizar cores hardcoded em global.css

> Arquivo: `services/website/src/styles/global.css`  
> Status: Hardcodes encontrados em `grep -n -E "#[0-9a-fA-F]{3,}|rgba\("`

---

## Lista de cores hardcoded

| Linha | Valor hardcoded | Token correspondente | Ação |
|-------|-----------------|---------------------|------|
| 22 | `rgba(141, 26, 74, 0.35)` | `lr-burgundy` com opacity 35% | ❌ Deixar (selection:: pseudo-element não suporta CSS vars em alguns browsers) |
| 23 | `#F4EFE8` | `lr-ivory` | ✅ Substitivíl por `var(--lr-ivory)` |
| 29 | `#161616` | `lr-graphite` | ✅ Substitivíl por `var(--lr-graphite)` |
| 30 | `#8D1A4A` | `lr-burgundy` | ✅ Substitivíl por `var(--lr-burgundy)` |
| 31 | `#A82058` | `lr-burgundy-l` | ✅ Substitivíl por `var(--lr-burgundy-l)` |
| 45 | `#8D1A4A` | `lr-burgundy` | ✅ Substitivíl |
| 50 | `rgba(198, 166, 161, 0.6)` | `lr-rose` com opacity 60% | ❌ Deixar (rgba hardcoded) |
| 55 | `#8D1A4A` | `lr-burgundy` | ✅ Substitivíl |
|... | `rgba(141,26,74,...)` | `lr-burgundy` variante | ❌ Deixar (gradientes com opacity) |
| 77 | `rgba(198,166,161,0.06)` | `lr-rose` com opacity 6% | ❌ Deixar (gradiente) |
| 79 | `#111315` | Sem token oficial → `dark-grad` start | ⚠️ Adicionar `lr-graphite-dark`? |
| 111 | `#8D1A4A` | `lr-burgundy` | ✅ Substitivíl |
| 125 | `#8D1A4A` | `lr-burgundy` | ✅ Substitivíl |
| 142 | `#C6A6A1` | `lr-rose` | ✅ Substitivíl |
| 163 | `#C6A6A1` | `lr-rose` | ✅ Substitivíl |
| 180 | `rgba(141,26,74,0.18)` | `lr-burgundy` com opacity 18% | ❌ Deixar |
| 187 | `rgba(141,26,74,0.35)` | `lr-burgundy` com opacity 35% | ❌ Deixar |
| 188 | `rgba(141,26,74,0.14)` | `lr-burgundy` com opacity 14% | ❌ Deixar |

---

## Observações

1. **Cores sólidas** (#hex) → facilmente substitivéis por CSS custom properties
2. **RGBA com opacity** → manter hardcoded (Tailwind não resolve opacity em variáveis CSS de forma limpa)
3. **Cor `#111315`** → não está na paleta canônica. Sugestões:
   - Adicionar `lr-void: #111315` como nova cor
   - Ou usar `--dark-grad` como referência

## Próximo passo
- Criar tarefa no backlog do LEGAL-OS para migrar os hex sólidos para CSS custom properties que importam `lr-brand.css`
