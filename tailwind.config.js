const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      colors: {
        // Custom cyan variants from your palette
        'cyan-primary': '#67CFCE',
        'cyan-secondary': '#4B9FAA', 
        'cyan-tertiary': '#6BB4BB',
        'cyan-quaternary': '#65C9C9',
        // Add CSS variables for aurora effect
        'white': '#ffffff',
        'transparent': 'transparent',
        // Dark granite theme
        'dark-primary': '#1c1917', // stone-900
        'dark-secondary': '#292524', // stone-800
        'dark-tertiary': '#44403c', // stone-700
        'silver-primary': '#e5e7eb',
        'silver-secondary': '#d1d5db',
        'silver-tertiary': '#9ca3af',
        'metallic': '#8b949e',
        // Shadcn-style color mappings
        'background': 'rgb(var(--background) / <alpha-value>)',
        'foreground': 'rgb(var(--foreground) / <alpha-value>)',
        'muted': 'rgb(var(--muted) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
        'border': 'rgb(var(--border) / <alpha-value>)',
        'primary': 'rgb(var(--primary) / <alpha-value>)',
      }
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
