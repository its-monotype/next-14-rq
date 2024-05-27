import { getTheme } from 'reshaped/config/tailwind';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: getTheme(),
  plugins: [],
};
export default config;
