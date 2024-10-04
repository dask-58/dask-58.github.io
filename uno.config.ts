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
      'bg-main': 'bg-hex-f0f4fc dark:bg-hex-0b0e12',
      'text-main': 'text-hex-333333 dark:text-hex-d4d4d4',
      'text-link': 'text-hex-0b0e12 dark:text-hex-f0f4fc',
      'border-main': 'border-truegray-300 dark:border-truegray-700',
    },
    {
      'text-title': 'text-link text-4xl font-800',
      'nav-link': 'text-link opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer',
      'prose-link': 'text-link text-nowrap cursor-pointer border-b-1 !border-opacity-30 hover:!border-opacity-100 border-neutral-600 hover:border-truegray-600 dark:border-neutral-600 hover:dark:border-truegray-600 transition-border-color duration-200 decoration-none',
      'container-link': 'p-2 opacity-70 hover:opacity-100 cursor-pointer hover:bg-truegray-800 !bg-opacity-20 transition-colors transition-opacity duration-200',
    },
    {
      'hr-line': 'w-14 mx-auto my-8 border-solid border-1px !border-truegray-600 !dark:border-truegray-300',
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
    'i-simple-icons-react',
    'i-simple-icons-lua',
    'i-simple-icons-swift',
    'i-carbon-rss',
    'i-simple-icons-javascript',
    'i-simple-icons-github',
    'i-simple-icons-x',
    'i-simple-icons-linkedin',
    'i-simple-icons-instagram',
    'i-simple-icons-rust',
    'i-simple-icons-github',
    'i-ri-github-line',
    'i-ri-twitter-x-line',
    'i-simple-icons-codeforces',
    'i-simple-icons-codechef',
    'i-simple-icons-leetcode',
    'i-simple-icons-hackerrank',
    'i-simple-icons-kaggle',
  ],
})
