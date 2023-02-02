import { expect, test } from "@playwright/experimental-ct-react";
import { hexToRgb } from "@mui/material/styles";
import ThemeProviderTestComponent from "./ThemeProvider.cp.spec";

test("ThemeProvider config test", async ({ mount, page }) => {
  const component = await mount(<ThemeProviderTestComponent />);

  await expect(component).toContainText(/the color is: #02AE5B/i);
  await expect(page.getByTestId("span-text")).toHaveCSS(
    "color",
    hexToRgb("#02AE5B")
  );
});
