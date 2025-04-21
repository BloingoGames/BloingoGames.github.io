// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}', // Covers app, components, and pages
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey 10"', 'cursive'],
        sedan: ['"Sedan"', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
