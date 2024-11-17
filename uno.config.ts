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
      'bg-main': 'bg-hex-f4f6fa dark:bg-hex-10141a',
      'text-main': 'text-hex-444444 dark:text-hex-c0c0c0',
      'text-link': 'text-hex-10141a dark:text-hex-f4f6fa',
      'border-main': 'border-gray-200 dark:border-gray-600',
    },
    {
      'text-title': 'text-link text-4xl font-800',
      'nav-link': 'text-link opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer',
      'prose-link': 'text-link text-nowrap cursor-pointer border-b-1 !border-opacity-25 hover:!border-opacity-100 border-gray-500 hover:border-gray-500 dark:border-gray-500 hover:dark:border-gray-500 transition-border-color duration-200 decoration-none',
      'container-link': 'p-2 opacity-75 hover:opacity-100 cursor-pointer hover:bg-gray-800 !bg-opacity-15 transition-colors transition-opacity duration-200',
    },
    {
      'hr-line': 'w-14 mx-auto my-8 border-solid border-1px !border-gray-500 !dark:border-gray-400',
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
        mono: 'JetBrains Mono:400,600,800',
        grotesk: 'Space Grotesk:400,600,800',
        poppins: 'Poppins:400,600,800',
        hanuman: 'Hanuman:400, 700',
        rocksalt: 'Rock Salt:400',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    'i-simple-icons-react',
    'i-simple-icons-lua',
    'i-simple-icons-swift',
    'i-carbon-rss',
    'i-simple-icons-mastodon',
    'i-simple-icons-javascript',
    'i-simple-icons-github',
    'i-simple-icons-x',
    'i-simple-icons-linkedin',
    'i-simple-icons-instagram',
    'i-simple-icons-json',
    'i-simple-icons-cplusplus',
    'i-simple-icons-rust',
    'i-simple-icons-github',
    'i-ri-github-line',
    'i-ri-twitter-x-line',
    'i-simple-icons-monkeytype',
    'i-simple-icons-codeforces',
    'i-simple-icons-codechef',
    'i-simple-icons-leetcode',
    'i-simple-icons-hackerrank',
    'i-simple-icons-kaggle',
  ],
})
