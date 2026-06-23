/**
 * LR Brand Identity — Tailwind Preset
 * Usage: add `presets: [lrBrandPreset]` to your tailwind.config.mjs
 */

export const lrBrandPreset = {
  theme: {
    extend: {
      colors: {
        // ── Brand ──
        'lr-graphite':   '#161616',
        'lr-charcoal':   '#2A2A2A',
        'lr-ivory':      '#F4EFE8',
        'lr-burgundy':   '#8D1A4A',
        'lr-rose':       '#C6A6A1',
        'lr-rose-light': '#EDD4CE',
        // ── Functional ──
        'lr-muted':      '#A7ADB5',
        'lr-subtle':     '#4A4A52',
        'lr-border':     '#222222',
        'lr-surface':    '#1A1A1A',
        'lr-white':      '#FFFFFF',
      },
      fontFamily: {
        serif: ['\'Cormorant Garamond\'', 'Georgia', 'serif'],
        sans:  ['\'Inter\'', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'champagne-grad': 'linear-gradient(135deg, #C7A97C 0%, #B89667 100%)',
        'burgundy-grad':  'linear-gradient(135deg, #8D1A4A 0%, #A82058 100%)',
        'rose-grad':      'linear-gradient(135deg, #C6A6A1 0%, #F4C2CF 100%)',
        'dark-grad':      'linear-gradient(160deg, #111315 0%, #1B1D1F 100%)',
      },
    },
  },
};

// CommonJS compat
export default lrBrandPreset;
