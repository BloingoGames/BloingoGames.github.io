// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}', // Covers app, components, and pages
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey10: ['"Jersey 10"', 'cursive'],
        jersey20: ['"Jersey 20"', 'cursive'],
        sedan: ['"Sedan"', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
