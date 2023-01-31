import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  Theme,
} from "@mui/material";
import { useConstant } from "../../hooks";

const defaultTheme = createTheme();

export interface ThemeProviderProps {
  children: React.ReactNode | React.ReactNode[];
  theme?: Partial<Theme>;
}

function ThemeProvider(props: ThemeProviderProps) {
  const theme = useConstant<Theme>(() =>
    props.theme !== undefined
      ? {
          ...defaultTheme,
          ...props.theme,
        }
      : defaultTheme
  );

  return <MUIThemeProvider theme={theme} />;
}

export default ThemeProvider;
