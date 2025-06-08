// @ts-check
import { defineConfig } from 'astro/config';



// https://astro.build/config
export default defineConfig({
  // Netlify funciona mejor con sitios estáticos (SSG)
  output: 'static',

  // Reemplaza con tu URL de Netlify
  site: 'https://rainbow-maamoul-a6a84f.netlify.app',


});