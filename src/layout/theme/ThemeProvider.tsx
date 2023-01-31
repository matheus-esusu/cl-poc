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

const BasePageLayout = {
  main: {
    borderRadius: "unset",
    boxShadow: "unset",
    border: "1px solid #E5E5E5",
  },
  card: {
    boxShadow: "unset",
  },
  root: {
    margin: "30px",
  },
};

const overridedTheme = {
  palette: {
    ...defaultTheme.palette,
    primary: {
      light: "#E5F5EA",
      main: "#02AE5B",
      dark: "#007d2f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e0e0e0",
      main: "#9d9d9d",
      dark: "#6e6e6e",
      contrastText: "#000000de",
    },
  },
  typography: {
    ...defaultTheme.typography,
    fontSize: 14,
  },
  spacing: defaultTheme.spacing,
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    RaLayout: {
      styleOverrides: {
        root: {
          "& .RaLayout-content": BasePageLayout.root,
          "& .RaLayout-appFrame": {
            margin: "unset",
          },
          "& .MuiDrawer-root": {
            margin: "unset !important",
          },
        },
      },
    },
    RaList: {
      styleOverrides: {
        root: {
          "& .RaList-content": {
            borderRadius: "unset",
            boxShadow: "unset",
            border: "1px solid #E5E5E5",
          },
          "& .MuiTablePagination-root": {
            border: "1px solid #E5E5E5",
            borderTop: "unset",
          },
        },
      },
    },
    RaShow: {
      styleOverrides: {
        root: {
          "& .RaShow-card": {
            boxShadow: "unset",
            border: "1px solid #E5E5E5",
          },
        },
      },
    },
    RaSimpleShowLayout: {
      styleOverrides: {
        root: {
          padding: 0,
          "& .RaSimpleShowLayout-stack > .ra-field": {
            margin: 0,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#6e6e6e",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: {
          "&.MuiButtonBase-containedSecondary": {
            color: "white",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&:before": {
            border: "0 !important",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-flexContainer": {
            justifyContent: "flex-end",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          margin: "1.063rem 0",
          padding: "12px 24px",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          [defaultTheme.breakpoints.down("md")]: {
            paddingLeft: "unset !important",
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          justifyContent: "flex-end",
        },
        spacer: {
          display: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "#00000099",
          fontWeight: "500 !important" as any,
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          "&:hover, &:active": {
            background: "#E5F5EA",
            color: "#02AE5B",
          },
        },
      },
    },
    RaSidebar: {
      styleOverrides: {
        root: {
          "& .RaSidebar-fixed": {
            height: "100%",
            "&::after": {
              content: "''",
              width: "1px",
              height: "100%",
              backgroundColor: "#E5E5E5",
              position: "absolute",
              top: 0,
              right: 0,
              display: "block",
            },
          },
        },
      },
    },
    RaTabbedShowLayout: {
      styleOverrides: {
        root: {
          "& .RaTabbedShowLayout-content": {
            display: "none",
          },
        },
      },
    },
    RaDatagrid: {
      styleOverrides: {
        root: {
          "& .RaDatagrid-table": {
            marginTop: "15px",
          },
          "& .RaBulkActionsToolbar-toolbar": {
            display: "none",
          },
        },
      },
    },
  },
};

function ThemeProvider({
  theme = overridedTheme,
  children,
}: ThemeProviderProps): JSX.Element {
  const customTheme = useConstant<Theme>(() => ({
    ...defaultTheme,
    ...theme,
  }));

  return <MUIThemeProvider theme={customTheme}>{children}</MUIThemeProvider>;
}

export default ThemeProvider;
