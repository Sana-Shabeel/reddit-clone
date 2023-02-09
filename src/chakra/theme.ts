// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans";

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3c00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
});
