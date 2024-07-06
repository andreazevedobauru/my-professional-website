// tailwind.config.js
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        pallete: {
          50: '#B6EADA',
          100: '#fe3c23',
          120: '#0e1116',
          130: '#06462e',
          140: '#bf05f7'
        }
      },
      borderRadius: {
        '2l': '150px'
      }
    }
  },
  plugins: [
    typography,
    forms,
    aspectRatio
  ]
}
