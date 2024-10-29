import { extendTheme, Input } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: "#fd3",
    grey: {
      5: "#f9fafb",
      10: "#f4f5f7",
      20: "#e4e7eb",
      40: "#d1d5db",
      60: "#9ca3af",
      80: "#6b7280",
    },
    bronz: "#d48753",
    primary: {
      DEFAULT: "#f33",
      darken: "#c00",
      textLink: "#cc444b",
    },
    bg: {
      1: "#1c1d22",
      "1variant": "#22242a",
      2: "#111113",
      "2variant": "#18191b",
      3: "#1d1e20",
      4: "#1e1f24",
    },
    readIcon: "hsla(0, 100%, 60%, 10%)",
  },
  fonts: {
    heading: "Catamaran, sans-serif",
    body: "Catamaran, sans-serif",
  },
  textStyles: {
    h1: {
      fontSize: {
        base: "30px",
        md: "32px",
      },
      color: "gret.5",
      lineHeight: {
        base: "34px",
        md: "36px",
      },
    },
    h2: {
      fontSize: {
        base: "24px",
        md: "28px",
      },
      color: "gret.5",
      lineHeight: {
        base: "28px",
        md: "32px",
      },
    },
    h3: {
      fontSize: {
        base: "22px",
        md: "24px",
        xl: "32px",
      },
      color: "gret.5",
      lineHeight: {
        base: "26px",
        md: "28px",
      },
    },
    h4: {
      fontSize: {
        base: "20px",
        md: "22px",
      },
      color: "gret.5",
      lineHeight: {
        base: "24px",
        md: "26px",
      },
    },
    h5: {
      fontSize: {
        base: "18px",
        md: "20px",
      },
      color: "gret.5",
      lineHeight: {
        base: "22px",
        md: "24px",
      },
    },
    h6: {
      fontSize: {
        base: "16px",
        md: "18px",
      },
      color: "gret.5",
      lineHeight: {
        base: "20px",
        md: "22px",
      },
    },
  },
  fontSizes: {
    fontSizes: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "22px",
      "3xl": "24px",
      "4xl": "32px",
    },
  },
  styles: {
    global: {
      body: {
        bg: "bg.2",
        color: "white",
      },
    },
  },

  components: {
    Input: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderWidth: "1px",
              borderColor: "primary.DEFAULT",
              boxShadow: "0 0 0 1px",
            },
          },
        },
      },
    },
  },
});
