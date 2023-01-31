import { Args } from "@storybook/addons";
import { ReactFramework } from "@storybook/react";
import { PartialStoryFn } from "@storybook/csf";
import { ThemeProvider } from "../layout";

function ThemeDecorator(
  Story: PartialStoryFn<ReactFramework, Args>
): JSX.Element {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
}

export default ThemeDecorator;
