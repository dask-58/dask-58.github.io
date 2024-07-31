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
      'bg-main': 'bg-hex-eef5fc dark:bg-black',
      'text-main': 'text-black dark:text-white',
      'text-link': 'text-black dark:text-white',
      'border-main': 'border-black dark:border-white',
    },
    {
      'text-title': 'text-black dark:text-hex-eef5fc text-4xl font-800', // Title text styling
      'nav-link': 'text-black dark:text-white opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer', // Navigation link styling
      'prose-link': 'text-black dark:text-white text-nowrap cursor-pointer border-b-1 !border-opacity-30 hover:!border-opacity-100 border-black dark:border-white hover:dark:border-white transition-border-color duration-200 decoration-none', // Prose link styling
      'container-link': 'p-2 opacity-60 hover:opacity-100 cursor-pointer hover:bg-black dark:hover:bg-white !bg-opacity-10 transition-colors transition-opacity duration-200', // Container link styling
    },
    {
      'hr-line': 'w-14 mx-auto my-8 border-solid border-1px !border-black !dark:border-white', // Horizontal line styling
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
        mono: 'DM Mono:400,600',
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
