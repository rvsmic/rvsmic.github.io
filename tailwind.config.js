/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      height: {
        '90vh': '90vh',
        '80vh': '80vh',
        '10vh': '10vh',
        'a4': '277mm',
      },
      width: {
        'a4': '190mm',
        '2vh': '2vh',
      },
      colors: {
        'light-background': '#ecffec',
        'light-text': '#1d1d1d',
        'light-accent-1': '#ef5c2e',
        'light-accent-2': '#559e55',
        'dark-background': '#1e251e',
        'dark-text': '#f7f7f7',
        'dark-accent-1': '#ff7d54',
        'dark-accent-2': '#95ff95',
        'dark-gray': '#c0c0c0',
        'medium-gray': '#ededed',
        'light-gray': '#f4f4f4',
      },
      padding: {
        '1/4': '25%',
        '1/8': '12.5%',
        '1/2': '50%',
        '3/4': '75%',
        '10vh': '10vh',
        '5vw': '5vw',
        '8mm': '8mm',
        '7mm': '7mm',
        '6mm': '6mm',
        '4mm': '4mm',
        '3.8mm': '3.8mm',
        '3mm': '3mm',
        '2mm': '2mm',
        '1mm': '1mm',
        '0.2mm': '0.2mm',
      },
      margin: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '10vh': '10vh',
        '5vw': '5vw',
        '8mm': '8mm',
        '7mm': '7mm',
        '6mm': '6mm',
        '4mm': '4mm',
        '3.8mm': '3.8mm',
        '3mm': '3mm',
        '2mm': '2mm',
        '1mm': '1mm',
        '0.2mm': '0.2mm',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '50vw': '50vw',
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '50vw': '50vw',
      },
      backgroundOpacity: {
        '8': '0.08'
      },
      fontSize: {
        '2xs': ['0.65rem', '0.75rem'],
        '3xs': ['0.5rem', '0.75rem']
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
    }
  },
  plugins: [],
}

