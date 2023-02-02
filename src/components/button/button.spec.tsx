import { test, expect } from "@playwright/experimental-ct-react";
import Button from "./button";
import { ThemeProvider } from "../../layout";

test.use({
  headless: false,
});

test.describe("Button component test cases.", () => {
  test("Button should respect the layout", async ({ mount }) => {
    const button = await mount(<Button>Hello World!</Button>);
    await expect(button).toHaveScreenshot();
  });

  test("Button should respect the layout of theme", async ({ mount }) => {
    const button = await mount(
      <ThemeProvider>
        <Button>Hello World!</Button>
      </ThemeProvider>
    );
    await expect(button).toHaveScreenshot();
  });

  test("Should render with a contained variant", async ({ mount }) => {
    const button = await mount(
      <ThemeProvider>
        <Button variant="contained">Hello World!</Button>
      </ThemeProvider>
    );
    await expect(button).toHaveScreenshot();
  });

  test("Button should render the correct children text", async ({ mount }) => {
    const button = await mount(<Button>Hello World!</Button>);
    await expect(button).toContainText(/Hello world!/i);
  });

  test("Button should execute the callback function", async ({ mount }) => {
    let executed: boolean = false;
    const button = await mount(
      <Button variant="contained" onClick={() => (executed = true)}>
        Hello World!
      </Button>
    );
    await button.click({
      delay: 500,
    });
    expect(executed).toBe(true);
  });
});
