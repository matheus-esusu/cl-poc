import { useTheme } from "@mui/material/styles";
import ThemeProvider from "../../../src/layout/theme/ThemeProvider";

function AccessToThemeValues() {
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();

  return (
    <span style={{ color: main }} data-testid="span-text">
      The color is: {main}
    </span>
  );
}

function ThemeProviderTestComponent() {
  return (
    <ThemeProvider>
      <AccessToThemeValues />
    </ThemeProvider>
  );
}

export default ThemeProviderTestComponent;
