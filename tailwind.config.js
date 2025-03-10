module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
    theme: {
      extend: {
        colors: {
          'arrakis-sand': '#e9a75b', // Areia do deserto de Arrakis
          'spice-melange': '#c76b23', // Cor da especiaria
          'stillsuit-gray': '#5a5d5b', // Tons dos trajes Fremen
          'fremen-blue': '#1b4f72', // Azul intenso dos olhos dos Fremen
          'harkonnen-black': '#0d0d0d', // Preto brutalista dos Harkonnen
          'sardaukar-red': '#8b0000', // Vermelho sombrio dos Sardaukar
          'atreides-green': '#1f4037', // Verde militar da Casa Atreides
          'deep-dune': '#665a48', // Tons escuros das dunas à noite
          'twilight-purple': '#3d2c56', // Roxo misterioso do céu ao anoitecer
          'void-dark': '#121212', // O vazio do espaço profundo
        },
      },
    },
    plugins: [],
  };
  