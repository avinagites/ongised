import containerQueriesPlugin from "@tailwindcss/container-queries";
import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

import { createFluidValue } from "./src/utils/create-fluid-value";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
    relativeContentPathsByDefault: true,
  },
  theme: {
    fontFamily: {
      jost: ["Jost", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        peach: "#E7816B",
        moccaccino: "#972E17",
        "mona-lisa": "#FFAD9B",
        "provincial-pink": "#FDF3F0",
        baltic: "#1D1C1E",
        "ship-grey": "#333136",
        white: "#FFFFFF",
        "athens-grey": "#F1F3F5",
      },
      fontSize: {
        "fluid-h1": createFluidValue(30, 48),
        "fluid-h2": createFluidValue(26, 40),
        "fluid-h3": createFluidValue(18, 20),
        "fluid-body1": createFluidValue(12, 16),
        "fluid-body2": createFluidValue(12, 15),
        "fluid-small": createFluidValue(12, 12),
      },
      borderRadius: {
        "2xl": "0.938rem", // 15px
      },
      transitionTimingFunction: {
        DEFAULT: defaultTheme.transitionTimingFunction["in-out"],
      },
      backgroundImage: {
        logo: "conic-gradient(var(--tw-gradient-stops))",
      },
      transitionDuration: {
        400: "400ms",
      },
      gridTemplateRows: {
        footer: "repeat(6, minmax(0, auto))",
        "footer-md": "repeat(3, minmax(0, auto))",
      },
    },
  },
  plugins: [containerQueriesPlugin, typographyPlugin],
} satisfies Config;
