import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import 'primeicons/primeicons.css';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';


const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{emerald.50}',
      100: '{emerald.100}',
      200: '{emerald.200}',
      300: '{emerald.300}',
      400: '{emerald.400}',
      500: '{emerald.500}',
      600: '{emerald.600}',
      700: '{emerald.700}',
      800: '{emerald.800}',
      900: '{emerald.900}',
      950: '{emerald.950}'
  },
      colorScheme: {
              light: {
                primary: {
                  color: '{emerald.950}',
                  inverseColor: '#ffffff',
                  hoverColor: '{emerald.900}',
                  activeColor: '{emerald.800}'
              },
              highlight: {
                background: '{emerald.950}',
                focusBackground: '{emerald.700}',
                color: '#ffffff',
                focusColor: '#ffffff'
            },
              surface: {
                  0: '#ffffff',
                  50: '{emerald.50}',
                  100: '{emerald.100}',
                  200: '{emerald.200}',
                  300: '{emerald.300}',
                  400: '{emerald.400}',
                  500: '{emerald.500}',
                  600: '{emerald.600}',
                  700: '{emerald.700}',
                  800: '{emerald.800}',
                  900: '{emerald.900}',
                  950: '{emerald.950}'
              }
          },
          dark: {
                primary: {
                  color: '{emerald.50}',
                  inverseColor: '{emerald.950}',
                  hoverColor: '{emerald.100}',
                  activeColor: '{emerald.200}'
              },
              highlight: {
                  background: 'rgba(250, 250, 250, .16)',
                  focusBackground: 'rgba(250, 250, 250, .24)',
                  color: 'rgba(255,255,255,.87)',
                  focusColor: 'rgba(255,255,255,.87)'
              },
              surface: {
                  0: '#ffffff',
                  50: '{zinc.50}',
                  100: '{zinc.100}',
                  200: '{zinc.200}',
                  300: '{zinc.300}',
                  400: '{zinc.400}',
                  500: '{zinc.500}',
                  600: '{zinc.600}',
                  700: '{zinc.700}',
                  800: '{zinc.800}',
                  900: '{zinc.900}',
                  950: '{zinc.950}'
              }
          }
      }
  }
});

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
      preset: MyPreset,
      options: {
          darkModeSelector: '.dark',
      }
  }
});

app.mount('#app');