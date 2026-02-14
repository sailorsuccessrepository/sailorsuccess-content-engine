import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sailorsuccess.online',
  output: 'static',
  
  // Content collections enabled
  // No integrations (no Tailwind, no MDX plugins)
  // This is a CONTENT + ROUTING engine only
  
  // Dynamic routing will be handled in src/pages/
});
