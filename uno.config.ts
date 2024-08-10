import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'bg-main': 'bg-hex-fffffff dark:bg-hex-1a0f00',
      'text-main': 'text-hex-4d3319 dark:text-hex-ECE2D9FF',
      'text-link': 'text-hex-b33000 dark:text-hex-ff8c66',
      'border-main': 'border-hex-d9a64e dark:border-hex-ffd700',
    },
    {
      'text-title': 'text-hex-b33000 dark:text-hex-ffd700 text-4xl font-900', // Title text styling
      'nav-link': 'text-hex-4d3319 dark:text-hex-000000 opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer',
      'prose-link': 'text-hex-b33000 dark:text-hex-ff8c66 text-nowrap cursor-pointer border-b-1 !border-opacity-30 hover:!border-opacity-100 border-hex-b33000 dark:border-hex-ff8c66 hover:dark:border-hex-ff8c66 transition-border-color duration-200 decoration-none', // Prose link styling
      'container-link': 'p-2 opacity-70 hover:opacity-100 cursor-pointer hover:bg-hex-ffd700 dark:hover:bg-hex-b33000 !bg-opacity-20 transition-colors transition-opacity duration-200', // Container link styling
    },
    {
      'hr-line': 'w-14 mx-auto my-8 border-solid border-1px !border-hex-d9a64e !dark:border-hex-ffd700', // Horizontal line styling
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'Mono:400,600',
        grotesk: 'Space Grotesk:400,600,800',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    'i-ri-file-list-2-line',
    'i-carbon-campsite',
    'i-carbon-ai',
    'i-carbon-currency',
    'i-carbon-code',
    'i-simple-icons-github',
    'i-simple-icons-x',
    'i-simple-icons-linkedin',
    'i-simple-icons-instagram',
    'i-simple-icons-youtube',
    'i-ri-github-line',
    'i-ri-twitter-x-line',
  ],
})
